module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/ads.txt',
          destination: '/ads.txt',
        },
      ],
    };
  },
};
