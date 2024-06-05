import React from 'react';
import styles from './Header.module.css'; // Importar estilos del módulo CSS

const Header: React.FC = () => {
    const defaultTitle = "¿Quién Quiere Ser Ingeniero?"; // Título por defecto

    return (
        <header className={styles.header}>
            <img src="/descargar_imagen_mejorada.webp" alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>{defaultTitle}</h1>
        </header>
    );
};

export default Header;
