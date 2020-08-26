// pages/components/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    components: [
      // { theme: 'scroll', text: '左右联动', url: './scroll/index'},
      // { theme: 'nav', text: '待定待定' },
      // { theme: '瀑布流', text: '待定待定' },
      // { theme: '音频', text: '录音', url: './luyin/luyin'},
      // { theme: '登录', text: '获取唯一的appid', url: './login/login' },
      // { theme: '待定', text: '待定待定' },
      // { theme: '待定', text: '待定待定' },
      { theme: 'scroll', text: '左右联动', url: './scroll/index', id: 1},
      { theme: 'nav', text: '待定待定', id: 2},
      { theme: '瀑布流', text: '待定待定', id: 3},
      { theme: '音频', text: '录音', url: './luyin/luyin', id: 4},
      { theme: '弹出框', text: '完成', url: './float/float', id: 5 },
      { theme: '弹出遮罩层', text: '待定待定', url: './hidden/hidden', id: 6},
      { theme: '授权登录', text: '待定待定', id: 7},
    ]
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