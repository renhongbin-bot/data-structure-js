// 一个数组中只有一种数出现奇数次,其他数都出现了偶数次,找出这个数是什么
function oddOneNumber(arr) {
  let eor = 0
  arr.forEach(item => eor = eor ^ item)
  console.log(eor)
}
oddOneNumber([12, 12, 34, 34, 34, 34, 56, 3, 3, 3])

// 一个数组中只有两种数出现奇数次,其他数都出现了偶数次,找出这两个数是什么
// 分析:
// 1.用一个数eor对arr从头异或到尾 得到的结果是a ^ b
// 2.又 a !== b,所以a和b的二进制肯定有在同一位的数不相等,所以他们肯定在这个位数的值一个为1, 一个为0
// 3.假设这个位数是第八位, 那么a和b在第八位一个为1, 一个为0
// 所以把数组分成两类(二分):第八位是1的数和第八位是0的数
// 用一个eor' 只看第八位为1的数,根据两个条件可以得到两个数中的其中一个,假设是a
// 通过eor ^ eor'得到另一个数b
function oddTwoNumber(arr) {
  let eor = 0;
  let eorR = 0; //eor'
  // eor从头异或到尾
  arr.forEach(item => eor ^= item)
  //eor = a^b
  //eor != 0
  //eor必然有一位置为1
  // eor:          101011100
  // ~eor:         010100011(反码)
  //~eor+1:        010100100(补码)
  //eor & ~eor+1:  000000100(提取出最右边的1)
  let rightOne = eor & (~eor + 1) //把某个不等于0的数提取出最右边的1
  arr.forEach(item => {
    // 只看该位置为1的数
    if ((item & rightOne) == 1) {
      eorR ^= item;
    }
  })
  console.log(eorR, eor ^ eorR)
}

// 找出重复的数并且出现的次数
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 5, 5, 2, 5]
const arr3 = [1, 9, 6, 4, 5]
const arr4 = [2, 2, 3, 4, 5]
function get() {
  const arr = [...arr1, ...arr2, ...arr3, ...arr4]
  const arrR = []
  const arrNum = []
  arr.forEach(item => {
    const indexNum = arrR.indexOf(item)
    if (indexNum < -1) {
      arrR.push(item)
      arrNum.push(0)
    }
  })
  arrR.forEach(item => {
    if (arrNum.indexOf(item) > -1) {
      arrNum[arrNum.indexOf(item)]++
    }
  })
  console.log(arrR, arrNum)
}
get()