import React, { useState } from 'react';
import { sendEmail } from '../../Redux/Actions';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
const Contacto = () => {
  const [name, setName] = useState('');
  const [from, setForm] = useState('');
  const [comentario, setComentario] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFormChange = (e) => {
    setForm(e.target.value);
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(sendEmail(from, name));
      // Envío exitoso
      toast.success('Suscripción exitosa', {
        position: "top-center",
        autoClose: 3000,
      });
      
      // Limpiar los campos después del envío exitoso
      setForm('');
      setName('');
      setComentario('');
    } catch (error) {
      // Manejo de errores aquí, si es necesario
      console.error('Error:', error);
      // Puedes mostrar una notificación de error si deseas
      toast.error('Hubo un error al enviar el correo electrónico', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div id='contactanos' className="flex items-center justify-center mt-40 h-[40%] bg-white text-white">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-black text-center">Subscríbete y recibe nuevas ofertas y beneficios</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold" htmlFor="from">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="from"
              type="email"
              name="from"
              placeholder="Ingresa tu correo electrónico"
              value={from}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold" htmlFor="comentario">
              Comentario
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comentario"
              name="comentario"
              placeholder="Escribe tu comentario"
              value={comentario}
              onChange={handleComentarioChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Toaster/>
    </div>
  );
};

export default Contacto;
