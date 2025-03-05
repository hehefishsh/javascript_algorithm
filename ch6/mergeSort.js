// Divide and Conquer 分而治之
// [38,42,15,1,7,5,16,9]

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // console.log(arr1[i]);
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // 將剩餘的元素添加到結果中
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  return merge(mergeSort(right), mergeSort(left));
}

let unsorted = [14, -4, 17, 6, 22, 1, -5];
console.log(mergeSort(unsorted));
