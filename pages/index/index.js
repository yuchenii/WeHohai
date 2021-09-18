// index.js

import {request} from "../../request/index.js";
// 获取应用实例
const app = getApp()

Page({
  data: {
    hasLogin: false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getData();
  },


  async getData() {
    const res = await request({data:{c:"d",c:"i"},
  baseUrl:"https://v1.hitokoto.cn",url:"/"}).catch((err) =>{console.log(err)});
    console.log(res);
    this.setData({
      motto: res.data.hitokoto
    })
     
  }
})
