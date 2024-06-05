import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameStarter from './components/Game/GameStarter'; // Asegúrate que la ruta sea correcta
import Header from './components/common/Header';
import Questions from './Questions';

const App: React.FC = () => {
    const comenzarJuego = () => {
        console.log("Comenzar juego");
    };

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/preguntas" element={<Questions />} />
                    <Route path="/" element={<GameStarter onStart={comenzarJuego} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
