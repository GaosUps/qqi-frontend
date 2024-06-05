import React from 'react';
import GameStarter from '../src/components/Game/GameStarter'; // Ruta de importación correcta para GameStarter
import Header from '../src/components/header/Header'; // Ruta de importación correcta para GameStarter

const App: React.FC = () => {
    const comenzarJuego = () => {
        console.log('Juego comenzado');
    };

    return (
        <>
            <Header />
            <GameStarter onStart={comenzarJuego} />
        </>
    );
};

export default App;
