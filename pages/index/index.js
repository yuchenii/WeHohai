// index.js

import { request } from "../../request/index.js";
import { login, getUserProfile } from "../../utils/asyncWx.js";
// 获取应用实例
const app = getApp()

Page({
  data: {
    greeting: "早上好",
    time: "9月30日 星期四",
    token:"",
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


    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          // wx.request({
          //   url: 'https://example.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
          console.log(res);
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

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


  async handleGetUser() {
   
    let resdetail = {};

    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    await wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({userInfo:res});
        resdetail = res;
        console.log(res);
        console.log(resdetail);
        
      },
      fail: (err) => {
        console.log(err);
      }
    })
       // 获取小程序登陆成功后的code
       const { code } = await login();
       console.log(code);

    
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
