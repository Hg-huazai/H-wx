// pages/components/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  userinfo(e){
    wx.login({
      // 获取code
      success: res=> {
        // console.log(res.code)
        wx.request({
          url: 'https://yqw.namicity.cn/yanxuan/auth_api/doLogin',
          data: {
            js_code: res.code,
            appId: 'wx1e00fe39bc4b0919', 
            // wxb700a58c6ab5b8dd
          },
          success: res=>{
            console.log(res)
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})