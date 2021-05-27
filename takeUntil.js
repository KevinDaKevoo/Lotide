const takeUntil = function(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return results;
    } else {
      results.push(array[i]);
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //need it to stop at -1
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]; // need it to stop at ,
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);