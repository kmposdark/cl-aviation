"use client";
import { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-button">
          Menú
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link href="/">Inicio</Link>
            </li>
            <li className="dropdown-item">
              <Link href="/about">Acerca de</Link>
            </li>
            <li className="dropdown-item">
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Menu;