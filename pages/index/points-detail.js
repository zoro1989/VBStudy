Page({
  data: {
    title: '',
    content:'',
    scrollTop: 100
  },
  onLoad: function (option) {
    var _this = this
    var _id = option.id
    wx.request({
      url: 'http://localhost:3339/points/selectPointById.tkm', //仅为示例，并非真实的接口地址
      data: {
        id: _id
      },
      dataType: 'json',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var detail = res.data.data.detail ? res.data.data.detail : ''
        detail = detail.replace(/&lt;/g,'<')
        detail = detail.replace(/&gt;/g,'>')
        console.log(detail)
        _this.setData({
          title: res.data.data.title ? res.data.data.title : '',
          content: detail
        })
      }
    })
  },
})