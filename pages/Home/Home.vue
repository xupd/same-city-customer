<template>
  <view class="page">
    <u-notice-bar class="notice" :text="msg" color="#000000" bgColor="#ffffff"></u-notice-bar>
    <u-swiper height="330rpx" :list="imgs" indicator indicatorMode="line" circular></u-swiper>
    <view class="menu-list">
      <view class="row-list u-border-bottom">
        <view class="row-item" v-for="item in menu" :key="item.id" @click="activeMenu = item.id">
          <image mode="widthFix" class="row-img" :src="item.icon"></image>
          <view :style="activeMenu == item.id ? 'font-weight: bold;color: #126BDD;' : ''" class="row-label">{{item.name}}</view>
          <image v-if="activeMenu == item.id" class="hover-img" src="../../static/images/home/smile.png"></image>
        </view>
      </view>
      <view class="col-list">
        <view class="col-item" v-for="item in childMenu" :key="item.id" @click="toOrder">
          <image mode="heightFix" class="col-img" :src="item.icon"></image>
          <view class="col-label">{{item.name}}</view>
        </view>
      </view>
    </view>
    <view class="re-list">
      <view class="tips">
        <image src="../../static/images/home/fwtj.png"></image>
        <view>实惠热销服务</view>
      </view>
      <view class="list">
        <view class="item" v-for="item in list" :key="item.id">
          <view class="item-left">
            <image :src="item.img"></image>
          </view>
          <view class="item-right">
            <view class="label1">{{item.title}}</view>
            <view class="label2">{{item.tip}}</view>
            <view class="item-right-footer">
              <view class="label3">￥{{item.price}}</view>
              <view class="btns">
                <u-button
                  size="mini"
                  text="去下单"
                  shape="circle"
                  color="linear-gradient(206deg, #3187F6, #66A7FC)">
                </u-button>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        msg: '要滚动出现！公告要滚动出现！',
        imgs: [
          'https://cdn.uviewui.com/uview/swiper/swiper3.png',
          'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          'https://cdn.uviewui.com/uview/swiper/swiper1.png'
        ],
        menu: [],
        activeMenu: '1',
        list: []
      }
    },
    computed: {
      childMenu () {
        for (let i = 0; i < this.menu.length; i++) {
          if (this.activeMenu == this.menu[i].id) {
            return this.menu[i].child
          }
        }
      }
    },
    created () {
      this.menu = [
        {
          id: '1',
          name: '安装',
          icon: '../../static/images/home/az.png',
          child: [
            {
              id: '1',
              name: '家具',
              icon: '../../static/images/home/child/jj.png'
            },
            {
              id: '2',
              name: '卫浴',
              icon: '../../static/images/home/child/wy.png'
            },
            {
              id: '3',
              name: '卫浴',
              icon: '../../static/images/home/child/wy.png'
            },
            {
              id: '4',
              name: '卫浴',
              icon: '../../static/images/home/child/wy.png'
            },
            {
              id: '5',
              name: '卫浴',
              icon: '../../static/images/home/child/wy.png'
            },
            {
              id: '6',
              name: '卫浴',
              icon: '../../static/images/home/child/wy.png'
            }
          ]
        },
        {
          id: '2',
          name: '送装',
          icon: '../../static/images/home/sz.png',
          child: [
            {
              id: '2',
              name: '卫浴',
              icon: '../../static/images/home/child/wy.png'
            }
          ]
        },
        {
          id: '3',
          name: '配送',
          icon: '../../static/images/home/ps.png',
          child: [
            {
              id: '',
              name: '',
              icon: ''
            }
          ]
        },
        {
          id: '4',
          name: '维修',
          icon: '../../static/images/home/wx.png',
          child: [
            {
              id: '',
              name: '',
              icon: ''
            }
          ]
        },
        {
          id: '5',
          name: '其他',
          icon: '../../static/images/home/qt.png',
          child: [
            {
              id: '',
              name: '',
              icon: ''
            }
          ]
        }
      ]
      this.list = [
        {
          id: '1',
          img: '../../static/images/home/list/xyj.png',
          title: '洗衣机修理服务',
          tip: '不需更换零部件 ',
          price: '115'
        },
        {
          id: '2',
          img: '../../static/images/home/list/xx.png',
          title: '家电维修',
          tip: '不需更换零部件 ',
          price: '200'
        }
      ]
    },
    methods: {
      toOrder () {
        uni.navigateTo({
          url: '/pages/Order/Order'
        })
      }
    }
  }
</script>

<style lang="scss">
  .page {
    padding: 22rpx 24rpx;
  }
  .notice{
    margin: 0 0 21rpx 0;
    border-radius: 12rpx;
    box-shadow: 0px 3px 16px 0px rgba(41, 41, 42, 0.22);
  }
  .menu-list{
    width: 100%;
    background-color: #ffffff;
    margin-top: 21rpx;
    border-radius: 10px;
    .row-list{
      width: 100%;
      height: 114rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .row-item{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding-bottom: 18rpx;
        .row-label{
          font-size: 26rpx;
          font-family: Source Han Sans CN;
          color: #000000;
          padding-left: 5rpx;
        }
        .row-img{
          width: 25rpx;
        }
        .hover-img{
          width: 28rpx;
          height: 10rpx;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .col-list{
      width: 100%;
      min-height: 100rpx;
      display: flex;
      align-items: center;
      flex-flow: row wrap;
      padding: 30rpx 30rpx 0;
      .col-item{
        width: 20%;
        text-align: center;
        margin-bottom: 30rpx;
        .col-img{
          height: 30rpx;
        }
        .col-label{
          font-size: 20rpx;
          font-family: Adobe Heiti Std;
          font-weight: normal;
          color: #666666;
        }
      }
    }
  }
  .re-list{
    margin-top: 32rpx;
    .tips{
      display: flex;
      image{
        width: 118rpx;
        height: 29rpx;
        margin-right: 19rpx;
      }
      view{
        font-size: 20rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #666666;
        line-height: 34rpx;
      }
    }
    .list{
      width: 100%;
      margin: 40rpx 0;
      .item{
        width: 100%;
        height: 204rpx;
        border-radius: 10rpx;
        display: flex;
        background-color: #ffffff;
        margin-bottom: 24rpx;
        .item-left{
          width: 290rpx;
          height: 100%;
          image{
            width: 100%;
            height: 100%;
          }
        }
        .item-right{
          padding: 24rpx;
          width: calc(100% - 290rpx);
          .label1{
            font-size: 28rpx;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #222222;
            line-height: 44rpx;
          }
          .label2{
            font-size: 20rpx;
            font-family: Source Han Sans CN;
            color: #3187F6;
            line-height: 42rpx;
          }
          .item-right-footer{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 30rpx;
            .label3{
              font-size: 26rpx;
              font-family: Source Han Sans CN;
              font-weight: bold;
              color: #F40707;
              line-height: 39rpx;
            }
            .bnts{
              width: 96rpx;
              height: 42rpx;
            }
          }
        }
      }
    }
  }
</style>
