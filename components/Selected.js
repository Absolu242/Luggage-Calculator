import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addInventory } from "../redux/Inventory.slices";
import { removeSelected } from "../redux/Selected.slices";

export default function Selected({ limit }) {
  const data = useSelector((state) => state.selectedItems);
  const dispatch = useDispatch();

  const total =
    data.length === 0
      ? 0
      : data.reduce((accumulator, item) => accumulator + item.weight, 0);

  const onRemoveItem = (item) => {
    dispatch(addInventory(item));
    dispatch(removeSelected(item));
  };

  return (
    <div className="card">
      <div className="title"> Selected</div>

      <ul className="items height">
        {!data ? (
          <></>
        ) : data.length === 0 ? (
          <p style={{ color: "gray", padding: "1rem" }}>
            No items availaible...
          </p>
        ) : (
          data.map((item, i) => (
            <li key={i} className="item border">
              <p>{item.label}</p>{" "}
              <p className="right">
                <span onClick={() => onRemoveItem(item)} className="action red">
                  {" "}
                  remove{" "}
                </span>{" "}
                <span className="weight">{item.weight}g</span>
              </p>
            </li>
          ))
        )}
      </ul>
      <div className="bottom">
        <p className="total">
          <span className="label">Total</span>
          <span className={total > limit && limit > 0 ? "danger" : "sum"}>
            {total / 1000} kg
          </span>
        </p>
        <button
          disabled={total <= 0 || total > limit ? true : false}
          className={total <= 0 || total > limit ? "submit disabled" : "submit"}
        >
          See resume
        </button>
      </div>
    </div>
  );
}
