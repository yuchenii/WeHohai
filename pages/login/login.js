// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remind: '加载中',
    help_status: false,
    reset_status: false,
    userid_focus: false,
    passwd_focus: false,
    // vcode_focus: false,
    idcard_focus: false,
    userid: '',
    passwd: '',
    // vcode: '',
    // cookie: '',
    // vcodeUrl: '',
    idcard: '',
    angle: 0,
    canIUseGetUserProfile: false

  },

  inputFocus: function(e){
    if(e.target.id == 'userid'){
      this.setData({
        'userid_focus': true
      });
    }else if(e.target.id == 'passwd'){
      this.setData({
        'passwd_focus': true
      });
    }
  },
  inputBlur: function(e){
    if(e.target.id == 'userid'){
      this.setData({
        'userid_focus': false
      });
    }else if(e.target.id == 'passwd'){
      this.setData({
        'passwd_focus': false
      });
    }
  },

  handleHelp(){
    this.setData({
      'help_status': !this.data.help_status
    });
    console.log(this.data.help_status);
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
    // 加载
    let _this = this;
    setTimeout(function(){
      _this.setData({
        remind: ''
      });
    }, 1000);

    // 改变角度
    wx.onAccelerometerChange(function(res) {
      var angle = -(res.x*30).toFixed(1);
      if(angle>14){ angle=14; }
      else if(angle<-14){ angle=-14; }
      if(_this.data.angle !== angle){
        _this.setData({
          angle: angle
        });
      }
    });
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