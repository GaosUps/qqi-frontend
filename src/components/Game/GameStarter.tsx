// En GameStarter.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GameStarter.module.css'; // Importar estilos del módulo CSS

interface GameStarterProps {
    onStart: () => void;
}

const GameStarter: React.FC<GameStarterProps> = ({ onStart }) => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Nombre del jugador" className={styles.playerInput} />
            <Link to="/preguntas">
                <button className={styles.startButton} onClick={onStart}>
                    Comenzar juego
                </button>
            </Link>
        </div>
    );
};

export default GameStarter;
