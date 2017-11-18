// pages/swiper/swiper.js
const img = require('../../utils/img.js');
const initContent = '本公司提供365天24小时现场救援、本公司提供365天24小时现场救援、专业拖车，紧急修理，  应急加油，车辆困境特种救援。\n电话：0766-2955991 \n手机：13826851933';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../img/1.jpg',
      '../../img/2.jpg',
      '../../img/3.jpg',
      '../../img/4.jpg',
      '../../img/5.jpg',
    ],
    content: initContent,
    indicatorDots: true,
    autoplay: true,
    interval: 2500,
    duration: 500
  },

  callPhone: (e) => {
    wx.makePhoneCall({
      phoneNumber: '13826851933',
      // phoneNumber: '0766-2955991' //仅为示例，并非真实的电话号码
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
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