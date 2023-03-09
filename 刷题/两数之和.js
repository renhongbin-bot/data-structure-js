/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * */ 

// 方法一：强制for循环
let twoSum = function (nums, target) {
  for (let i = 0; len = nums.length, i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// 方法二：map对象中存放的是{key: value}键值对， has(key)方法判断map中是否存在key，返回boolen值，get（key）方法返回map中的value值
// 1.用map来存放{数组元素值，坐标}这样的键值对
// 2.运用逆向解法，即用target减去数组中的某个元素，然后来判断map中是否有相同的值，若有则存在满足条件的答案，返回两个坐标即可；若没有，则保存{数组中某个元素值，对应的坐标}到map对象中。依次遍历即可判断是否有满足条件的两个元素。
let twoSum2 = function (nums, target) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
    let x = target - nums[i]
    if(map.has(x)) {
      return [map.get(x), i]
    }
    // 边读变存
    map.set(nums[i], i)
  }
  return null
}

const arr = [1, 2, 3, 4]

const a = twoSum(arr, 4)

const b = twoSum2(arr, 7)
console.log(b)