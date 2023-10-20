import axios from "axios"
import { GET_CELULARES,INFO_CELULARES,GET_CELULARESID,SEND_EMAIL } from "./actionTypes";

export const getCelulares = () => {
    return async function (dispatch) {
      try {
        const { data } = await axios.get("https://techno-premium-production.up.railway.app/");
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
        const { data } = await axios.get("https://techno-premium-production.up.railway.app/celulares");
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
  export const sendEmail = (email, name) => {
    return async (dispatch) => {
      try {
        const response = await axios.post("https://techno-premium-production.up.railway.app/contact", {
          from: email,
          name: name,
        });
  
        // Verificar el status de la respuesta
        if (response.status === 200) {
          // Despachar una acción de éxito
          dispatch(enviarEmailExitoso(response.data));
        } else {
          // Puedes despachar una acción de error si es necesario
          dispatch(enviarEmailError("Hubo un error al enviar el correo electrónico"));
        }
      } catch (error) {
        console.error("Error:", error);
        // Puedes manejar errores o despachar acciones en caso de error si lo deseas
        dispatch(enviarEmailError("Hubo un error al enviar el correo electrónico"));
      }
    };
  };
  const enviarEmailExitoso = (data) => {
    return {
      type: "ENVIAR_EMAIL_EXITOSO",
      payload: data,
    };
  };
    