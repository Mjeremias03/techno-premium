import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInFromLeft } from "../About/Framer";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Nosotros = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-600">
            <motion.div
                className="min-h-screen flex flex-col justify-center items-center p-8"
                variants={fadeInFromLeft(2, 1)}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-3xl mx-4 justify-center text-center text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">¿Quiénes Somos?</h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
                        ¡Hola y bienvenido a TechnoPremium! Somos una empresa dedicada a la venta de celulares usados de alta calidad. Nuestra misión es ofrecer dispositivos móviles confiables a precios asequibles para satisfacer las necesidades de nuestros clientes. ¡Gracias por confiar en nosotros!
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl mb-4">Síguenos en instagram:</p>
                    <div className="flex justify-center space-x-4 text-4xl">
                        {/* <a href="#" target="_blank"><FaFacebook style={{ color: '#1877f2' }} /></a>
                        <a href="#" target="_blank"><FaTwitter style={{ color: '#1da1f2' }} /></a> */}
                        <a href="https://www.instagram.com/technopremiumcba/" target="_blank"><FaInstagram style={{ color: '#c32aa3' }} /></a>
                        {/* <a href="#" target="_blank"><FaLinkedin style={{ color: '#0077b5' }} /></a> */}
                    </div>
                </div>
                <div className="max-w-3xl mx-auto">
                    <img
                        src="/nuevo.jpg"
                        alt="Nuestra Empresa"
                        className="w-full h-auto rounded-lg shadow-lg my-8"
                    />
                </div>
                <a href="/" className="text-blue-500 text-xl hover:underline my-4">Volver a la página principal</a>
            </motion.div>
        </div>
    );
}

export default Nosotros;

