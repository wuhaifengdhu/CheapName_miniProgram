var util = require('../../utils/util.js')
var app = getApp()
const date = new Date()
const years = []
const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '腊']
const days = [ '初一','初二','初三','初四','初五','初六','初七','初八','初九','初十', '十一','十二','十三','十四','十五','十六','十七','十八','十九','廿十','廿一','廿二','廿三', '廿四','廿五','廿六','廿七','廿八','廿九', '三十']

for (let i = 1900; i <= date.getFullYear(); i++) {
  years.push(i)
}

Page({
  data: {
    years: years,
    months: months,
    days: days,
    value: [90, 1, 1],
    year: 90,
    month: 1,
    day: 1,
    name: "NO",
    gender: 0
  },
  onLoad: function () {
    console.log("Enter onload in name.js")
    if(app.globalData.userInfo.gender){
        this.data.gender = app.globalData.userInfo.gender;
        console.log("Gender=" + this.data.gender)
    } 
    console.log(this.data.gender + " " + this.data.month + " " + this.data.day)
    this.data.name = util.getName(this.data.gender, this.data.month, this.data.day)
    console.log("name is " + this.data.name)
    app.globalData.cheapName = this.data.name
  },
  bindChange: function(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      name: util.getName(this.data.gender, val[1], val[2])
    })
    app.globalData.cheapName = this.data.name
    app.globalData.imgUrl = util.getImg(val[1])
    console.log("set global imgurl to " + app.globalData.imgUrl)
  },
  onButtonTap: function(e){
    wx.navigateTo({
      url: '../result/result'
    })
  }
})