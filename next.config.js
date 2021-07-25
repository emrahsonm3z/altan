module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://api.example.com/:path*",
      },
    ];
  },
};
