/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 输入：x = 121
 * 输出：true
 * */ 

/*
思路一：翻转字符串法
1.翻转字符串：先将数值型转为字符串型，再拆分为单字符数组，然后翻转数组，最后将数组拼接成字符串
2.将原字符串和翻转后的字符串进行比较即可
*/ 
let isPalindrome = function(num) {
  return num === parseInt(num.toString().split('').reverse().join(''))
}

/*
思路二：双指针遍历比较法
1.先将数值型转为字符串型，然后取字符串长度的一半向下取整（因为奇数个则最中间的不需要比较）
2.利用双指针从前和从后两个方向遍历字符串，对遍历到的两个字符进行比较。若有不同则直接返回false；若都相同则直接返回true
*/ 
let isPalindrome2 = function(num) {
  let temp = num.toString()
  const n = Math.floor(temp.length / 2)
  for(let i = 0; i < n; i++) {
    if(temp[i] !== temp[temp.length - i -1]) return false
  }
  return true
}
console.log(isPalindrome(121)) //true
console.log(isPalindrome(1211)) //flse
console.log(isPalindrome2(121)) //true
console.log(isPalindrome2(1211)) //flse
