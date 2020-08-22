// pages/components/float/float.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    'hongbao':{
      type: Array,
      value: [
        {money: 5,mix:30,time: '2020-04-20'},
        { money: 10, mix: 60, time: '2020-06-29' }
      ]
    }
  },

  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的初始数据
   */
  data: {
    float: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bgtap() {
      // console.log('点击了背景')
      this.setData({
        // float: true,
      })
    },
    closetap() {
      // console.log('点击了关闭')
      this.setData({
        float: true,
      })
    },
    
    getyouhui() {
      this.setData({
        float: true,
      })
      let value = '携带参数'
      this.triggerEvent('getyouhui', { value }, {}); //传递方法 
    }
  }
})

