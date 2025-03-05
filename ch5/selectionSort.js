function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        arr[j] = arr[i];
        arr[i] = smallest;
      }
    }
  }
  console.log(arr);
}
let test = [];
for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}
selectionSort(test);
selectionSort([1, 2, 3, -5, 0, 5, 6, 7]);
