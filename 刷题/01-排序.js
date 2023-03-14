// 1. 选择排序,时间复杂度O(n^2) 额外空间复杂度O(1)
const arr = [3, 5, 2, 8, 7]
function selectionSort(arr) {
  if (arr === null || arr.length < 2) {
    return
  }
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.log('选择排序:' + arr)
}

// 2. 冒泡排序,时间复杂度O(n^2) 额外空间复杂度O(1)
function bubbleSort(arr) {
  if (arr === null || arr.length < 2) {
    return
  }
  // 交换位置
  function swap(arr, i, j) {
    // 异或运算交换位置
    arr[i] = arr[i] ^ arr[j]
    arr[j] = arr[i] ^ arr[j]
    arr[i] = arr[i] ^ arr[j]
  }
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  console.log('冒泡排序:' + arr)
}

// 3. 插入排序, 时间复杂度O(n^2) 额外空间复杂度O(1):一般来说优于选择和冒泡
function insertionSort(arr) {
  if (arr === null || arr.length < 2) {
    return
  }
  for (let i = 1; i < arr.length; i++) {// 0-i做到有序
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
  function swap(arr, i, j) {
    arr[i] = arr[i] ^ arr[j]
    arr[j] = arr[i] ^ arr[j]
    arr[i] = arr[i] ^ arr[j]
  }
  console.log('插入排序:' + arr)
}

// 归并排序, 时间复杂度O(n * log^n) 额外空间复杂度O(n)
// 思想:简单递归,左边排好序,右边排好序再让整体有序
function margeSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  process(arr, 0, arr.length - 1)
  console.log('并归排序:' + arr)
  function process(arr, left, right) {
    if (left === right) {
      return
    }
    let mid = left + ((right - left) >> 1);
    process(arr, left, mid)
    process(arr, mid + 1, right);
    merge(arr, left, mid, right)
  }
  function merge(arr, left, mid, right) {
    let help = new Array(right - left + 1)
    let i = 0;
    // p1先指向左边第一位
    let p1 = left;
    // p2指向右边第一位
    let p2 = mid + 1;
    // 都没越界
    while (p1 <= mid && p2 <= right) {
      // 比较p1位置的值和p2位置的值, 如果左侧小于等于右侧, 就存入左侧的值进help,并++
      help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
    }
    while (p1 <= mid) {
      help[i++] = arr[p1++]
    }
    while (p2 <= right) {
      help[i++] = arr[p2++]
    }
    for (i = 0; i < help.length; i++) {
      arr[left + i] = help[i]
    }
  }
}

selectionSort(arr)
bubbleSort(arr)
insertionSort(arr)
margeSort(arr)

