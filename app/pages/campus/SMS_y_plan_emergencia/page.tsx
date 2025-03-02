// app/home/page.tsx

import React from 'react';

const CampusSMS = () => {
  return (
    <div className='container mx-auto'>
      // Ejemplo con un botón
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to the sms-y-plan-de-emergencia Page</h1>
        <p className="text-xl mb-8">description</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default CampusSMS;
