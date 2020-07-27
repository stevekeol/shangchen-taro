import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'

//导入将用于组件中dispatch的方法
import { add, minus, asyncAdd } from '../../actions/counter'

//taro提供的组件
import { View, Button, Text } from '@tarojs/components'
import './index.scss'

//connect 方法将 redux 与我们的页面进行连接,传入参数：
//mapStateToProps(函数类型): 将state映射到this.props上
//mapDispatchToProps(函数类型): 接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
//[疑问]dispatch后面为何一定要加()
@connect( counter => counter, dispatch => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))

class Index extends Component {
  
  //当一个组件在被重新渲染时，这些方法将会被调用
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World123</Text></View>
      </View>
    )
  }
}

export default Index
