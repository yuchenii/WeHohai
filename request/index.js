/*
 * @Author: yuchen
 * @Date: 2021-09-06 20:59:26
 * @LastEditTime: 2021-10-01 19:00:31
 * @Description: 
 * @FilePath: \WeHohai\request\index.js
 */
export const request = (params) => {
    
    //定义公共url
    // const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
    const baseUrl = "https://wehohai.yuchen.tech/api/v1";
    let url;
    
    if (params.baseUrl){
        url = params.baseUrl + params.url;
    }else{
        url = baseUrl + params.url;
    }

    console.log(url);

    return new Promise((resolve, reject) => {

        wx.request({
            ...params,
            url: url,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}