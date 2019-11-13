// pages/shop/shop.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    list1:[]
  },
  sea:function(event){
    var url="/pages/search/search"
    wx.navigateTo({
      url: url,
    })
  },
  chak: function (event) {
    console.log(111)
    //1:添加参数event事件对象
    //2:依据event获取自定义属性_id
    console.log(event);
    var id = event.currentTarget.dataset.id;
    console.log(id);
    //3:跳转/pages/comment/comment参数id
    var url = "/pages/make/make?id=" + id
    wx.navigateTo({
      url: url,
    })
  },
  sel1: function () {
    db.collection("qzjy")
      .where({
        fenlei: "sp"  //标识符
      })
      .get()
      .then(res => {   //成功回调
        console.log(res.data)
        this.setData({
          list1: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  sel: function () {
    db.collection("qzjy")
      .where({
        fenlei: "sc"  //标识符
      })
      .get()
      .then(res => {   //成功回调
        console.log(res.data)
        this.setData({
          list: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.sel(),
    this.sel1()
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