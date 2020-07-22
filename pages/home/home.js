// pages/home/home.js
Page({
data:{
  name:'Monkey Sun',
  age: 18,
  goods_list:[
    {id:110, name:'牙膏', price:18},
    {id:111, name:'洗面奶', price:66},
    {id:112, name:'洗发水', price:80},
    {id:113, name:'防晒霜', price:79}
  ],
  counter:0
},
increment() {
  // 1.这样没办法实现双向绑定，改变的counter不会刷新页面的值
  // this.data.counter += 1
  // 2.实现双向绑定的方法
  this.setData({
    counter: this.data.counter + 1
  })
},
decrement() {
  this.setData({
    counter: this.data.counter - 1
  })
}
})