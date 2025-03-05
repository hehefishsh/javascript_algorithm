function minSubLength(arr, sum) {
  let minlength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < arr.length) {
    currentSum += arr[right];

    while (currentSum >= sum) {
      if (minlength > right - left + 1) {
        minlength = right - left + 1;
      }
      currentSum -= arr[left];
      left++;
    }
    right++;
  }

  if (minlength == Infinity) {
    return 0;
  } else {
    return minlength;
  }
}

console.log(minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11));
