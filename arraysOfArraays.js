function collector(arrs) {
  let result = [];
  pushValues(arrs);
  return result;
  function pushValues(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        pushValues(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }
}

let a = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

console.log(collector(a));
