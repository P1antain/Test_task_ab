import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import styles from "./RechartGraphics.module.css";

export default function RechartGraphics({ data, numberDate, allUser, dataRolling }) {
  let retention =
    Math.round((allUser.realUser / allUser.registeredUsers) * 100) + "%";
  return (
    <>
      <h2 className={styles.head}>
        Retention {numberDate} day: {retention}{" "}
      </h2>
      <div className={styles.block}>
        <span className={styles.el}>All users : {allUser.registeredUsers}</span>
          <span className={styles.el}>Real users : {allUser.realUser}</span>
        <span className={styles.el}>Days count : {numberDate}</span>
      </div>
      <LineChart
        width={770}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 40,
          bottom: 20,
          left: 10,
        }}
      >
        <Line type="monotone" dataKey="User" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
        <h2 className={styles.head}>
            Rolling Retention 7 day {dataRolling[6].User} %{" "}
        </h2>
        <LineChart
            width={770}
            height={300}
            data={dataRolling}
            margin={{
                top: 20,
                right: 40,
                bottom: 20,
                left: 10,
            }}
        >
            <Line type="monotone" dataKey="User" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    </>
  );
}
