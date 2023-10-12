import React, { useState } from 'react';

const Contacto = () => {
    const [email, setEmail] = useState('');
    const [comentario, setComentario] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleComentarioChange = (e) => {
        setComentario(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Agregar lógica de envío del formulario aquí
    };

    return (
        <div className="flex items-center justify-center h-[40%] bg-white text-white">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold text-black text-center">Contactanos</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Ingresa tu correo electrónico"
                            value={email}
                            onChange={handleEmailChange}
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
                            required
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
        </div>
    );
};

export default Contacto;

