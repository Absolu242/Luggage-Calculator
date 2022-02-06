 export const reducer = (state, action) => {
   switch (action.type) {
     case "ADD_INVENTORY":
       return {
         ...state,
         inventory: [...state.inventory, action.payload],
       };
     case "REMOVE_INVENTORY":
       const index = state.inventory.findIndex(
         (item) => item.label === action.payload.label
       );
       return {
         ...state,
         inventory: state.inventory.splice(index, 1),
       };
     case "ADD_SELECTED":
       return {
         ...state,
         selected: [...state.selected, action.payload],
       };
 
     case "REMOVE_SELECTED":
       const newSelected = state.selected.length === 1 ? [] : state.selected.filter( item => item.label !== action.payload.label
       );
       return {
         ...state,
         selected: newSelected,
       };
 
     default:
       return state;
   }
 };
 