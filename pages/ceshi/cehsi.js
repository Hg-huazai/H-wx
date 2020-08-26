// pages/ceshi/cehsi.js
Page({
  data: {
    logintext: '',
  },
  getUserInfo(e){
    // console.log(e)
    this.login();
    this.result();
  },
  // 获取code登录
  login() {
    wx.login({
      success: res => {
        console.log(res.code);
        // 获取openid和seeion_key
        wx.request({
          url: 'https://yqw.namicity.cn/yqw/auth_api/doLogin',
          data: {
            js_code: res.code,
            appId: 'wx4e8ef14263d01359',
          },
          success: res => {
            // console.log(res);
            console.log('openid: ' + res.data.openid);
            console.log('session_key: ' + res.data.session_key);

            // 缓存openid 和 session_ley
            wx.setStorageSync('openid', res.data.openid);
            wx.setStorageSync('session_key', res.data.session_key);
          }
        })
      }
    })
  },
  result(){
    // 查询是否授权
    wx.getSetting({
      success: res => {
        console.log(res);
        // console.log(res.authSetting);  //授权结果
        if (res.authSetting['scope.userInfo']) {
          console.log('授权')
          this.setData({
            logintext: '已授权登录'
          })
          // wx.setStorageSync('can_getuserinfo', 1);
          wx.setStorage({
            key: 'can_getuserinfo',
            data: 1,
          });
        } else {
          console.log('未授权');
          this.setData({
            logintext: '未授权登录'
          })
          wx.setStorage({
            key: 'can_getuserinfo',
            data: 0,
          })

        }
      }
    })
  },
  onShow: function () {
    this.result();

    //获取是否授权结果
    wx.getStorage({
      key: 'can_getuserinfo',
      success: res=> {
        if(res.data == 1){
          console.log(res.data + '已授权登录');
          
        }else {
          console.log(res.data + '未授权登录');
          
        }
        
      }
    })
  },
})

// page({
//   /**
//    * 授权登录
//    */
//   getUserInfo(e) {
//     let _this = this;
//     App.getUserInfo(e, () => {
//       _this.getPone()
//       //现在登录都要获取手机号码
//       //弹出手机号码验证页面
//       // 跳转回原页面
//       // 
//     });
//   },
//   /**
//    * 授权登录
//    */
//   getUserInfo(e, callback) {
//     let App = this;
//     if (e.detail.errMsg !== 'getUserInfo:ok') {
//       return false;
//     }
//     wx.showLoading({
//       title: "正在登录",
//       mask: true
//     });
//     // 执行微信登录

//     wx.login({
//       success(res) {
//         wx.login({
//           success(res) {
//             // 发送用户信息
//             console.log('code========' + e.detail.signature);
//             App._post_form('patient.user/login&wxapp_id=10002', {
//               jiaguo_id: wx.getStorageSync("jiaguo_id"),
//               code: res.code,
//               user_info: e.detail.rawData,
//               encrypted_data: e.detail.encryptedData,
//               iv: e.detail.iv,
//               signature: e.detail.signature,
//               referee_id: wx.getStorageSync('referee_id'),
//               id: wx.getStorageSync('homeId'),
//               type: wx.getStorageSync('homeType')
//             }, result => {
//               wx.setStorageSync("LoginInfo", result.data)
//               console.log(result.data)
//               // 执行回调函数
//               callback && callback();
//             }, false, () => {
//               wx.hideLoading();
//             });
//           }
//         });

//       }
//     });
//   },
// })