const middle = function(removeMiddleItem) {
  let midNum = Math.floor(removeMiddleItem.length / 2);
  let result = [];
  for (let j = 0; j < removeMiddleItem.length; j++) {
    if (j === midNum || j === midNum - 1) {
    } else {
      result.push(removeMiddleItem[j]);
    }
  }
  return result;
};

module.exports = middle;