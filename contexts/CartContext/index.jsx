import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [menuToggled, setMenuToggled] = useState(false)
    const [product, SetProducts] = useState()
    const [cart, setCart] = useState([])

    function handleAddItemToCart(photo, name, price, id, qtd) {
        const values = qtd * price
        const itemObject = { photo, name, price, id, qtd, values };

        if (cart.length == []) {
            setCart([...cart, itemObject])
        } else {
            const filter = cart.filter((item) => item.id == id)

            filter.length == 0 ? setCart([...cart, itemObject]) : ''}}

    function handleRemoveItemFromCart(clickedItemIndex) {
        const filteredCart = cart.filter(product => product.id != clickedItemIndex.id);
        setCart(filteredCart)}

    function handleAddQtdItem(id) {
        const copyCart = [...cart];
        const item = copyCart.find((product) => product.id == id);

        if (!item) {
            copyCart.push({ id: id, qtd: 1 })
        } else {
            item.qtd = item.qtd + 1
            item.values = item.qtd * item.price
        }
        setCart(copyCart)}

    function handleRemoveQtdItem(id) {
        const copyCart = [...cart];
        const item = copyCart.find((product) => product.id == id);

        if (item.qtd > 1) {
            item.qtd = item.qtd - 1;
            item.values -= item.price
            setCart(copyCart)
        } else {
            const arrayFiltered = copyCart.filter(product => product.id != id);
            setCart(arrayFiltered)}}

    return (
        <CartContext.Provider value={{ product, SetProducts, cart, setCart, handleAddItemToCart, handleRemoveItemFromCart, handleAddQtdItem, handleRemoveQtdItem, menuToggled, setMenuToggled }}>
            {children}
        </CartContext.Provider>
    )
}