import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'

//taro提供的组件
import NavBar from 'taro-navigationbar'; //自定义导航组件
import { View, Button, Text, Form, Switch, Picker, Input } from '@tarojs/components'

//导入将用于组件中dispatch的方法
// import { add, minus, asyncAdd } from '../../actions/counter'

//先集中导入colorUI的样式
import '../../components/main.wxss'
import './clientList.scss'

import addIcon from '../../images/test.png';

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

class ClientList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: [{
        deal: true,
        name: '张杰',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: false,
        name: '李珊珊',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }, {
        deal: true,
        name: '张泽之',
        phone: 15258800906,
        contact: {
          name: '陈攀'
        }
      }]
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

  enterRegister() {
    Taro.navigateTo({
      url: '../register/register?userId=10001&name=zhangjie',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log('data from openedPage:', data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        console.log(res);
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  }

  enterClientInfo() {
    Taro.navigateTo({
      url: '../clientInfo/clientInfo?userId=10001'
    })
  }
  render () {
    return (
      <View>
        <NavBar
          title='客户列表'
          color="white"
          background="linear-gradient(45deg, #0081ff, #1cbbb4)"
        />      
        <View class="radius shadow-warp bg-white margin-top">
          {
            this.state.clients.map(item => {
              return (
                <View class="cu-list menu sm-border card-menu margin-top" onClick={ this.enterClientInfo }>
                  <View class="cu-item" bindtap="getClientDetail" data-phone="{{clients[index].phone}}">
                    <View class="content">
                      <Text class="cuIcon-title text-{{item.deal ? 'green' : 'blue'}}"></Text>
                      <Text class="text-grey margin-right">{ item.name }</Text>
                      <Text class="text-grey">{ item.phone }</Text>
                    </View>
                    <View class="action">
                      <View class="cu-tag round bg-grey light">{ item.contact.name }</View>
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
          
        <View class="add-fix-bottom">
          <Image class="avatar" src="../../images/level_diamond.png" onClick={this.enterRegister}></Image>
        </View>
      </View>
      
    )
  }
}

export default ClientList
