/** @type {import('next').NextConfig} */
module.exports = {
  rewrites: async () => {
    return [
//       { source: "/", destination: "/team" },
    ];
  },
  transpilePackages: ["@repo/ui"],
  compiler: {
    emotion: true,
  },
};


