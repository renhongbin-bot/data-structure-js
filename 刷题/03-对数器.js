
/*
函数名: logarithmicApparatus
功能: 用于生成随机数组并复制
参数: arr - 传入的数组
变量: testTime - 测试次数
   maxSize - 最大数组大小
   maxValue - 最大数组值
*/
function logarithmicApparatus(arr) {
  let testTime = 500000;
  let maxSize = 100;
  let maxValue = 100;
  for (let i = 0; i < testTime; i++) {
    let arr1 = generataRandomArray(maxSize, maxValue);
    let arr2 = copyArr(arr1)
  }
}
//函数generataRandomArray接受两个参数：maxSize和maxValue，用于生成一个长度和值都随机的数组。 
//第一行：声明一个长度为随机数的数组； 
//第二行：循环遍历数组，并将每个数组元素赋值为一个范围为[-maxValue, maxValue]的随机数； //最后一行：返回生成的随机数组。
function generataRandomArray(maxSize, maxValue) {
  let arr = new Array(parseInt((maxSize + 1) * Math.random())) //长度随机
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt((maxValue + 1) * Math.random()) - parseInt(maxValue * Math.random())
  }
  return arr
}
// 该函数用于复制数组。 
// 如果输入数组为空，则返回空值。 
// 否则，遍历输入数组，将其中的元素依次添加到结果数组中，最后返回结果数组。
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
