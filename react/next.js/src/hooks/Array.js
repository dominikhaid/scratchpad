const SplitArray = (arrIn, maxItems) => {

  let count = 0;
  let arr = [];
  let arrLen = Math.ceil(arrIn.length / maxItems);
  arr.push([]);
  for (let index = 0; index < arrLen; index++) {
    arr.push(arrIn.slice(count, count + maxItems));
    count += maxItems;
  }
  return arr;
};

export {SplitArray};
