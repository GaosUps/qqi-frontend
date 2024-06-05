import React from 'react';
import styles from './Header.module.css'; // Importar estilos del módulo CSS

// Añade `children` como prop opcional
const Header: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const defaultTitle = "¿Quién Quiere Ser Ingeniero?"; // Título por defecto

    return (
        <header className={styles.header}>
            <img src="/descargar_imagen_mejorada.webp" alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>{defaultTitle}</h1>
            {/* Renderiza `children` aquí, debajo del título o donde lo necesites */}
            {children}
        </header>
    );
};

export default Header;
