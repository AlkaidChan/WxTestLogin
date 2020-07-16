const app = getApp()
Page({
  data: {
  },

  onLoad: function (params) {
  },

  doLogin: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            method: 'POST',
            url: 'http://localhost:8080/wxLogin',
            data: {
              code: res.code,
              userInfo: e.detail.userInfo
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
       console.log(res.code);
      }
    })
  }
})