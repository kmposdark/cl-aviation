// components/Navbar.js
"use client"; // Asegúrate de marcar este componente como un Client Component

import { useState } from 'react';
import Link from 'next/link';
import styles from './menu.module.scss'; // Importa los estilos SCSS modulares

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.dropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className={styles.dropdownButton}>Campus</button>
        {isOpen && (
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}>
              <Link href="/">Inicio</Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Menu;