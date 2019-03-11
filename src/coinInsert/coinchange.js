const calCoinChange = (cost) => {
  // only coin1 coin10
  // TODO support all coin type
  const change = {
    '1': cost % 10,
    '5': 0,
    '10': Math.floor(cost / 10),
    '20': 0,
    '50': 0,
    '100': 0,
    '500': 0,
    '1000': 0,
  };
  return change;
};


export default calCoinChange;
