/*
 * @Author: yuchen
 * @Date: 2021-09-06 20:59:26
 * @LastEditTime: 2021-09-18 00:18:00
 * @Description: 
 * @FilePath: \WeHohai\request\index.js
 */
export const request = (params) => {
    
    //定义公共url
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
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