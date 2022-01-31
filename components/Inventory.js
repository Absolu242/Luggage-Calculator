import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeInventory } from "../redux/Inventory.slices";
import { addSelected } from "../redux/Selected.slices";


export default function Inventory({ data = [] }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selectedItems);

  const onAddItem = (item) => {
    dispatch(addSelected(item));
    dispatch(removeInventory(item));
  };

  // Ici je calcule la difference d'items entre Inventory et Selected
  const dataDifference =
    data.length > 0 &&
    data.filter(
      ({ label: label1 }) =>
        !selected.some(({ label: label2 }) => label2 === label1)
    );

  return (
    <div className="card">
      <div className="title"> Inventory</div>

      <ul className="items">
        {!dataDifference ? (
          <div className="loader">Loading...</div>
        ) : dataDifference.length === 0 ? (
          <p style={{ color: "gray", padding: "1rem" }}>
            No items availaible...
          </p>
        ) : (
          dataDifference.map((item, i) => (
            <li key={i} className="item">
              <p>{item.label}</p>{" "}
              <p>
                <span onClick={() => onAddItem(item)} className="action green">
                  Add ->
                </span>{" "}
                <span className="weight">{item.weight}g</span>
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

