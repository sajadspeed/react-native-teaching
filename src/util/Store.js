
import React, { createContext, useReducer } from 'react'

const globalStates = {
	cartCount: 0,
}

export const Context = createContext(globalStates);

export const Store = ({ children }) => {
	
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'incrementCartCount':
			return { ...state, cartCount: state.cartCount + 1 }
			
			case 'decrementCartCount':
			return { ...state, cartCount: state.cartCount - 1 }
			
			default:
			return state
		}
	}, globalStates);
	
	return (
	<Context.Provider value={[state, dispatch]}>
		{children}
	</Context.Provider>
	)
}