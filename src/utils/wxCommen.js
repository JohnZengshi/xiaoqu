// 用户支付
function userPay(res, callback = function () {}) {
  var payInfo = res.data;
  // console.log(payInfo);
  wx.requestPayment({
    'timeStamp': payInfo.data.timeStamp,
    'nonceStr': payInfo.data.nonceStr,
    'package': payInfo.data.package,
    'signType': 'MD5',
    'paySign': payInfo.data.paySign,
    'success': function (res) {
      callback(res);
    },
    'fail': function (res) {
      wx.showToast({
        title: "支付失败",
        icon: "none",
        mask: true,
        duration: 1500
      })
    }
  });
}
// 定位
function getLocation() {
  return class placeInfo {
    constructor() {
      this.placeInfo = null;
    };
    // 获取定位
    getLocation(callback = function () {}) {
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          this.placeInfo = res;
          callback(res)
        }
      })
    }
  }


}
// 拨打电话
function calling(phone) {
  wx.makePhoneCall({
    phoneNumber: phone,
    success: function () {
      console.log("拨打电话成功！")
    },
    fail: function () {
      console.log("拨打电话失败！")
    }
  })
}
//跳转到首页
function entrydefault() {
  wx.reLaunch({
    url: '/pages/chatPage/chatPage'
  })
}

module.exports = {
    userPay,
    getLocation,
    calling,
    entrydefault
}