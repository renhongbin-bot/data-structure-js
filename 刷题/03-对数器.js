function logarithmicApparatus(arr) {
  let testTime = 500000;
  let maxSize = 100;
  let maxValue = 100;
  for (let i = 0; i < testTime; i++) {
    let arr1 = generataRandomArray(maxSize, maxValue);
    let arr2 = copyArr(arr1)
  }
}

function generataRandomArray(maxSize, maxValue) {
  let arr = new Array(parseInt((maxSize + 1) * Math.random())) //长度随机
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt((maxValue + 1) * Math.random()) - parseInt(maxValue * Math.random())
  }
  return arr
}
function copyArr(arr) {
  if (arr == null) {
    return null
  }
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i]
  }
  return res
}