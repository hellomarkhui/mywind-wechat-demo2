// pages/production/home/home.js
// import Notify from '@vant/weapp/dist/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    active: 1,
    curContent: 'proList', //proList为产品列表，detail为详情
    TabCur: 0 
  },
  lookDetail() {
    this.setData({
      curContent: 'detail'
    })
  },
  detailBack(){
    this.setData({
      curContent: 'proList'
    })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
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