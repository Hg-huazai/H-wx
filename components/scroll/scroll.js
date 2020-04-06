// components/scroll/scroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  
  },

  /**
   * 组件的初始数据
   */
  data: {
    ceshi: 'hello',
    leftlist: [
      { name: 'hello1', id: 1 },
      { name: 'hello2', id: 2 },
      { name: 'hello3', id: 3 },
      { name: 'hello4', id: 4 },
      { name: 'hello5', id: 5 },
      { name: 'hello6', id: 6 },
      { name: 'hello7', id: 7 },
      { name: 'hello8', id: 8 },
      { name: 'hello9', id: 9 },
      { name: 'hello10', id: 10 }
    ],
    rightlist: [
      { name: 'hello1', list: ['2', '3',], id: 1 },
      { name: 'hello2', list: ['2', '3', '4', '2', '3'], id: 2 },
      { name: 'hello3', list: ['2', '3', '4', '2',], id: 3 },
      { name: 'hello4', list: ['2', '3', '4', '2', '3', '4'], id: 4 },
      { name: 'hello5', list: ['2', '3', '4',], id: 5 },
      { name: 'hello6', list: ['2', '3', '4', '2', '3',], id: 6 },
      { name: 'hello7', list: ['2', '3',], id: 7 },
      { name: 'hello8', list: ['2', '3', '4', '4'], id: 8 },
      { name: 'hello9', list: ['2', '3', '4', '2', '3', '4'], id: 9 },
      { name: 'hello10', list: ['4', '2', '3', '4'], id: 10 },
    ],
    navActive: 0,
    contentActive: "",
    rightheight: 0,   //右边的item高度
    heightArr: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击左边菜单
    lefttap(e) {
      // console.log(e)
      let id = e.currentTarget.dataset.id;
      console.log(id)
      let index = e.currentTarget.dataset.index;
      this.setData({
        contentActive: id,
        navActive: index,
      })
    },
    // 滚动时触发
    onscroll(e) {
      var _this = this
      // console.log(e)
      let scrollTop = e.detail.scrollTop
      // console.log(scrolltop)
      let scrollArr = _this.data.heightArr

      if (scrollTop >= scrollArr[scrollArr.length - 1] - _this.data.rightheight) {
        return
      } else {
        for (let i = 0; i < scrollArr.length; i++) {
          if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
            _this.setData({
              navActive: 0
            })
          } else if (scrollTop >= scrollArr[i - 1] && scrollTop < scrollArr[i]) {
            _this.setData({
              navActive: i
            })
          }
        }
      }
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //创建节点选择器
    var _this = this
    var heightArr = [];
    let s = 0;
    var query = wx.createSelectorQuery();
    query.selectAll('.pesticide').boundingClientRect()
    // query.selectViewport().scrollOffset()
    query.exec(function (react) {
      react[0].forEach((res) => {
        s += res.height;
        heightArr.push(s)
      })
      // console.log(heightArr)
      _this.setData({
        heightArr: heightArr
      })

    })
    query.select('.right-item').boundingClientRect()
    query.exec(function (res) {
      console.log(res)
      let rightheight = res[1].height
      console.log(rightheight)
      _this.setData({
        rightheight: rightheight
      })

    })
  },
})
