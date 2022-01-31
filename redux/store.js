import { configureStore } from "@reduxjs/toolkit";
import { IventoryReducer } from "./Inventory.slices";
import { SelectedReducer } from "./Selected.slices";


const reducer = {
    inventoryItems: IventoryReducer,
    selectedItems: SelectedReducer
  };
  
  const store = configureStore({
    reducer,
  });
  
  export default store;