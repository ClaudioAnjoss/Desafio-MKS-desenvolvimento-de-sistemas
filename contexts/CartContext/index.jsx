import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const items = [
        { id: 1, name: 'Apple Watch', photo: 'https://img.olx.com.br/thumbs256x256/62/627249531305005.jpg', price: 399, description: 'Lorem ipsum dolor sit amet consectetur' },
        { id: 2, name: 'Caixa JBL', photo: 'https://img.olx.com.br/thumbs256x256/07/075223159381798.jpg', price: 200, description: 'Lorem ipsum dolor sit amet consectetur' },
        { id: 3, name: 'Iphone 13', photo: 'https://img.olx.com.br/thumbs256x256/70/706256652419536.jpg', price: 4657, description: 'Lorem ipsum dolor sit amet consectetur' },
        { id: 4, name: 'PlaysStation 5', photo: 'https://img.olx.com.br/thumbs256x256/71/711208772226911.jpg', price: 4200, description: 'Lorem ipsum dolor sit amet consectetur' },
        { id: 5, name: 'Galaxy s20', photo: 'https://img.olx.com.br/thumbs256x256/15/153271528166074.jpg', price: 3450, description: 'Lorem ipsum dolor sit amet consectetur' },
        { id: 6, name: 'Xbox Series S', photo: 'https://img.olx.com.br/thumbs256x256/63/637223411120998.jpg', price: 4200, description: 'Lorem ipsum dolor sit amet consectetur' },
        { id: 7, name: 'Mac Book', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTQekc7oecKj_dfVCYWR0bGoLDox8DAAcyh-KFR_-4UiX_UALCAPsrDark-PaNFLcHFY&usqp=CAU', price: 4200, description: 'Lorem ipsum dolor sit amet consectetur' }
        , { id: 8, name: 'Tv Samsung 4k', photo: 'https://1747565597.rsc.cdn77.org/temp/1643391208_6eb2fc84949deeddfba65901741de43e.jpg', price: 4200, description: 'Lorem ipsum dolor sit amet consectetur' }
    ];
    const [menuToggled, setMenuToggled] = useState(false)
    const [cart, setCart] = useState([])

    function handleAddItemToCart(photo, name, price, id, qtd) {
        const itemObject = { photo, name, price, id };
        setCart([...cart, itemObject])
    }

    function handleRemoveItemFromCart(clickedItemIndex) {
        const filteredCart = cart.filter(
            (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
        );
        setCart(filteredCart)
    }

    function clearCart() {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ items, cart, setCart, handleAddItemToCart, handleRemoveItemFromCart, clearCart, menuToggled, setMenuToggled }}>
            {children}
        </CartContext.Provider>
    )
}