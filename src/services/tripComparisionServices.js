const comparePrices = (provider1Price, provider2Price) => {
  // Your comparison logic here
  // Example: return the provider with the lowest price
  return provider1Price < provider2Price ? "provider1" : "provider2";
};

module.exports = {
  comparePrices,
};
