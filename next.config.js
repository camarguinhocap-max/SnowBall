module.exports = {
  async rewrites() {
    return [
      {
        source: '/ads.txt',
        destination: '/api/ads',
      },
    ];
  },
};
