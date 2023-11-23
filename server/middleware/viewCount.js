// Total je kono api call korle ei middleware call hobe
let count = 0;
const viewCount = (req, res, next) => {
  count++;
  console.log(count);
  next();
};

module.exports = viewCount;
