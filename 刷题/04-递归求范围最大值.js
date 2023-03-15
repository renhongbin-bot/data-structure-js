// 一个数组中left到right间的最大值


// 使用分治法求数组arr中区间[left,right]内的最大值。
// 具体步骤如下：

// 1.如果left===right，则直接返回arr[left]；
// 2.否则，计算出中间索引mid，然后分别调用函数process()求出[left,mid]和[mid+1,right]区间内的最大值leftMax和rightMax；
// 3.最后，返回leftMax和rightMax的最大值。
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
