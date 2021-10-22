import React from "react";
import styles from "./App.module.css";
import CreateUser from "../CreateUser/CreateUser";
import UserLists from "../UserLists/UserLists";
import { useDispatch, useSelector } from "react-redux";
import { newUser } from "../../Redux/defaultRedux";
import WorkingData from "../WorkingData/WorkingData";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.default.users);
  const sendUserData = (data) => {
    dispatch(newUser(data));
  };
  return (
    <>
      <div className={styles.main}>
        <CreateUser sendUserData={sendUserData} />
        <UserLists users={users} />
        <WorkingData users={users}/>
      </div>
    </>
  );
}

export default App;
