/*
给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。
客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。

输入：accounts = [[1,2,3],[3,2,1]]
输出：6
解释：
第 1 位客户的资产总量 = 1 + 2 + 3 = 6
第 2 位客户的资产总量 = 3 + 2 + 1 = 6
两位客户都是最富有的，资产总量都是 6 ，所以返回 6 。

输入：accounts = [[1,5],[7,3],[3,5]]
输出：10
解释：
第 1 位客户的资产总量 = 6
第 2 位客户的资产总量 = 10 
第 3 位客户的资产总量 = 8
第 2 位客户是最富有的，资产总量是 10
*/ 
// 思路：利用for of循环遍历外层数组，再通过reduce方法,循环计算出内层数组值的和
var maxPrice = function(accounts) {
  let maxPrice = 0
  for (const price of accounts) {
    const p = price.reduce((x, y) => x + y)
    if (p > maxPrice) {
      maxPrice = p
    }
  }
  return maxPrice
}

console.log(maxPrice([[1,2,3], [4, 5, 6]]))
console.log(maxPrice([[1,2,3], [1, 2, 3]]))
