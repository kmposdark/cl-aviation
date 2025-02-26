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
        source: '/sms-y-plan-de-emergencia',
        destination: '/pages/campus/SMS_y_plan_emergencia',
      },
      {
        source: '/nosotros',
        destination: '/pages/nosotros',
      },
      {
        source: '/contacto',
        destination: '/pages/contacto',
      },
    ];
  },
};

export default nextConfig;
