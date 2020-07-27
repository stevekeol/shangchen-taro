import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'

//taro提供的组件
import NavBar from 'taro-navigationbar'; //自定义导航组件
import { View, Button, Text, Picker } from '@tarojs/components'

//taro-ui提供的组件
import { AtIcon } from 'taro-ui'

//导入将用于组件中dispatch的方法
// import { add, minus, asyncAdd } from '../../actions/counter'

import './clientInfo.scss'
//先集中导入colorUI的样式
import '../../components/main.wxss'

import Login from '../../components/login/login' //测试ok
import MyPicker from '../../components/picker/picker'

//connect 方法将 redux 与我们的页面进行连接,传入参数：
//mapStateToProps(函数类型): 将state映射到this.props上
//mapDispatchToProps(函数类型): 接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
//[疑问]dispatch后面为何一定要加()

// @connect( counter => counter, dispatch => ({
//   add() {
//     dispatch(add())
//   },
//   dec() {
//     dispatch(minus())
//   },
//   asyncAdd() {
//     dispatch(asyncAdd())
//   }
// }))

class ClientInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: Taro.getApp().globalData.isLogin,
      todayRegister: 5,
      todayDeal: 2,
      monthRegister: 22,
      monthDeal: 9,
      employees: [],

      records: [
        {time: '2020-06-20 18:00', contact: '陈攀', content: '商讨价格与合同'},
        {time: '2020-06-20 18:00', contact: '陈攀', content: '商讨价格与合同'}
      ]
    };
  }  
  

  //当一个组件在被重新渲染时，这些方法将会被调用
  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }
  componentWillUnmount() {}
  componentDidMount() {}
  componentDidShow() {}
  componentDidHide() {}

  render () {
    return (
      <View>
        <NavBar
          title='客户详情'
          color="white"
          background="#0081ff"
        />      

        <View class="body">
          <View class="orderContainer">
            <View class="merchantInfo">
              <View class="name cuIcon-locationfill" bindtap="showLocation">进入地图</View>
              <View class="call" bindtap="makePhoneCall">联系客户</View>
            </View>
            <View class="orderInfo">
              <View class="title">
                  <View class="name">客户状态</View>
                  <View class="state">意向</View>        
              </View>
              <View class="items">
                <View class="item">
                  <View class="name">姓名</View>
                  <View class="value">张杰</View>
                </View>
                <View class="item">
                  <View class="name">电话</View>
                  <View class="value">15258800906</View>
                </View> 
                <View class="item">
                  <View class="name">地址</View>
                  <View class="value">杭州市余杭区西园3幢3单元</View>
                </View>
                <View class="item">
                  <View class="name">对接人</View>
                  <View class="value">陈攀</View>
                </View>                     
              </View>
            </View>
          </View>
        </View>

        <View class="body">
          <View class="orderContainer">
            <View class="orderInfo">
              <View class="title addIcon">
                  <View class="name">跟进记录</View>
              </View>
              <View class="records">
                <View class="record">
                  <View class="meta">
                    <View>2020-06-20 18:00</View>
                    <View></View>
                  </View>
                  <View class="content">沟通内容沟通内容沟通内容沟通内容沟通内容沟通内容沟通内容</View>
                </View>
                <View class="record">
                  <View class="meta">
                    <View>2020-06-20 18:00</View>
                    <View></View>
                  </View>
                  <View class="content">沟通内容沟通内容沟通内容沟通内容沟通内容沟通内容沟通内容</View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <Login />

      </View>
    )
  }
}

export default ClientInfo
