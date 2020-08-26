// pages/components/float/float.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hongbao:[
        { money: 2.5, mix: 30, time: '2020-04-20' },
        { money: 4, mix: 60, time: '2020-06-29' }
      ]
  },
  youhuitap(e){
    // console.log(e);
    // console.log('点击领取');
      wx.showToast({
        title: '领取成功，请到我的优惠券查看吧！',
        icon: 'none',
      });
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