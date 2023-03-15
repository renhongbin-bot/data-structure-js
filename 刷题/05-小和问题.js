// 栗: [1, 3, 4, 2, 5]
// 1 左边没有,小和为0
// 3左边比3小的数为1, 小和为1
// 4左边为4小的数为1, 3, 小和为1+3=4
// 2左边比2小的数为1, 小和为1
// 5左边比5小的数为1, 3, 4, 2, 小和为 1 + 3 + 4 + 2 = 10
// 所以整个数组的小和: 1 + 4 + 1 + 10 = 16

// 思路:求左边有多少个数比当前数小等同于求右边有多少个数比他大
function samllSum(arr) {
  if (arr == null || arr.length < 2) {
    return 0;
  }
  return process(arr, 0, arr.length - 1)
}
// arr[l...r]既要排好序,也要求小和
function process(arr, l, r) {
  if (l == r) {
    return 0;
  }
  let mid = l + ((r - l) >> 1);
  return process(arr, l, mid) + process(arr, mid + 1, r) + merge(arr, l, mid, r)
}
function merge(arr, L, mid, r) {
  let help = []
  let i = 0;
  let p1 = L;
  let p2 = m + 1;
  let result = 0;
  while (p1 <= m && p2 >= r) {
    result += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }
  while (p1 <= m) {
    help[i++] = arr[p1++]
  }
  while (p2 <= r) {
    help[i++] = arr[p2++]
  }
  for (i = 0; i < help.length; i++) {
    arr[L + i] = help[i]
  }
  return result
}

