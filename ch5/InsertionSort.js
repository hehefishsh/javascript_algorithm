function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      // console.log(arr[i]);
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
}

let test = [];
for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}
insertionSort(test);
insertionSort([1, 2, 3, -5, 0, 5, 6, 7]);
