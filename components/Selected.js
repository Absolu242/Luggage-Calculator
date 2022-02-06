import React, { useContext } from "react";
import { AppContext } from "../context/Appstore";

export default function Selected({ limit }) {
 
  const {state,dispatch}= useContext(AppContext)

  // here we check if there is items or not
  const data = state.selected.length === 0  ? [] : state.selected  


  //here we calculate the total weight of the items
  const total =
    data.length === 0
      ? 0
      : data.reduce((accumulator, item) => accumulator + item.weight, 0);


  // this function transfers back items from the selected row to the inventory row
  const onRemoveItem = (item) => {
    dispatch({type:"ADD_INVENTORY", payload: item});
    dispatch({type:"REMOVE_SELECTED", payload: item});
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
