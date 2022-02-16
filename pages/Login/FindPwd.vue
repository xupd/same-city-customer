<template>
  <view class="page">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="header">
      <image class="back" @click="back" src="../../static/images/back.png"></image>
      <image class="bg" src="../../static/images/bg.png"></image>
      <view class="tip1">找回密码</view>
      <view class="tip2">百士帮用户端</view>
    </view>
    <view class="middle">
      <view class="form-item">
        <u-input
          type="number"
          placeholder="请输入手机号"
          border="bottom"
          clearable
        >
          <image style="width: 20rpx;height: 29rpx;" class="input-icon" slot="prefix" src="../../static/images/tel.png"></image>
        </u-input>
      </view>
      <view class="form-item">
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
      <view class="form-item">
        <u-input
          type="password"
          placeholder="请输入6-16位登录密码"
          border="bottom"
          clearable
        >
          <image style="width: 20rpx;height: 24rpx;" class="input-icon" slot="prefix" src="../../static/images/password.png"></image>
        </u-input>
      </view>
      <view class="form-item">
        <u-input
          type="password"
          placeholder="请再次输入6-16位登录密码"
          border="bottom"
          clearable
        >
          <image style="width: 20rpx;height: 24rpx;" class="input-icon" slot="prefix" src="../../static/images/password.png"></image>
        </u-input>
      </view>
      <view class="btns">
        <u-button text="找回密码" shape="circle" color="linear-gradient(92deg, #61A4FC, #5EA8FE, #3190FF)"></u-button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        tips: '',
        check: []
      }
    },
    methods: {
      back () {
        uni.navigateBack()
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
      margin-right: 20rpx;
    }
    .btns{
      width: 582rpx;
      height: 90rpx;
      margin: 79rpx auto 50rpx;
    }
  }
</style>
