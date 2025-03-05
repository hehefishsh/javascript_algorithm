function bubbleSort(arr) {
  let step = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    let swapping = false;
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
        swapping = true;
        console.log(arr);
        console.log("it takes " + step + " steps");
      }
    }
    if (!swapping) {
      break;
    }
  }
  console.log("it takes " + step + " steps");
  console.log(arr);
}
let test = [];
for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}
// bubbleSort(test);
bubbleSort([1, 2, 3, 4, 0, 5, 6, 7]);
