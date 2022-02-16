<template>
  <view class="page">
    <view class="box">
      <u-form labelPosition="left" labelWidth="120" :labelStyle="labelStyle">
        <u-form-item required label="服务类目" borderBottom @click="sTypeShow = true">
          <u-input
            v-model="sTypeLabel"
            disabled
            disabledColor="#ffffff"
            placeholder="请选择"
            border="none"
            :placeholderStyle="placeholderStyle"
            inputAlign="right">
          </u-input>
          <u-icon class="input-icon" slot="right" name="arrow-right"></u-icon>
        </u-form-item>
        <u-form-item required label="下单类型" borderBottom @click="oTypeShow = true">
          <u-input
            v-model="oTypeLabel"
            disabled
            disabledColor="#ffffff"
            placeholder="请选择"
            border="none"
            :placeholderStyle="placeholderStyle"
            inputAlign="right">
          </u-input>
          <u-icon class="input-icon" slot="right" name="arrow-right"></u-icon>
        </u-form-item>
        <u-form-item required label="自定义金额" borderBottom>
          <u-input
            type="number"
            v-model="price"
            disabledColor="#ffffff"
            placeholder="请填写整数金额"
            border="none"
            :placeholderStyle="placeholderStyle"
            inputAlign="right">
          </u-input>
          <view slot="right" class="input-icon" style="color: #F60606">元</view>
        </u-form-item>
        <u-form-item required label="期望上门时间">
          <u-input
            v-model="oType"
            disabled
            disabledColor="#ffffff"
            placeholder="请选择上门时间"
            border="none"
            :placeholderStyle="placeholderStyle"
            inputAlign="right">
          </u-input>
          <u-icon class="input-icon" slot="right" name="arrow-right"></u-icon>
        </u-form-item>
      </u-form>
      <u-popup
        :show="oTypeShow"
        closeable
        @close="oTypeClose"
        mode="center"
        :round="10">
        <view class="popup-content">
          <view class="title">请选择下单类型</view>
          <view class="type-item"
            v-for="item in oTypeList"
            :key="item.id"
            @click="oTypeSelect = item.id"
            :class="oTypeSelect == item.id ? 'type-item-select' : ''">
            <image class="item-left" :src="item.img"></image>
            <view class="item-right">
              <view class="item-tip1">{{item.title}}</view>
              <view class="item-tip2">{{item.tip}}</view>
            </view>
            <image class="type-item-img" :src="oTypeSelect == item.id ? '../../static/images/order/tri_s.png' : '../../static/images/order/tri.png' "></image>
          </view>
          <view class="btns">
            <u-button text="选择商品" shape="circle" color="linear-gradient(91deg, #F68A35, #FABB54)" @click="oTypeSubmit"></u-button>
          </view>
        </view>
      </u-popup>
      <u-popup
        class="psec"
        :show="sTypeShow"
        closeable
        @close="sTypeClose"
        :round="10">
        <view class="popup2-content">
          <view class="title">服务类型和商品类目</view>
          <view class="box">
            <view class="tip">服务类型</view>
            <view class="box-type">
              <view class="type-item" v-for="item in sTypeList" :key="item.id" @click="sTypeSelect = item.id">
                <view :class="sTypeSelect == item.id ? 'type-item-select' : ''">{{item.name}}</view>
              </view>
            </view>
          </view>
          <view class="box">
            <view class="tip">商品类型</view>
            <view class="box-type">
              <view class="type-item" v-for="item in sTypeList2" :key="item.id" @click="sTypeSelect2 = item.id">
                <view :class="sTypeSelect2 == item.id ? 'type-item-select' : ''">{{item.name}}</view>
              </view>
            </view>
          </view>
          <view class="btns">
            <u-button text="选择商品" shape="circle" color="linear-gradient(91deg, #3187F8, #62A5FC)" @click="sTypeSubmit"></u-button>
          </view>
        </view>
      </u-popup>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        labelStyle: {
          'marginLeft': '15rpx',
          'fontSize': '28rpx'
        },
        placeholderStyle: 'text-align: right; font-size: 26rpx;',
        sType: '',
        sTypeLabel: '',
        sTypeShow: false,
        sTypeList: [],
        sTypeSelect: '',
        sTypeList2: [],
        sTypeSelect2: '',
        oType: '',
        oTypeLabel: '',
        oTypeShow: false,
        oTypeSelect: '',
        oTypeList: [],
        price: '',
        gtime: ''
      }
    },
    created () {
      this.oTypeList = [
        {
          id: '1',
          title: '一口价下单',
          tip: '全国统一，无需议价',
          img: '../../static/images/order/1.png'
        },
        {
          id: '2',
          title: '报价下单',
          tip: '发布订单，师傅竞价',
          img: '../../static/images/order/2.png'
        },
        {
          id: '3',
          title: '自由定义一口价',
          tip: '自由竞价，发布订单',
          img: '../../static/images/order/3.png'
        }
      ]
      this.sTypeList = [
        {
          id: '1',
          name: '安装'
        },
        {
          id: '2',
          name: '送装'
        },
        {
          id: '3',
          name: '配送到家'
        },
        {
          id: '4',
          name: '维修'
        },
        {
          id: '5',
          name: '量尺'
        },
        {
          id: '6',
          name: '送装'
        },
        {
          id: '7',
          name: '配送到家'
        },
        {
          id: '8',
          name: '维修'
        }
      ]
      this.sTypeList2 = [
        {
          id: '1',
          name: '家具'
        },
        {
          id: '2',
          name: '卫浴'
        },
        {
          id: '3',
          name: '晾衣架'
        },
        {
          id: '4',
          name: '灯具'
        },
        {
          id: '5',
          name: '锁'
        },
        {
          id: '6',
          name: '地板'
        },
        {
          id: '7',
          name: '窗帘'
        },
        {
          id: '8',
          name: '家电'
        }
      ]
    },
    methods: {
      oTypeClose () {
        this.oTypeShow = false
      },
      oTypeSubmit () {
        if (!this.oTypeSelect) {
          uni.$u.toast('请选择')
          return
        }
        this.oTypeShow = false
        this.oType = this.oTypeList[this.oTypeSelect - 1].id
        this.oTypeLabel = this.oTypeList[this.oTypeSelect - 1].title
      },
      sTypeClose () {
        this.sTypeShow = false
      },
      sTypeSubmit () {
        if (!this.sTypeSelect) {
          uni.$u.toast('请选择服务类型')
          return
        }
        if (!this.sTypeSelect2) {
          uni.$u.toast('请选择商品类型')
          return
        }
        this.sTypeShow = false
        this.sTypeLabel = `${this.sTypeList[this.sTypeSelect - 1].name}-${this.sTypeList2[this.sTypeSelect2 - 1].name}`
      }
    }
  }
