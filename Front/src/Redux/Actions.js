import axios from "axios"
import { GET_CELULARES,INFO_CELULARES,GET_CELULARESID } from "./actionTypes";

export const getCelulares = () => {
    return async function (dispatch) {
      try {
        const { data } = await axios.get("http://localhost:3001/");
        dispatch({
          type: GET_CELULARES,
          payload: data,
        });
       
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
  };
  export const getCelularesId = () => {
    return async function (dispatch) {
      try {
        const { data } = await axios.get("http://localhost:3001/celulares");
        dispatch({
          type: GET_CELULARESID,
          payload: data,
        });
       
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
  };
  export const infoCelulares = ({id}) => {
    return async function (dispatch) {
      try {
        const { data } = await axios.get(`https://techno-premium-production.up.railway.app/celulares/${id}`);
        dispatch({
          type: INFO_CELULARES,
          payload: data,
        });
       
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
  };