import React from 'react';
import styles from './GameStarter.module.css'; // Importar estilos del módulo CSS

interface GameStarterProps {
    onStart: () => void;
}

const GameStarter: React.FC<GameStarterProps> = ({ onStart }) => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Nombre del jugador" className={styles.playerInput} />
            <button className={styles.startButton} onClick={onStart}>
                Comenzar juego
            </button>
        </div>
    );
};

export default GameStarter;
