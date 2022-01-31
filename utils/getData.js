import axios from "axios";

export async function getData() {
  try {
    const response = await axios.get(
      "https://weekndr.herokuapp.com/api/v2/cabin-luggage-inventory"
    );
    
   return response;
  } catch (error) {
    return error;
  }
}
