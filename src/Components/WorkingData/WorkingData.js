import React from "react";
import styles from "./WorkingData.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDiagram } from "../../Redux/defaultRedux";
import RechartGraphics from "../RechartGraphics/RechartGraphics";

export default function WorkingData({ users }) {
  const dispatch = useDispatch();
  const diagram = useSelector((state) => state.default.diagram);

  const calculate = () => {
    let item = [];
    let numberDate = 7;
    for (let i = 0; i < users.length; i++) {
      let currentData = new Date();
      let data = new Date(users[i].data.dateRegister);
      currentData.setDate(currentData.getDate() - numberDate);
      if (data > currentData) {
        item.push(users[i]);
      } else {
        console.log("Registration date is less than current date");
      }
    }
    dispatch(getDiagram(item));
  };

  console.log(diagram);
  console.log(users.length)
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
            <RechartGraphics/>
          </div>
        </>
      )}
    </>
  );
}
