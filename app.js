//array
// let arr = ["Harry", "Ron", "Snap"];

//Js for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   console.log(i);
// }

// for each
// arr.forEach((person, index) => {
//   console.log(person);
//   console.log(index);
// });

//Object

// let Harry = {
//   name: "Harry Potter",
//   age: 40,
//   married: true,
//   sayHi() {
//     console.log("Harry says hi to you");
//   },
// };
// console.log(Harry);
// console.log(Harry.name);
// console.log(Harry["name"]);

// Harry.sayHi();

// Function
// function add(n1, n2) {
//   console.log(n1 + n2);
// }
// function addr(n1, n2) {
//   return n1 + n2;
//   console.log(n1 + n2); //return 下面都不執行
// }
// add(8, -4);
// addr(2, 5);
// console.log(addr(12, 15));

//class

// let c1 = {
//   radius: 5,
//   getArea() {
//     return Math.PI * this.radius * this.radius;
//   },
// };
// let c2 = {
//   radius: 10,
//   getArea() {
//     return Math.PI * this.radius * this.radius;
//   },
// };
// console.log(c1.radius);
// console.log(c1.getArea());
// console.log(c2.getArea());

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }
// let c3 = new Circle(7);
// console.log(c3.radius);
// console.log(c3.getArea());

// 1+2+3+...+n=sum
// fun1 complexity=f(n)=3n(每次都3次operation)
// linear n和f(n)的關係 線性
// function fun1(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += 1;
//   }
//   return sum;
// }
// // fun complexity=f(n)=3
// // constant n和f(n)的關係 常數
// function fun2(n) {
//   return ((1 + n) * n) / 2;
// }

// let time1 = window.performance.now();
// fun1(100000000);
// let time2 = window.performance.now();
// let timeDiff1 = (time2 - time1) / 1000;
// console.log(`it takes ${timeDiff1} seconds to run fun1`);

// let time3 = window.performance.now();
// // console.log(time3);
// fun2(10000000000000000000000000000);
// let time4 = window.performance.now();
// // console.log(time4);
// let timeDiff2 = (time4 - time3) / 1000;
// console.log(timeDiff2);
// console.log(`it takes ${timeDiff2} seconds to run fun2`);

// function example(n) {
//   let counter = 0;
//   for (let i = 0; i < 3 * n; i++) {
//     // console.log("Hello");
//     counter++;
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       // console.log("Hello");
//       counter++;
//     }
//   }

//   // console.log("Hello");
//   // console.log("Hello");
//   // console.log("Hello");
//   // console.log("Hello");
//   counter += 4;
//   return counter;
// }

// for (let i = 2; i < 10; i++) {
//   console.log(`example(i) will print out ${example(i)} 次 Hello`);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < 5; i++) {
//   arr.unshift(10); //O(n)
// }

// console.log(arr);

// let n = 10;
// let arr2 = [1, 2, 3, 4, 5];
// for (let i = 0; i < n; i++) {
//   arr2.unshift(10); //O(n^2)
// }

// console.log(arr2);

// let numbers = [
//   33, 99, 97, 28, 87, 72, 48, 72, 18, 89, 18, 45, 85, 13, 70, 80, 10, 88, 92,
//   65, 23, 73, 88, 55, 1, 79, 95, 69, 30, 31, 88, 13, 32, 86, 15, 51, 69, 29, 11,
//   26, 62, 0, 45, 32, 21, 4, 73, 10, 88, 23, 93, 34, 91, 68, 8, 36, 66, 19, 45,
//   12, 15, 29, 68, 59, 53, 76, 42, 81, 27, 30, 69, 15, 18, 0, 12, 2, 28, 79, 49,
//   15, 70, 4, 34, 48, 40, 28, 55, 73, 18, 37, 10, 65, 95, 11, 49, 7, 22, 24, 19,
//   33,
// ];

// function linearSearch(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       console.log("Found number " + n + " at index " + i);
//       return i;
//     }
//   }
//   console.log("Cannot find " + n);
//   return -1;
// }

// linearSearch(numbers, 33);

// function intersection(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       console.log(arr1[i], arr2[j]);
//       if (arr1[i] == arr2[j]) {
//         result.push(arr1[i]);
//       }
//     }
//   }
//   console.log(result);
//   return result;
// }

// intersection([1, 2, 3], [5, 16, 1, 3]);

// function intersection(arr1, arr2) {
//   let result = [];
//   let arr3 = arr1.concat(arr2);
//   let counter = {};

