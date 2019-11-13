// pages/my/my.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {},
    id: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  handle3(event) {
    console.log(event);//获取信息
    var obj = event.detail.userInfo;
    console.log(obj);//获取用户信息 
    if (obj) {
      wx.login({
        success: (res) => {
          console.log(res);
          var code = res.code;//返回code
          console.log(code);
          var appid = "wx26e2985a209f8bcb";
          var secret = "b25611cf027bf959bd52370fc895022f";
          console.log(secret);
          //console.log(code,appid,secret);
          var url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&js_code=" + code + "&grant_type=authorization_code";
          console.log(url);
          if (res.code) {
            //发送网络请求
            wx.request({
              url: url,
              success: (res) => {//成功回调
                console.log(res);
                wx.setStorage({
                  key: 'uid',
                  data: res.data.openid,
                })
                // console.log(res);
                //  console.log(res.data); 
                // console.log(res.data.openid)
                db.collection("qzjy_user")
                  .where({
                    _openid: res.data._openid
                  }) 
                  .get()
                  .then(res => {
                    console.log(res.data)
                    if (res.data.length != 0) {
                      console.log(1)
                      this.setData({
                        obj: res.data[0]
                      })
                      console.log(this.data.obj)
                    } else {
                      db.collection("qzjy_user")
                        .add({
                          data: {
                            avatarUrl: obj.avatarUrl,
                            city: obj.city,
                            country: obj.country,
                            gender: obj.gender,
                            nickName: obj.nickName,
                            province: obj.province
                          }
                        })
                        .then(res => {
                          console.log(res);
                          this.setData({
                            obj
                          })
                          console.log(this.data.id)
                        })
                    }
                  })
              }
            })
          } else {
            console.log("登陆失败！" + res.errMsg)
          }
        }
      })
    }
  },
  //监听页面加载
  onLoad: function (options) {
    console.log(11);
    wx.getStorage({
      key: 'uid',
      success: (res) => {
        db.collection("qzjy_user")
          .where({
            _openid: res.data
          })
          .get()
          .then(res => {
            console.log(res)
            this.setData({
              obj: res.data[0]
            })
            // console.log(this.data.obj)
          })
          .catch(err => {
            console.log(err)
          })
      },
      fail: function (res) {
        console.log(res)
      }
    })
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