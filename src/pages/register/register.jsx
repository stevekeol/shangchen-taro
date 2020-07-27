import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'

//taro提供的组件
import NavBar from 'taro-navigationbar'; //自定义导航组件
import { View, Button, Text, Form, Switch, Picker, Input } from '@tarojs/components'

//导入将用于组件中dispatch的方法
// import { add, minus, asyncAdd } from '../../actions/counter'

//先集中导入colorUI的样式
import '../../components/main.wxss'
import './register.scss'

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

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }  
  
  formSubmit(e) {
    console.log(e)
  }

  formReset(e) {
    console.log(e)
  }  

  //当一个组件在被重新渲染时，这些方法将会被调用
  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }
  componentWillUnmount() {}
  componentDidMount(options) {
    const eventChannel = this.$scope.getOpenerEventChannel;
    // eventChannel.on('acceptDataFromOpenerPage', req => {
    //   console.log(req);
    // })
    console.log('testPage');
    console.log(this.$scope.getOpenerEventChannel);
    // console.log(this.$router.params);
    console.log(this.$scope.events)

    // const eventChannel = this.getOpenerEventChannel()
    //    eventChannel.on('acceptDataFromOpenerPage', function(data) {
    //   console.log(data)
    //   // console.log(options);
    // })
  }
  componentDidShow() {
    // acceptDataFromOpenedPage('data from childPage');
  }
  componentDidHide() {}


  // onLoad (option){
    // //获取事件对象
    // const eventChannel = this.getOpenerEventChannel()
    // //通知上一页，传回参数，响应函数
    // //改变上一页监听的数据时调用
    // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // eventChannel.emit('someEvent', {data: 'test'});
    // // 监听acceptData事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('acceptDataFromOpenerPage', function(data) {
    //   console.log(data)
    // })
  // }

  render () {
    console.log(this.props);
    return (
      <View>
        { /*https://github.com/lingxiaoyi/Taro-navigation-bar */ }
        <NavBar
          title='客户资料录入'
          color="white"
          background="linear-gradient(45deg, #0081ff, #1cbbb4)"
          back="true"
        />
        <Form onSubmit={this.formSubmit} >
          <View class="block-title">
            <Text class="title bg-gradual-blue light">基本资料</Text>
          </View>
          <View class="cu-form-group margin-top">
            <View class="title">客户姓名</View>
            <Input placeholder="必填" onChange="getName"></Input>
          </View>
          <View class="cu-form-group">
            <View class="title">联系方式</View>
            <Input placeholder="必填" type="number" maxlength="11" onChange="getPhone" onInput="checkPhone"></Input>
          </View>
          <View class="cu-form-group">
            <View class="title">小区地址</View>
            <Input placeholder="必填" onChange="getAddress"></Input>
          </View>
          <View class="block-title">
            <Text class="title bg-gradual-blue light">是否预约</Text>
          </View>

          <View class="radius shadow-warp bg-white margin-top"> 
              <View class="cu-form-group" hidden="">
                  <View class="title">预约日期</View>
                  <Picker mode="date" value="" start="2019-11-01" end="2020-10-31" onChange="DateChange">
                      <View class="picker">
                          
                      </View>
                  </Picker>
              </View>
              <View class="cu-form-group">
                  <View class="title">预约时间</View>
                  <Picker mode="time" start="09:01" end="21:01" bindchange="TimeChange">
                      <View class="picker">
                          
                      </View>
                  </Picker>
              </View>
              <View class="cu-form-group" hidden="{{clientInfo.isAppointment}}">
                  <View class="title">预约主题</View>
                  <Input placeholder="（选填）" bindchange="getAppointmentContent"></Input>
              </View>        
          </View>
          <View class="block-title">
            <Text class="title bg-gradual-blue light">沟通要点</Text>
          </View>

          <View class="radius shadow-warp bg-white margin-top">
              <View class="cu-form-group margin-top">
                  <Textarea maxlength="-1" disabled="{{modalName!=null}}" bindinput="textareaInput" placeholder="此处输入沟通要点（选填）"></Textarea>
              </View>
          </View>  
          <View class="text-center">
              <Button class="cu-btn round bg-gradual-blue shadow lg margin-top-lg margin-bottom-lg" form-type='submit'>资料提交</Button>
          </View>

        </Form>
      </View>
    )
  }
}

export default Register
