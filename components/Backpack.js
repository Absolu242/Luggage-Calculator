import React from "react";
import {  useSelector } from "react-redux";



export default function Backpack({ limit }) {
  const data = useSelector((state) => state.selectedItems);

  const total =
    data.length === 0
      ? 0
      : data.reduce((accumulator, item) => accumulator + item.weight, 0);

  return (
    <div className="card">
      <div className="title"> My Backpack</div>

      <ul className="items">
        {!data ? (
          <></>
        ) : data.length === 0 ? (
          <p style={{ color: "gray", padding: "1rem" }}>
            No items availaible...
          </p>
        ) : (
          data.map((item, i) => (
            <li key={i} className="item">
              <p>{item.label}</p>{" "}
              <p className="right">
                <span className="weight">{item.weight}g</span>
              </p>
            </li>
          ))
        )}
      </ul>
      <div className="bottom">
        <p className="total">
          <span className="label">Total</span>
          <span className={total > limit ? "danger" : "sum"}>
            {total / 1000} kg
          </span>
        </p>
      </div>
    </div>
  );
}
