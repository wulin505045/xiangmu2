// pages/new/new.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    list2: [],  //查询入驻
    list3: [],   //查询附件
    list4: [],
    list5: []
  },
  shixue:function(event){
    console.log(111)
    //1:添加参数event事件对象
    //2:依据event获取自定义属性_id
    console.log(event);
    var id = event.currentTarget.dataset.id;
    console.log(id);
    //3:跳转/pages/comment/comment参数id
    var url="/pages/si/si?id="+id
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
  sel3: function () {
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
  sel2: function () {
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
  onChange(event) {
    console.log(event)
    wx.showToast({
      title: `切换到标签 ${event.detail.title}`,

      icon: 'none'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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