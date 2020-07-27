import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import configStore from './store'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  //项目配置
  config = {
    pages: [
      'pages/home/home',
      'pages/me/me',
      'pages/clientList/clientList',
      'pages/register/register',
      'pages/index/index',
      'pages/clientInfo/clientInfo'
    ],
    window: {
      navigationStyle: "custom",
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: "#333333",
      selectedColor: "#0081ff",
      backgroundColor: "#ffffff",
      borderStyle: "white",
      list: [{
        pagePath: "pages/home/home",
        text: "数据统计",
        iconPath: "./images/tabbar/data.png",
        selectedIconPath: "./images/tabbar/data_current.png"
      }, {
        pagePath: "pages/me/me",
        text: "我",
        iconPath: "./images/tabbar/me.png",
        selectedIconPath: "./images/tabbar/me_current.png"      
      }, {
        pagePath: "pages/clientList/clientList",
        text: "客户列表",
        iconPath: "./images/tabbar/list.png",
        selectedIconPath: "./images/tabbar/list_current.png"      
      }]
    },
    usingComponents: {
      // Login: "./components/login/login"
    }
  }

  //全局数据
  globalData = {
    isAuth: true,
    isLogin: !true,
    role: 'admin',
    phone: '15258800906'    
  }

  //在微信/支付宝小程序中对应 app 的 onLaunch(全局执行一次)
  componentWillMount() {
    // console.log(this.$router.params)
  }
  //在微信/支付宝小程序中对应 app 的 onLaunch(全局执行一次)
  //访问程序初始化参数
  //path(string):启动小程序的路径
  //scene(number):启动小程序的场景值
  //query(Object): 启动小程序的query参数
  //shareTicket(string): 转发信息
  //referrerInfo(Obejct): 来源信息(appid/extraData)
  componentDidMount () {

    //判断是否授权(avatar和openid)
    Taro.getSetting({
      success: res => {
        this.globalData.isAuth = res.authSetting['scope.userInfo'] ? true : false
      }
    });
  }

  //对应 onShow(微信小程序中也可以使用 Taro.onAppShow 绑定监听)
  componentDidShow () {}

  //对应 onHide(微信小程序中也可以使用 Taro.onAppHide 绑定监听)
  componentDidHide () {}

  //在微信/百度/字节跳动/支付宝小程序中这一生命周期方法对应 onError
  //程序发生脚本错误或 API 调用报错时触发，微信小程序中也可以使用 Taro.onError 绑定监听
  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  // (编译时 render 方法的内容会被直接替换掉，逻辑代码不会起作用。)
  render () {
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

// Taro.getApp(Object)

// Taro.request(url).then(function (res) {
//   console.log(res)
// })

// <Login { ...this.state }/> 