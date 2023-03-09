// 封装优先级队列
function PriorityQueue() {
  //在PriorityQueue再重新创建了一个类：可以理解为内部类
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  // 封装属性
  this.items = []

  // 实现插入方法
  PriorityQueue.prototype.enqueue = function(element, priority) {
    // 1.创建QueueElement对象
    var queueElement = new QueueElement(element, priority)

    // 2.判断队列是否为空
    if (this.items.length === 0) {
      this.items.push(queueElement)
    } else {
      var added = false
      for (var i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
  // 2.从队列中删除前端的元素
  PriorityQueue.prototype.dequeue = function() {
    return this.items.shift()
  }
  // 3.查看前端的元素
  PriorityQueue.prototype.front = function() {
    return this.items[0]
  }
  // 4.查看队列是否为空
  PriorityQueue.prototype.isEmpty = function() {
    return this.items.length === 0
  }
  // 5.查看队列中元素的个数
  PriorityQueue.prototype.size = function() {
    return this.items.length
  }
  // 6.toString方法
  PriorityQueue.prototype.toString = function() {
    var resuletString = ''
    for(let i = 0; i < this.items.length; i++) {
      resuletString += this.items[i].element + '-' + this.items[i].priority + ''
    }
    return
  }
}
//测试代码
var pq = new PriorityQueue()

// enqueue方法
pq.enqueue('abc', 111)
pq.enqueue('cba', 200)
pq.enqueue('nba', 50)
pq.enqueue('nba', 66)
console.log(pq)