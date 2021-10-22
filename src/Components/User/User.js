import React from "react";
import styles from './User.module.css'

export default function User({ el }) {
  return (
    <>
      <li className={styles.li}>
        <span className={styles.element}>{el.id}</span>
        <span className={styles.element}>{el.data.dateRegister}</span>
        <span className={styles.element}>{el.data.dateActive}</span>
      </li>
    </>
  );
}
