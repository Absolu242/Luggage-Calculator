import React, { useContext } from "react";
import { AppContext } from "../context/Appstore";



export default function Inventory({ data = [] }) {
 
  const {dispatch,state} = useContext(AppContext);


  /*function to transfer items from the inventory row to the selected row*/
  const onAddItem = (item) => {
    dispatch({type:"ADD_SELECTED", payload: item});
    dispatch({type:"REMOVE_INVENTORY", payload: item});
  };

  //inventory data coming from the server
  const OriginalInventoryData = data 

  //data or items marked as selected
  const selectedData = state.selected


  /*here we calculate the difference of items between
  the original data items and the selected items.
  And we return as result the items which are not in the selected row 
  */
  const dataDifference = 
  OriginalInventoryData.length > 0 &&
  OriginalInventoryData.filter(
      ({ label: label1 }) =>
        !selectedData.some(({ label: label2 }) => label2 === label1)
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
                  Add 
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

