module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://altan.vercel.app/:path*",
      },
    ];
  },
};
