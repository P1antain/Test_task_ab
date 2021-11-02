import React from "react";
import styles from "./WorkingData.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getRegisteredUsers,
  getDiagram,
  getRealUser, getRollingRetention,
} from "../../Redux/defaultRedux";
import RechartGraphics from "../RechartGraphics/RechartGraphics";
import { set } from "react-hook-form";

export default function WorkingData({ users, saveData, deleteData }) {
  const dispatch = useDispatch();
  const diagram = useSelector((state) => state.default.diagram);
  const rollingRetention = useSelector((state)=> state.default.rollingRetention)
  const allUser = useSelector((state) => state.default);
  let numberDate = 7;

  const calculate = () => {
    retention();
    rollingRetentions();
  };
  const retention = () => {
    let item = [];
    let user = [];
    for (let i = 0; i < users.length; i++) {
      let currentData = new Date();
      let dataReg = new Date(users[i].data.dateRegister);
      let dataAct = new Date(users[i].data.dateActive);
      currentData.setDate(currentData.getDate() - numberDate);
      if (dataAct >= currentData && dataReg >= currentData) {
        item.push(users[i].data.dateActive);
      } else if (dataAct < currentData && dataReg >= currentData) {
        user.push(users[i]);
        console.log("Registration date is less than current date");
      }
    }
    let val = item.length + user.length;
    dispatch(getRegisteredUsers(val));
    dispatch(getRealUser(item.length));
    const count = item.reduce((key, val) => {
      key[val] = (key[val] || 0) + 1;
      return key;
    }, {});
    let res = resResult(count);
    res.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    dispatch(getDiagram(res));
  };

  const rollingRetentions = () => {
    let testResult = [];
    for (let i = 0; i < 7; i++) {
      testResult[i] = 0;
    }
    let res = resResult(testResult);

    let data = users.map((m) => m.data);

    for (let i = 0; i < data.length; i++) {
      let dataReg = data[i].dateRegister;
      let dataAct = data[i].dateActive;
      let newData = new Date(dataReg);
      newData.setDate(newData.getDate() + numberDate);
      let currentData = newData.toISOString().slice(0, 10);
      if (dataReg <= dataAct && dataAct <= currentData) {
        res[0].User++;
      } else {
        for (let j = 0; j < res.length; j++) {
          res[j].User++;
        }
      }
    }

    let dataRolling = [];
    for (let u = 0; u < res.length; u++) {
      let userValues = res[0].User;
      dataRolling.push( Math.round((res[u].User / userValues) * 100));
    }
    dataRolling = resResult(dataRolling);

    dispatch(getRollingRetention(dataRolling))

  };

  function resResult(value) {
    return Object.entries(value).map(([name, User]) => {
      return {
        name,
        User,
      };
    });
  }
  return (
    <>
      {users.length > 0 && (
        <>
          <div className={styles.block}>
            <button className={styles.btn} onClick={saveData}>
              Save
            </button>
            <button className={styles.btn} onClick={calculate}>
              Calculate
            </button>
            <button className={styles.btn} onClick={deleteData}>
              Delete
            </button>
          </div>
          <div className={styles.wrapper}>
            { rollingRetention.length > 0 && (
              <RechartGraphics
                data={diagram}
                dataRolling={rollingRetention}
                numberDate={numberDate}
                allUser={allUser}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}
