// 交换数组中两个数的位置
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}

// 1. 选择排序,时间复杂度O(n^2) 额外空间复杂度O(1)
function selectionSort(arr) {
  if (arr === null || arr.length < 2) {
    return
  }
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    swap(arr, i, minIndex)
  }
  // console.log('选择排序:' + arr)
}

// 2. 冒泡排序,时间复杂度O(n^2) 额外空间复杂度O(1)
function bubbleSort(arr) {
  if (arr === null || arr.length < 2) {
    return
  }
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  // console.log('冒泡排序:' + arr)
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
  // console.log('插入排序:' + arr)
}

// 归并排序, 时间复杂度O(n * log^n) 额外空间复杂度O(n)
// 思想:简单递归,左边排好序,右边排好序再让整体有序
function margeSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  process(arr, 0, arr.length - 1)
  // console.log('并归排序:' + arr)
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


// 快速排序(改进版) 时间复杂度O(n * log^n) 额外空间复杂度O(log^n)
function quickSort(arr, L, R) {
  if (L < R) {
    swap(arr, L + parseInt(Math.random() * (R - L + 1)), R);
    let p = partition(arr, L, R); //划分值区域的范围,左边界和右边界
    quickSort(arr, L, p[0] - 1); //< 区递归
    quickSort(arr, p[1] + 1, R); //> 区 递归
  }
  // console.log("快速排序:" + arr)
  // 处理arr[l...r]的函数
  // 默认以arr[r]做划分, arr[r] -> p  <p ==p >p
  // 返回等于区域(左边界, 右边界), 所以返回一个长度为2的数组res, res[0], res[1]
  function partition(arr, L, R) {
    let less = L - 1; //< 区右边界
    let more = R;
    while (L < more) {
      if (arr[L] < arr[R]) {
        swap(arr, ++less, L++)
      } else if (arr[L] > arr[R]) {
        swap(arr, --more, L)
      } else {
        L++
      }
    }
    swap(arr, more, R)
    return [less + 1, more]
  }
}

// 堆排序 时间复杂度O(n * log^n) 额外空间复杂度O(1)
function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  // 先将数组变成大根堆
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i);//O(logN)
  }
  let heapSize = arr.length;
  swap(arr, 0, --heapSize);
  while (heapSize > 1) {
    heapify(arr, 0, heapSize); //O(logN)
    swap(arr, 0, --heapSize); //O(1)
  }
  // console.log('堆排序:' + arr)
  // 某个数现在处于index的位置上,往上继续移动
  function heapInsert(arr, index) {
    while (arr[index] > arr[parseInt((index - 1) / 2)]) {
      swap(arr, index, parseInt((index - 1) / 2));
      index = parseInt((index - 1) / 2)
    }
  }
  // 某个数在index的位置,能否向下移动
  function heapify(arr, index, heapSize) {
    let left = index * 2 + 1; //左孩子下标
    while (left < heapSize) { //下方还有孩子的时候
      // 两个孩子谁的值大,把下标给largest
      let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
      // 父和较大的孩子之间,谁的值大,把下标给largest
      largest = arr[largest] > arr[index] ? largest : index
      if (largest === index) {
        break;
      }
      swap(arr, largest, index)
      index = largest
      left = index * 2 + 1
    }
  }
}
const arr = []
for (let i = 0; i < 100000; i++) {
  arr.push(Math.random() * 100)
}
console.log("100000条随机数据排序所需时间:")
// 选择排序
console.log("选择排序:")
console.time(selectionSort(arr))
console.timeEnd(selectionSort(arr))
// 冒泡排序
console.log("冒泡排序:")
console.time(bubbleSort(arr))
console.timeEnd(bubbleSort(arr))
// 插入排序
console.log("插入排序:")
console.time(insertionSort(arr))
console.timeEnd(insertionSort(arr))
// 并归排序
console.log("并归排序:")
console.time(margeSort(arr))
console.timeEnd(margeSort(arr))
// 快速排序
console.log("快速排序:")
console.time(quickSort(arr))
console.timeEnd(quickSort(arr))
// 堆排序
console.log("堆排序:")
console.time(heapSort(arr));
console.timeEnd(heapSort(arr));

