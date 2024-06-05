import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './index.css'; // Asegúrate de importar tu CSS

Modal.setAppElement('#root'); // Necesario para la accesibilidad del modal

const Questions: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [timer, setTimer] = useState<number | null>(null);
    const [seconds, setSeconds] = useState(0);

    const handleOptionClick = (option: string) => {
        if (timer) {
            clearInterval(timer); // Limpia el temporizador actual
        }
        setSeconds(0); // Reinicia el contador de segundos
        const message = option === 'Cristóbal Colón' ? 'correcto' : 'incorrecto'; // Cambié el mensaje a 'correcto' o 'incorrecto'
        setModalContent(message);
        setModalIsOpen(true);
    };

    useEffect(() => {
        const newTimer = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds < 9) {
                    console.log(prevSeconds + 1);
                    return prevSeconds + 1;
                } else {
                    // Llegó a 10 segundos, muestra el modal de tiempo agotado
                    setModalContent('tiempo_agotado'); // Cambié el mensaje a 'tiempo_agotado'
                    setModalIsOpen(true);
                    clearInterval(newTimer);
                    return 10;
                }
            });
        }, 1000); // Actualiza cada segundo
        setTimer(newTimer);

        return () => {
            if (timer) {
                clearInterval(timer); // Limpia el temporizador al desmontar
            }
        };
    }, []);

    return (
        <div className="questionContainer">
            <div className="questionTitle">¿Quién descubrió América?</div>
            <div className="optionsRow">
                <div onClick={() => handleOptionClick('Cristóbal Colón')} className="radioLabel">Cristóbal Colón</div>
                <div onClick={() => handleOptionClick('Vasco da Gama')} className="radioLabel">Vasco da Gama</div>
            </div>
            <div className="optionsRow">
                <div onClick={() => handleOptionClick('Américo Vespucio')} className="radioLabel">Américo Vespucio</div>
                <div onClick={() => handleOptionClick('Leif Erikson')} className="radioLabel">Leif Erikson</div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {
                    setModalIsOpen(false);
                    setSeconds(0); // Reinicia el contador de segundos al cerrar el modal
                    setTimer(null); // Detiene el temporizador
                }}
                contentLabel="Resultado de la pregunta"
                className="Modal"
                overlayClassName="Overlay"
            >
                {modalContent === 'correcto' && <img src="/visto.png" alt="Correcto" />} {/* Muestra la imagen de 'visto' si es correcto */}
                {modalContent === 'incorrecto' && <img src="/error.png" alt="Incorrecto" />} {/* Muestra la imagen de 'error' si es incorrecto */}
                {modalContent === 'tiempo_agotado' && <img src="/agotado.png" alt="Tiempo Agotado" />} {/* Muestra la imagen de 'tiempo_agotado' si se agotó el tiempo */}
            </Modal>
        </div>
    );
};

export default Questions;
