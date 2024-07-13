import { useReducer } from "react";
import { CartContext } from "./CartContext";

const defaultCartState = {
	items: [],
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);

		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				quantity: existingCartItem.quantity + action.item.quantity,
			};

			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
		};
	}
	if (action.type === "REMOVE") {
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingItem = state.items[existingCartItemIndex];
		let updatedItems;
		if (existingItem.quantity === 1) {
			updatedItems = state.items.filter((item) => {
				return item.id !== action.id;
			});
		} else {
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity - 1,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}
		return {
			items: updatedItems,
		};
	}

	if (action.type === "CLEAR") {
		return defaultCartState;
	}

	return defaultCartState;
};

const CartProvider = ({ children }) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD", item });
	};
	const removeItemFromHandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id });
	};

	const clearCartHandler = () => {
		dispatchCartAction({ type: "CLEAR" });
	};

	const cartContext = {
		items: cartState.items,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromHandler,
		clearCart:clearCartHandler
	};
	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
