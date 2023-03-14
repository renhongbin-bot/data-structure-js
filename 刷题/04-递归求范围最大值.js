一个数组中left到right间的最大值

function process(arr, left, right) {
  if (left === right) {
    return arr[left]
  }

  let mid = left + ((right - left) >> 1);//中点
  let leftMax = process(arr, left, mid); //左侧最大值
  let rightMax = process(arr, mid + 1, right); //右侧最大值
  return Math.max(leftMax, rightMax) //左侧和右侧最大值大的一个
}
function getMax(arr) {
  return process(arr, 0, arr.length - 1);
}
let arr = [2, 3, 5, 5, 2, 7, 7, 8, 2, 3, 4, 9]
const num = getMax(arr)
console.log(num)
