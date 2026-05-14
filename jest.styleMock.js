const proxy = new Proxy(
  {},
  {
    get: (target, key) => key,
  },
);
module.exports = proxy;
