function uniqueLetterString(str) {
  //   let arr = str.split("");
  let counter = {};
  let maxLength = -Infinity;
  let left = 0;
  let right = 0;
  while (right < str.length) {
    // console.log(counter)  ;
    if (counter[str[right]]) {
      counter[str[left]]--;
      left++;
    } else {
      counter[str[right]] = 1;
      right++;
      if (right - left > maxLength) {
        maxLength = right - left;
      }
    }
  }
  if (maxLength == -Infinity) {
    console.log("cannot find");
    return null;
  }
  console.log(maxLength);
  return maxLength;
}
uniqueLetterString("thisishowwedoit");
