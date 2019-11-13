// pages/home/home.js
const db=wx.cloud.database(); 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active:"",
    list:[],  //查询幼儿
    list1:[], //查询亲子
    list2:[],  //查询入驻
    list3:[],   //查询附件
    list4:[],
    list5:[]
  },
  leen:function(){
    var url="/pages/tuo/tuo"
    wx.navigateTo({
      url: url,
    })
  },
  sel5: function () {
    db.collection("qzjy")
      .where({
        fenlei: "xs"  //标识符
      })
      .get()
      .then(res => {   //成功回调
        console.log(res.data)
        this.setData({
          list5: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  sel4: function () {
    db.collection("qzjy")
      .where({
        fenlei: "ll"  //标识符
      })
      .get()
      .then(res => {   //成功回调
        console.log(res.data)
        this.setData({
          list4: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  sel3:function(){
    db.collection("qzjy")
      .where({
        fenlei: "fj"  //标识符
      })
      .get()
      .then(res => {   //成功回调
        console.log(res.data)
        this.setData({
          list3: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  sel2:function(){
    db.collection("qzjy")
      .where({
        fenlei: "rz"  //标识符
      })
      .get()
      .then(res => {   //成功回调
        console.log(res.data)
        this.setData({
          list2: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  sel1:function(){
    db.collection("qzjy")
      .where({
        fenlei: "qinzi"  //标识符
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
  sel:function(){
    db.collection("qzjy")
    .where({
      fenlei:"shaoer"  //标识符
    })
    .get()
    .then(res=>{   //成功回调
      console.log(res.data)
      this.setData({
        list:res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  },
  qd:function(){
    var url = "/pages/sign/sign"
    wx.navigateTo({
      url: url,
    })
  },
  pintuan:function(){
    var url = "/pages/details/details"
    wx.navigateTo({
      url: url,
    })
  },
  xm: function () {
    var url = "/pages/make/make"
    wx.navigateTo({
      url: url,
    })
  },
  wd: function () {
    var url = "/pages/new/new"
    wx.navigateTo({
      url: url,
    })
  },
  hh: function () {
    var url = "/pages/new/new"
    wx.navigateTo({
      url: url,
    })
  },
  qj: function () {
    var url = "/pages/new/new"
    wx.navigateTo({
      url: url,
    })
  },
  child:function(){
    var url="/pages/new/new"
    
    this.setData({
      active:""
    })
    wx.navigateTo({
      url: url,
    })
  },
  onChange(event){
    console.log(event)
    wx.showToast({
      title: `切换到标签 ${event.detail.title}`,
      
      icon:'none'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'uid',
      success: function(res) {
        console.log(res.data)
      },
      fail:function(res){
        console.log(res);
      }
    }),
    this.sel(),
    this.sel1(),
    this.sel2(),
    this.sel3(),
    this.sel4(),
    this.sel5()
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