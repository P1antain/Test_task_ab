import React from "react";
import User from "../User/User";
import styles from "./UserLists.module.css";

export default function UserLists({ users }) {
  return (
    <>
      <ul className={styles.lists}>
        {users.length > 0 ? (
          <>
            <li className={styles.elem}>
              <span className={styles.item}>ID USERS</span>
              <span className={styles.item}>DATE REGISTRATION</span>
              <span className={styles.item}>DATE LAST ACTIVITY</span>
            </li>
            {users.map((el) => {
              return <User el={el} key={el.id} />;
            })}
          </>
        ) : (
          <>
            <span className={styles.nothing}>
              Missing data, please add new users
            </span>
          </>
        )}
      </ul>
    </>
  );
}
