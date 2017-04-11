// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const initialState = {
   currentValue: 0
}

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export function increment(amount) {
   return {
      type: INCREMENT,
      amount: amount
   }
}
export default function counter (state=initialState, action) {
   switch(action.type) {
      case INCREMENT:
         const newValue = state.currentValue + amount;
         return Object.assign({}, state, {currentValue: newValue})
      case DECREMENT: 
         return {currentValue: state.currentValue - action.amount}
      default:
         return state;
   }
}
