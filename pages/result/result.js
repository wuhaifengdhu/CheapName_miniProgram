var app = getApp()
Page({
  data: {
    name: null,
    imgUrl: null
  },
  onLoad: function () {
    this.setData({
      name: app.globalData.cheapName,
      imgUrl: app.globalData.imgUrl
    })
    console.log("Global image url is " + app.globalData.imgUrl)
  }
})
