// 封装队列类
function Queue() {
  // 属性
  this.items = []
  // 方法
  // 1.将元素加入到队列中
  Queue.prototype.enqueue = function(element) {
    this.items.push(element)
  }
  // 2.从队列中删除前端的元素
  Queue.prototype.dequeue = function() {
    return this.items.shift()
  }
  // 3.查看前端的元素
  Queue.prototype.front = function() {
    return this.items[0]
  }
  // 4.查看队列是否为空
  Queue.prototype.isEmpty = function() {
    return this.items.length === 0
  }
  // 5.查看队列中元素的个数
  Queue.prototype.size = function() {
    return this.items.length
  }
  // 6.toString方法
  Queue.prototype.toString = function() {
    var resuletString = ''
    for(let i = 0; i < this.items.length; i++) {
      resuletString += this.items + ''
    }
    return
  }
}

// 使用队列
var queue = new Queue()

// 将元素加入到队列中
queue.enqueue('abc')
queue.enqueue('ccc')
queue.enqueue('nba')
queue.enqueue('cba')
console.log(queue)

// 从队列中删除元素
queue.dequeue()
queue.dequeue()
console.log(queue)

// 查看第一个元素
console.log(queue.front())

console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.toString())

// 面试题：击鼓传花
function passGame(nameList, num) {
  // 1.创建队列结构
  const queue = new Queue()

  // 2.所有人以此加入队列中
  for(var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  // 3.开始数数，不是num的时候，重新加入到末尾
  // 是num的时候，从队列中删除
  while(queue.size() > 1) {
    for(var i = 0; i < num -1; i++) {
      // 3.1num数字之前的人重新放入到队列的末尾
      queue.enqueue(queue.dequeue())
    }
    // 3.2 num对应这个人，直接从对列删除掉
    queue.dequeue()
  }

  // 获取剩下的人
  console.log(queue.size())

  var endName = queue.front()
  console.log('最终剩下的人:', endName)
  return nameList.indexOf(endName)
}

// 测试击鼓传花方法
names = ['LiLy', 'bitle', 'Tom', 'Mack', 'Sendy']
console.log(passGame(names, 3))