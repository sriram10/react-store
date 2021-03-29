// Redux
/**
 * 1. Create redux store
 * 2. function to update the store data
 * 3. dispatch a few values to see the changes in store
 * 4. subscribe to the store data to get the updated 
 * values
 */
const redux = require('redux');

const reducer = (state={}, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        ...action.data
      }
    case 'INC':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DEC':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: 0
      }
    default:
      return state
  }
}

const store = redux.createStore(reducer);

console.log('Store Date >>', store.getState())

store.dispatch({ type: "INIT", data: { count: 1 } })

console.log('Store Date >>', store.getState())

store.dispatch({ type: "INC" })
console.log('Store Date >>', store.getState())

store.dispatch({ type: "INC" })
console.log('Store Date >>', store.getState())

store.dispatch({ type: "INC" })
console.log('Store Date >>', store.getState())
store.dispatch({ type: "DEC" })
console.log('Store Date >>', store.getState())

store.subscribe(() => {
  const state = store.getState();
  console.log('Account Comp >>', state)
})
store.subscribe(() => {
  const state = store.getState();
  console.log('Cart Comp >>', state)
})
store.dispatch({ type: "RESET" })
console.log('Store Date >>', store.getState())

