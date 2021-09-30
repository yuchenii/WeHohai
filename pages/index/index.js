// index.js

import {request} from "../../request/index.js";
// 获取应用实例
const app = getApp()

Page({
  data: {
    greeting: "早上好",
    time: "9月30日 星期四",
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
    // title
    this.setTitle();

    // 一言
    this.getData();
  },

  onShow() {
    console.log("onShow");
    
    
  },

  getuser(){
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  // 设置标题
  setTitle(){
    // greeting
    let date = new Date();
    let hours = date.getHours();
    let greeting = "";
    if (hours < 5) {
      greeting ="凌晨好";
    } else if (hours < 9) {
      greeting = "早上好";
    } else if (hours < 12) {
      greeting = "上午好";
    }else if (hours < 14) {
      greeting = "中午好";
    }else if (hours < 18) {
      greeting = "下午好";
    }else if (hours < 20) {
      greeting = "傍晚好"
    } else if (hours < 24) {
      greeting = "晚上好";
    }

    // date
    let day = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    console.log(date.getMonth() + 1 +"月" + date.getDate()
    +"日 " + day[date.getDay()]);

    this.setData({
      greeting: greeting,
      time: date.getMonth() + 1 +"月" + date.getDate()
      +"日 " + day[date.getDay()]
    })
  },

  async getData() {
    const res = await request({data:{c:"d",c:"i"},
    baseUrl:"https://v1.hitokoto.cn", url:"/"}).catch((err) =>{console.log(err)});
    console.log(res);
    this.setData({
      motto: res.data.hitokoto
    })
     
  }
})
