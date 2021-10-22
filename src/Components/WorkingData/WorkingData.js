import React from "react";
import styles from "./WorkingData.module.css";
import { useDispatch, useSelector } from "react-redux";
import {allUserFromCount, getDiagram} from "../../Redux/defaultRedux";
import RechartGraphics from "../RechartGraphics/RechartGraphics";

export default function WorkingData({ users }) {
  const dispatch = useDispatch();
  const diagram = useSelector((state) => state.default.diagram);
  const allUserElem = useSelector((state)=> state.default.allUserFromCount)
  let numberDate = 7;

  const calculate = () => {
    let item = [];
    for (let i = 0; i < users.length; i++) {
      let currentData = new Date();
      let dataRef = new Date(users[i].data.dateRegister);
      let dataAct = new Date(users[i].data.dateActive);
      currentData.setDate(currentData.getDate() - numberDate);

      if (dataAct >= currentData && dataRef >= currentData) {
        item.push(users[i].data.dateActive);
      } else {
        console.log("Registration date is less than current date");
      }
    }
    dispatch(allUserFromCount(item))
    const count = item.reduce((key, val) => {
      key[val] = (key[val] || 0) + 1;
      return key;
    }, {});
    let res = Object.entries(count).map(([name, User]) => {
      return {
        name,
        User,
      };
    });
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
  return (
    <>
      {users.length > 0 && (
        <>
          <div className={styles.block}>
            <button className={styles.btn}>Save</button>
            <button className={styles.btn} onClick={calculate}>
              Calculate
            </button>
            <button className={styles.btn}>Delete</button>
          </div>
          <div className={styles.wrapper}>
            {diagram.length > 0 && (
              <RechartGraphics data={diagram} numberDate={numberDate}  allUserElem={allUserElem}/>
            )}
          </div>
        </>
      )}
    </>
  );
}
