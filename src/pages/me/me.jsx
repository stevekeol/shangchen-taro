import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'

//taro提供的组件
import NavBar from 'taro-navigationbar'; //自定义导航组件
import { View, Button, Text } from '@tarojs/components'

//导入将用于组件中dispatch的方法
// import { add, minus, asyncAdd } from '../../actions/counter'

import './me.scss'
//先集中导入colorUI的样式
import '../../components/main.wxss'

// import Login from '../../components/login/login' //测试ok
import GroupList from '../../components/groupList/groupList'

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

class Me extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: Taro.getApp().globalData.isLogin,
      todayRegister: 5,
      todayDeal: 2,
      monthRegister: 22,
      monthDeal: 9,

      employees: [
        [
          { registers: [],
            deals: [],
            name: '赵权恒A',
            phone: '18881260785',
            password: '123',
            group: 'A',
            role: 'leader',
            createTime: '2020-04-10 23:25:37' 
          }, 
          { registers: [],
            deals: [],
            name: '张杰a',
            phone: '15258800906',
            password: 'zhangjie',
            group: 'A',
            role: 'worker',
            createTime: '2020-06-13 14:09:25' 
          }        
        ],
        [
          { registers: [],
            deals: [],
            name: '赵权恒A',
            phone: '18881260785',
            password: '123',
            group: 'A',
            role: 'leader',
            createTime: '2020-04-10 23:25:37' 
          }, 
          { registers: [],
            deals: [],
            name: '张杰a',
            phone: '15258800906',
            password: 'zhangjie',
            group: 'A',
            role: 'worker',
            createTime: '2020-06-13 14:09:25' 
          }        
        ],
        [
          { registers: [],
            deals: [],
            name: '赵权恒A',
            phone: '18881260785',
            password: '123',
            group: 'A',
            role: 'leader',
            createTime: '2020-04-10 23:25:37' 
          }, 
          { registers: [],
            deals: [],
            name: '张杰a',
            phone: '15258800906',
            password: 'zhangjie',
            group: 'A',
            role: 'worker',
            createTime: '2020-06-13 14:09:25' 
          }        
        ] 
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
          title='JieGe'
          color="white"
          background="#0081ff"
        />      
        <View class="backgroundHead">
          <Image class="avatar" src="https://shp.qpic.cn/cfwebcap/0/d0a02c5f86d40c0fae24ae56eea587e0/" mode="scaleToFill"></Image>
        </View>

        <View class="body margin-top-xl">
          <View class="title">我的卡包</View>
          <View class="memberCard" bindtap="enterMemberCardInfo">
            <View class="memberCardInfo">
              <View class="store">橙子宠物</View>
              <View class="number">No.10010123</View>
            </View>
            <View class="memberCardLevel">
              <View class="icon">
                <Image src="../../images/level_diamond.png"></Image>
                <View>钻石VIP</View>
              </View>
            </View>
          </View>
          <View class="title margin-top-xl">其它</View>
          <View class="tableContainer margin-top">
            <View class="item">
              <View class="name cuIcon-locationfill">我的地址</View>
              <View class="value">余杭区荆长大道西园3幢302</View>
            </View>
            <View class="item">
              <View class="name cuIcon-mobilefill">联系方式</View>
              <View class="value">15258800906</View>
            </View>    
            <View class="item" bindtap="enterAllOrders">
              <View class="name cuIcon-timefill">所有订单</View>
              <View class="cuIcon-right"></View>
            </View>
          </View>
        </View>      
      </View>
    )
  }
}

export default Me
