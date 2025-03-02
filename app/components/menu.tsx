// components/Navbar.js
"use client"; // Asegúrate de marcar este componente como un Client Component

import { useState } from 'react';
import Link from 'next/link';
import styles from './menu.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      {/* Espacio para el logo */}
      <div className={styles.logo}>
        {/* Aquí puedes agregar tu logo */}
      </div>

      {/* Contenedor para los elementos del menú */}
      <div className={styles.menuContainer}>
        <div
          className={styles.dropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={styles.dropdownButton}>Campus</button>
          {isOpen && (
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/SPE">SMS y Plan de Emergencia</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/english-aviation-program">English for Aviation Program</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/mantenimiento-aeronautico">Mantenimiento Aeronáutico</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sistemas-de-calidad">Sistemas de Calidad</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/instalaciones">Nuestras Instalaciones</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/inscribete">Inscríbete</Link>
              </li>
            </ul>
          )}
        </div>
        <div
          className={styles.dropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={styles.dropdownButton}>Consultoría</button>
          { isOpen && (
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/consultoria">Consultoría</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/capacitacion">Capacitación</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/auditorias">Auditorías</Link>
              </li>
            </ul>
          )}
        </div>
        <div
          className={styles.dropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={styles.dropdownButton}>Auditoría</button>
          { isOpen && (
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/historia">Historia</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/mision-vision">Misión y Visión</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/valores">Valores</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/equipo">Equipo</Link>
              </li>
            </ul>
          )}
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>Nosotros</button>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>Contacto</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;