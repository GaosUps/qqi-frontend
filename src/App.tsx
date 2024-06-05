import React from 'react';

const App: React.FC = () => {
    const comenzarJuego = () => {
        console.log('Juego comenzado');
    };

    return (
        <>
            <header>
                <img src="/descargar_imagen_mejorada.webp" alt="Logo" className="logo" />
                <h1 className="titulo">¿Quién quiere ser ingeniero?</h1>
            </header>
            <div className="container">
                <input id="jugador" className="jugador" type="text" placeholder="Nombre del jugador" />
                <button className="botonImagen" onClick={comenzarJuego}>
                    <span>Comenzar juego</span>
                </button>
            </div>
        </>
    );
};

export default App;
