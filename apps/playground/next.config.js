/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/team",
      },
    ];
  }
};
