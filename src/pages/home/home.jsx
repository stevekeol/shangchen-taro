import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'

//taro提供的组件
import NavBar from 'taro-navigationbar'; //自定义导航组件
import { View, Button, Text } from '@tarojs/components'

//导入将用于组件中dispatch的方法
// import { add, minus, asyncAdd } from '../../actions/counter'

import './home.scss'
//先集中导入colorUI的样式
import '../../components/icon.wxss' //为什么此处导入的icon集合，在me.jsx中也能用
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

class Home extends Component {

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
      <View className='index'>
        {/*导航条可剥离出来*/}
        <NavBar
          title='尚宸小管家'
          color="white"
          background="linear-gradient(45deg, #0081ff, #1cbbb4)"
        />
        <View class="block-title">
          <Text class="title bg-gradual-blue">数据概览</Text>
        </View>

        <View class="radius shadow-warp bg-white margin-top">
          <View class="cu-list menu sm-border card-menu margin-top">
            <View class="cu-item">
              <View class="content">
                <Text class="cuIcon-rankfill Text-cyan"></Text>
                <Text class="Text-grey">今日</Text>
              </View>
              <View class="action">
                <View class="cu-tag round bg-blue light">意向{ this.state.todayRegister }人</View>
                <View class="cu-tag round bg-cyan light">成交{ this.state.todayDeal }人</View>
              </View>
            </View>
            <View class="cu-item">
              <View class="content">
                <Text class="cuIcon-rankfill Text-cyan"></Text>
                <Text class="Text-grey">本月</Text>
              </View>
              <View class="action">
                <View class="cu-tag round bg-blue light">意向{ this.state.monthRegister }人</View>
                <View class="cu-tag round bg-cyan light">成交{ this.state.monthDeal }人</View>
              </View>
            </View>    
          </View> 
        </View>

        <View class="block-title margin-top-lg">
          <text class="title bg-gradual-blue light">小伙伴们</text>
        </View>
        {
          this.state.employees.map(item => <GroupList groupData={ item } groupName={item[0].group} />)
        }
      </View>
    )
  }
}

export default Home
