//导入action常量集合
import { ADD, MINUS } from '../actions/counter'

//定义该reducer下的初始态
const INITIAL_STATE = {
  num: 0
}

//根据state和action携带的payload，返回更新后的state
export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}
