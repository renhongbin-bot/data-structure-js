// 选择排序
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

// 冒泡排序
function bubbleSort(arr) {
  if (arr === null || arr.length < 2) {
    return
  }
  // 交换位置
  function swap(arr, i, j) {
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

selectionSort(arr)
bubbleSort(arr)