//   for (let i = 0; i < arr3.length; i++) {
//     if (!counter[arr3[i]]) {
//       counter[arr3[i]] = 1;
//     } else {
//       counter[arr3[i]] += 1;
//     }
//   }
//   // console.log(counter);
//   // loop over the counter
//   for (let property in counter) {
//     if (counter[property] >= 2) {
//       result.push(property);
//     }
//   }
//   console.log(result);
//   return result;
// }

// intersection([1, 2, 3, 7, 9, 19, 25], [19, 5, 16, 1, 3]);

// function sameFrequency(str1, str2) {
//   let arr1 = str1.split("");
//   let arr2 = str2.split("");

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let counter1 = {};
//   let counter2 = {};

//   for (let i = 0; i < arr1.length; i++) {
//     if (counter1[arr1[i]]) {
//       counter1[arr1[i]]++;
//     } else {
//       counter1[arr1[i]] = 1;
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (counter2[arr2[i]]) {
//       counter2[arr2[i]]++;
//     } else {
//       counter2[arr2[i]] = 1;
//     }
//   }
//   // console.log(counter1, counter2);
//   for (let property in counter1) {
//     if (!counter2[property] || counter2[property] !== counter1[property]) {
//       return false;
//     }
//   }
//   return true;
// }
// // sameFrequency("aabc", "abbc");
// console.log(sameFrequency("aabb", "abba"));

// function averagePair(arr, avg) {
//   // let count = 9;
//   let result = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       // count++;
//       // console.log(arr[i], arr[j]);
//       if (arr[i] + arr[j] == 2 * avg) {
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   // console.log(count);
//   console.log(result);
//   return result;
// }
// // O(n^2) => O(n) 要依靠pointer(sorted array)

// averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

// function averagePair(arr, avg) {
//   let left = 0;
//   let right = arr.length - 1;
//   let result = [];

//   while (right > left) {
//     let temp_avg = (arr[right] + arr[left]) / 2;
//     if (temp_avg > avg) {
//       right--;
//     } else if (temp_avg < avg) {
//       left++;
//     } else if (temp_avg == avg) {
//       result.push([arr[right], arr[left]]);
//       right--;
//       left++;
//     }
//   }
//   console.log(result);
//   return result;
// }

// function isPalindrome(str) {
//   let arr = str.split("");
//   let left = 0;
//   let right = arr.length - 1;
//   while (right > left) {
//     console.log(arr[left], arr[right]);
//     if (arr[left] == arr[right]) {
//       right--;
//       left++;
//     } else {
//       console.log(false);
//       return false;
//     }
//   }
//   console.log(true);
//   return true;
// }

// isPalindrome("amanaplanacanalpanama");

// function isSubsequence(str1, str2) {
//   let left1 = 0;
//   let left2 = 0;
//   while (left2 < str2.length) {
//     if (str1[left1] == str2[left2]) {
//       left1++;
//     }
//     if (left1 >= str1.length) {
//       console.log(true);
//       return true;
//     }
//     left2++;
//   }
//   console.log(false);
//   return false;
// }
// isSubsequence("bookaa", "brookeawrwaf");

// function maxSum(arr, size) {
//   if (size > arr.length) {
//     return null;
//   }
//   let max_value = -Infinity;
//   for (let i = 0; i <= arr.length - size; i++) {
//     let attempt = 0;
//     for (let j = 0; j < size; j++) {
//       attempt += arr[i + j];
//     }
//     if (attempt > max_value) {
//       max_value = attempt;
//     }
//   }
//   console.log(max_value);
//   return max_value;
// }
// maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //12

// function minSum(arr, size) {
//   if (size > arr.length) {
//     return null;
//   }
//   let min_value = Infinity;
//   for (let i = 0; i <= arr.length - size; i++) {
//     let attempt = 0;
//     for (let j = 0; j < size; j++) {
//       attempt += arr[i + j];
//       max_value = Math.min(attempt);
//     }
//     min_value = Math.min(attempt, min_value);
//   }
//   console.log(min_value);
//   return min_value;
// }
// minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //-28

function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }
  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }
  let temValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    temValue = temValue + arr[j] - arr[j - size];
    maxValue = Math.max(temValue, maxValue);
  }

  console.log(maxValue);
  return maxValue;
}
maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //12

function minSum(arr, size) {
  if (size > arr.length) {
    return null;
  }
  let minValue = 0;
  for (let i = 0; i < size; i++) {
    minValue += arr[i];
  }
  let tempValue = minValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = minValue + arr[j] - arr[j - size];
    minValue = Math.min(tempValue, minValue);
  }

  console.log(minValue);
  return minValue;
}
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //-28
