// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const initialState = {
   currentValue: 0,
   futureValues: [],
   previousValues: []
}

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const UNDO = 'counter/UNDO';
const REDO = 'counter/REDO';


export function increment(amount) {
   return {
      type: INCREMENT,
      amount: amount
   }
}

export function decrement(amount) {
   return {
      type: DECREMENT,
      amount
   }
}

export function undo() {
   return {
      type: UNDO
   }
}

export function redo() {
   return {
      type: REDO
   }
}
export default function counter (state=initialState, action) {
   let newValue;
   switch(action.type) {
      case INCREMENT:
         newValue = state.currentValue + action.amount;
         return {
            currentValue: newValue,
            futureValues: [],
            previousValues: [state.currentValue, ...state.previousValues]
         }
      case DECREMENT: 
         newValue = state.currentValue - action.amount;
         return {
            currentValue: newValue,
            futureValues: [],
            previousValues: [state.currentValue, ...state.previousValues]
         }
      case UNDO:
         return {
            currentValue: state.previousValues[0],
            futureValues: [state.currentValue, ...state.futureValues],
            previousValues: state.previousValues.slice(1, state.previousValues.length)
         }
		case REDO:
			return {
				  currentValue: state.futureValues[ 0 ]
				, futureValues: state.futureValues.slice( 1, state.futureValues.length )
				, previousValues: [ state.currentValue, ...state.previousValues ]
			};
      default:
         return state;
   }
}
