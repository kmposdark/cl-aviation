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
      {
        source: '/contact',
        destination: '/pages/contact',
      },
      {
        source: '/sms-y-plan-de-emergencia',
        destination: '/pages/campus/SMS_y_plan_emergencia',
      },
    ];
  },
};

export default nextConfig;
