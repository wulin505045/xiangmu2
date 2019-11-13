// pages/shop/shop.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list5:[],
  },
  onSearch: function (event) {
    console.log(event.detail);
    
    db.collection("qzjy")
      .where({
        title:db.RegExp({//正则验证
          regexp: event.detail,//从搜索栏中获取的value作为规则进行匹配。
          options: "i",//不区分大小写
        })
      })
      .get()
      .then(res => {
        console.log(res.data)
        this.setData({
          list5: res.data
        })
        console.log(this.data.list5)
        // this.setData({
        //   list1:this.data.select
        // })
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