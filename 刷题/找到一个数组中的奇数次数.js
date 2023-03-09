// 一个数组中只有一种数出现奇数次,其他数都出现了偶数次,找出这个数是什么
function oddNumber(arr) {
  let eor = 0
  for (let i = 0; i < arr.length; i++) {
    eor = eor ^ arr[i]
  }
  console.log(eor)
}
oddNumber([12, 12, 34, 34, 56])