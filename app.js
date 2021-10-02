// app.js
import { request } from "./request/index.js"
import { login } from "./utils/asyncWx.js"
App({
  onLaunch() {
    
    // 检查 token 是否有效
    let wxtoken = "";
    let now = new Date();
    if(!(wxtoken = wx.getStorageSync('wxtoken')) || (wxtoken.expires < now.getTime()/1000)){
      this.getNewToken();
    }

    
    
  },
  globalData: {
    userInfo: null
  },
  async getNewToken(){
    const { code } = await login();
    // console.log(code);
    const  {data}  = await request({ url: "/users/wxlogin", data: { code }, method: "post" }).catch((err) =>{console.log(err)});
    wx.setStorageSync('wxtoken', data);
    return data.token;
  }
})