</script>

<style lang="scss">
  .page{
  }
  .box{
    padding: 0 40rpx;
    background-color: #FFFFFF;
    .input-icon{
      margin-left: 20rpx;
    }
    /deep/ .u-form-item__body{
      padding: 30rpx 0;
    }
    .popup-content{
      width: 551rpx;
      height: 836rpx;
      background-color: #FFFFFF;
      border-radius: 20rpx;
      padding: 50rpx 43rpx;
      .title{
        font-size: 30rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #000000;
        line-height: 30rpx;
        text-align: center;
        margin-bottom: 58rpx;
      }
      .type-item{
        width: 465rpx;
        height: 145rpx;
        padding: 0 71rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ECF3FD;
        border-radius: 10rpx;
        margin-bottom: 40rpx;
        position: relative;
        .item-left{
          width: 80rpx;
          height: 80rpx;
          margin-right: 27rpx;
        }
        .item-right{
          flex: 0 0 auto;
          .item-tip1{
            font-size: 28rpx;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #333333;
            line-height: 30rpx;
            margin-bottom: 15rpx;
          }
          .item-tip2{
            font-size: 22rpx;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
            line-height: 30rpx;
          }
        }
        .type-item-img{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 42rpx;
          height: 40rpx;
        }
      }
      .type-item-select{
        background: #FDF4EC;
        border: 1px solid #F79239;
      }
      .btns{
        width: 379rpx;
        height: 60rpx;
        margin: 56rpx auto 0;
      }
    }
    .popup2-content{
      width: 750rpx;
      height: 776rpx;
      .title{
        width: 750rpx;
        height: 100rpx;
        background: #3187F8;
        font-size: 30rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        border-radius: 20rpx 20rpx 0px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .box{
        padding: 39rpx 23rpx 0;
        .tip{
          font-size: 24rpx;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #666666;
          line-height: 30rpx;
        }
        .box-type{
          margin-top: 32rpx;
          display: flex;
          flex-flow: row wrap;
          .type-item{
            width: 25%;
            height: 46rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 29rpx;
            & > view{
              width: 140rpx;
              height: 46rpx;
              border: 1rpx solid #CCCCCC;
              border-radius: 6rpx;
              font-size: 24rpx;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #666666;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .type-item-select {
              color: #EDF4FE;
              background: linear-gradient(91deg, #64A6FC, #3187F8);
            }
          }
        }
      }
      .btns{
        width: 379rpx;
        height: 70rpx;
        margin: 44rpx auto 0;
      }
    }
    /deep/ .psec .u-icon__icon{
      color: #FFFFFF !important;
    }
  }
</style>
