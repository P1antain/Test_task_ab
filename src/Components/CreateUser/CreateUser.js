import React from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateUser.module.css";
export default function CreateUser({ sendUserData }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => sendUserData(data);
  const dateMaxValue = new Date().toISOString().split("T")[0];
  return (
    <>
      <h1 className={styles.header}>New users </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label htmlFor="dateRegister" className={styles.label}>
          Date Registration:
          <input
            id={"dateRegister"}
            className={styles.input}
            type={"date"}
            max={dateMaxValue}
            {...register("dateRegister", { required: true })}
          />
        </label>

        <label htmlFor="dateActive" className={styles.label}>
          Date Last Activity:
          <input
            id={"dateActive"}
            className={styles.input}
            type={"date"}
            max={dateMaxValue}
            {...register("dateActive", { required: true })}
          />
        </label>
        <button className={styles.btn}>Send</button>
      </form>
    </>
  );
}
