import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/pages/about',
      },
      //CAMPUS      
      {
        source: '/SPE',
        destination: '/pages/campus/SMS_y_plan_emergencia',
      },
      {
        source: '/tripulantes',
        destination: '/pages/campus/tripulante_de_cabina',
      },
      {
        source: '/english-aviation-program',
        destination: '/pages/campus/english',
      },
      {
        source: '/mantenimiento-aeronautico',
        destination: '/pages/campus/mantenimiento_aeronautico',
      },
      {
        source: '/sistemas-de-calidad',
        destination: '/pages/campus/sistemas_de_calidad',
      },
      {
        source: '/instalaciones',
        destination: '/pages/campus/nuestras_instalaciones',
      },
      {
        source: '/inscribete',
        destination: '/pages/campus/inscribete',
      },
    ];
  },
};

export default nextConfig;
