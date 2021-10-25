import React from "react";
import styles from "./App.module.css";
import CreateUser from "../CreateUser/CreateUser";
import UserLists from "../UserLists/UserLists";
import { useDispatch, useSelector } from "react-redux";
import { getUser, newUser } from "../../Redux/defaultRedux";
import WorkingData from "../WorkingData/WorkingData";
import { settingApi } from "../../Api/Api";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.default.users);
  const sendUserData = (data) => {
    dispatch(newUser(data));
  };
  React.useEffect(() => {
    if (users.length <= 0) {
      settingApi.getUserApi().then((data) => dispatch(getUser(data.data.data)));
    }
  }, []);
  const saveData = () => {
    settingApi.postUserApi(users).then(() => console.log("Send completed"));
  };
  const deleteData = () => {
    settingApi.deleteUserApi().then(() => {
      console.log("Deletion completed");
    });
  };
  console.log(users);
  return (
    <>
      <div className={styles.main}>
        <CreateUser sendUserData={sendUserData} />
        <UserLists users={users} />
        <WorkingData
          users={users}
          saveData={saveData}
          deleteData={deleteData}
        />
      </div>
    </>
  );
}

export default App;
