
// 公共父级组件：Components/BaseComponent.js
 
import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtIcon} from 'taro-ui'
import Theme from '@/utils/theme';
 
import {connect} from '@tarojs/redux'

import BaseModal from '../BaseModal'
import {updateModalVisible} from "../../actions/common";
import {modifyUserInfo} from "../../actions/user";
 
 
@connect(({common}) => {
  return {
    modals: common.modals
  };
}, (dispatch) => ({
  updateModalVisible(modals, done) {
    dispatch(updateModalVisible(modals, done))
  },
  modifyUserInfo(userInfo, done) {
    dispatch(modifyUserInfo(userInfo, done))
  }
}))


class Index extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
 
    };
  }
 
  config = {};
 
  // 此处省略n行无用代码
 
  render() {
    let {modals,updateModalVisible,modifyUserInfo} = this.props;
    if(modals){
      return (
        <View className='baseComponent-container'>
          {/*页面主体代码都在children中*/}
          {this.props.children}
          
          {/*在这里可以添加一下公用的代码，如公共弹框，此处使用的BaseModal是一个自定义弹框组件，不是这次要讲的重点，这里就不贴代码了*/}
          <BaseModal
            title='提示'
            isShow={modals.syncUserInfoModal}
            btnClickHandler={(btn,btnIndex,openData)=>{
              if(btn.id==='ok'){
                // 获取微信用户信息
                let {nickName,gender, avatarUrl} = openData.detail.userInfo;
                // 调用action同步信息到服务端

                modifyUserInfo({
                  gender: gender===1?'GENDER_MAN':'GENDER_WOMAN',
                  nickName,
                  iconUrl: avatarUrl,
                  wxUserInfo: openData.detail.userInfo
                },()=>{
                  Taro.showToast({
                    title: '同步成功',
                    icon: 'success'
                  });
                });
              }
            }}
            onClose={e=>{
              // 调用action关闭弹框
              updateModalVisible({
                syncUserInfoModal: false
              });
            }}
            btns={[
              {
                id: 'cancel',
                text: '容朕想想',
                style: {
                  backgroundColor: Theme.$bgNormal,
                  color: Theme.$colorStrong
                },
                click2Close: true
              },

              {
                id: 'ok',
                text: '一键同步',
                openType:'getUserInfo',
                style: {
                  backgroundColor: Theme.$bgNormal,
                  color: Theme.$colorBrand
                },
                click2Close: true
              },
            ]}
          >
            您尚未完善您的个人信息，是否一键同步微信个人信息？
          </BaseModal>
          
        </View>
      )
    }
 
  }
}