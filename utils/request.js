
const MyPlugin = {
  install (Vue, options) {
    Vue.prototype.$request = function (data) {
      return new Promise((resolve, reject) => {
        uni.request({
          url: '',
          method: 'POST',
          data: {
          },
          success: (res) => {
            resolve(res.data)
          },
          fail: (err) => {
            reject(err)
          }
        })
      })
    }
  }
}

export default MyPlugin
