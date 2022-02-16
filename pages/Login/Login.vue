<template>
  <view class="page">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="header">
      <image class="back" @click="back" src="../../static/images/back.png"></image>
      <image class="bg" src="../../static/images/bg.png"></image>
      <view class="tip1">登录</view>
      <view class="tip2">欢迎登录百士帮</view>
    </view>
    <view class="middle">
      <view class="form-item">
        <u-input
          type="number"
          placeholder="请输入手机号"
          border="bottom"
          clearable
        >
          <image class="input-icon" slot="prefix" src="../../static/images/tel.png"></image>
        </u-input>
      </view>
      <view class="form-item" v-if="msgCodeShow">
        <u-input
          type="number"
          placeholder="请输入验证码"
          border="bottom"
          clearable
        >
          <image style="width: 20rpx;height: 26rpx;" class="input-icon" slot="prefix" src="../../static/images/msg.png"></image>
          <template slot="suffix">
            <u-code
              ref="uCode"
              @change="codeChange"
              startText="验证码"
              changeText="X秒重新"
            ></u-code>
            <u-button
              @click="getCode"
              :text="tips"
              type="success"
              size="mini"
              color="linear-gradient(92deg, #61A4FC, #5EA8FE, #3190FF)"
            ></u-button>
          </template>
        </u-input>
      </view>
      <template v-if="!msgCodeShow">
        <view class="form-item">
          <u-input
            type="password"
            placeholder="请输入密码"
            border="bottom"
            clearable
          >
            <image class="input-icon" slot="prefix" src="../../static/images/password.png"></image>
          </u-input>
        </view>
        <view class="tips">
          <view @click="toMsgLogin">手机验证码登录</view>
          <view class="inline-tip">
            <view>还没有账号？</view>
            <view class="tip2" @click="toRegister">去注册</view>
          </view>
        </view>
        <view class="tips tips2">
          <view></view>
          <view @click="toFindPwd">忘记密码？</view>
        </view>
      </template>
      <template v-if="msgCodeShow">
        <view class="tips">
          <view @click="toLogin">密码登录</view>
          <view>
          </view>
        </view>
        <view class="tips tips2">
        </view>
      </template>
      <view class="btns">
        <u-button text="登录" shape="circle" color="linear-gradient(92deg, #61A4FC, #5EA8FE, #3190FF)"></u-button>
      </view>
    </view>
    <view class="footer">
      <view class="title">第三方登录</view>
      <view class="third-login">
        <view class="tl-item">
          <image class="img1" src="../../static/images/wx.png"></image>
          <view>微信登录</view>
        </view>
        <view class="tl-item">
          <image class="img2" src="../../static/images/apple.png"></image>
          <view>iphone登录</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        msgCodeShow: false,
        tips: ''
      }
    },
    methods: {
      back () {
        uni.navigateBack()
      },
      toRegister () {
        uni.navigateTo({
          url: '/pages/Login/Register'
        })
      },
      toMsgLogin () {
        this.msgCodeShow = true
      },
      toLogin () {
        this.msgCodeShow = false
      },
      toFindPwd () {
        uni.navigateTo({
          url: '/pages/Login/FindPwd'
        })
      },
      codeChange(text) {
        this.tips = text
      },
      getCode() {
        if (this.$refs.uCode.canGetCode) {
          // 模拟向后端请求验证码
          uni.showLoading({
            title: '正在获取验证码'
          })
          setTimeout(() => {
            uni.hideLoading()
            // 这里此提示会被this.start()方法中的提示覆盖
            uni.$u.toast('验证码已发送')
            // 通知验证码组件内部开始倒计时
            this.$refs.uCode.start()
          }, 2000)
        } else {
          uni.$u.toast('倒计时结束后再发送')
        }
      }
    }
  }
</script>

<style lang="scss">
  .page{
    background-color: #ffffff;
  }
  .header{
    position: relative;
    height: 450rpx;
    .back{
      width: 18rpx;
      height: 33rpx;
      margin-left: 25rpx;
      margin-top: 35rpx;
    }
    .bg{
      width: 383rpx;
      height: 449rpx;
      position: absolute;
      top: 0;
      right: 0;
    }
    .tip1{
      font-size: 50rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #000000;
      margin-left: 83rpx;
      margin-top: 109rpx;
      line-height: 48rpx;
    }
    .tip2{
      font-size: 28rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #999999;
      margin-left: 83rpx;
      margin-top: 20rpx;
      line-height: 48rpx;
    }
  }
  .middle{
    padding: 0 63rpx;
    .form-item{
      margin-bottom: 40rpx;
    }
    .input-icon{
      width: 20rpx;
      height: 29rpx;
      margin-right: 20rpx;
    }
    .tips{
      margin-top: -20rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 22rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #999999;
      .inline-tip{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .tip2{
        color: #3190FF;
      }
    }
    .tips2{
      margin-top: 30rpx;
      height: 33rpx;
    }
    .btns{
      width: 582rpx;
      height: 90rpx;
      margin: 69rpx auto 0;
    }
  }
  .footer{
    margin-top: 150rpx;
    margin-bottom:50rpx;
    text-align: center;
    .title{
      font-size: 30rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #999999;
    }
    .third-login{
      margin-top: 45rpx;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .tl-item{
        .img1{
          width: 70rpx;
          height: 70rpx;
        }
        .img2{
          width: 62rpx;
          height: 74rpx;
        }
        view{
          font-size: 22rpx;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #999999;
        }
      }
    }
  }
</style>
