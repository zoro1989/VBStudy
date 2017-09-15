//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pointlist: []
  },
  onLoad: function () {
    var _this = this
    wx.request({
      url: 'http://localhost:3339/points/list.tkm', //仅为示例，并非真实的接口地址
      data: {
        pageNo: 1
      },
      dataType: 'json',
      method:'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        _this.setData({
          pointlist: res.data.data.list
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: 'VB学习手册',
      path: 'pages/index/index'
    }
  },
  clickItem: function (event) {
    var itemId = event.currentTarget.dataset.id
    var _url = 'points-detail?id=' + itemId
    wx.navigateTo({
      url: _url
    })
  }
})
