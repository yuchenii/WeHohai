/*
 * @Author: yuchen
 * @Date: 2021-09-06 20:59:26
 * @LastEditTime: 2021-09-06 21:44:11
 * @Description: 
 * @FilePath: \WeHohai\request\index.js
 */
export const request = (params) => {
    
    //定义公共url
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((resolve, reject) => {

        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}