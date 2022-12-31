import { createSlice } from '@reduxjs/toolkit';
import Tshirt1 from "../images/Tshirt1.jfif"
import Tshirt2 from "../images/Tshirt2.jpg"
import Tshirt3 from "../images/Tshirt3.jpg"
import Tshirt4 from "../images/Tshirt4.jpg"
import shirt1 from "../images/shirt1.jpg"
import shirt2 from "../images/shirt2.jpg"
import shirt3 from "../images/shirt3.jpg"
import shirt4 from "../images/shirt4.jpg"
import trouser1 from "../images/trouser1.jpg"
import trouser2 from "../images/trouser2.jpg"
import trouser3 from "../images/trouser3.jpg"
import trouser4 from "../images/trouser4.jpg"
import short1 from "../images/short1.jpg"
import short2 from "../images/short2.jpg"
import short3 from "../images/short3.jpg"
import short4 from "../images/short4.jpg"
import jacket1 from "../images/jacket1.jpg"
import jacket2 from "../images/jacket2.jpg"
import jacket3 from "../images/jacket3.jpg"
import jacket4 from "../images/jacket4.jpg"


const initialState = {
    products:
        [
            {
                id: 1,
                src: Tshirt1,
                ait: "T-shirt",
                brand: "T-shirt",
                name: "Meda Australia",
                price: 21,
            },
            {
                id: 2,
                src: Tshirt2,
                ait: "T-shirt",
                brand: "T-shirt",
                name: "Red Wall",
                price: 20,
            },
            {
                id: 3,
                src: Tshirt3,
                ait: "T-shirt",
                brand: "T-shirt",
                name: "Dove Sleeping",
                price: 21,
            },
            {
                id: 4,
                src: Tshirt4,
                ait: "T-shirt",
                brand: "T-shirt",
                name: "Princess Mary",
                price: 23,
            },
            {
                id: 5,
                src: shirt1,
                ait: "Shirt",
                brand: "Shirt",
                name: "Cord",
                price: 32,
            },
            {
                id: 6,
                src: shirt2,
                ait: "Shirt",
                brand: "Shirt",
                name: "Oxford",
                price: 30,
            },
            {
                id: 7,
                src: shirt3,
                ait: "Shirt",
                brand: "Shirt",
                name: "Denim",
                price: 28,
            },
            {
                id: 8,
                src: shirt4,
                ait: "Shirt",
                brand: "Shirt",
                name: "Soft",
                price: 23,
            },
            {
                id: 9,
                src: trouser1,
                ait: "Trouser",
                brand: "Trouser",
                name: "Flat",
                price: 29,
            },
            {
                id: 10,
                src: trouser2,
                ait: "Trouser",
                brand: "Trouser",
                name: "Pleat",
                price: 38,
            },
            {
                id: 11,
                src: trouser3,
                ait: "Trouser",
                brand: "Trouser",
                name: "Chino",
                price: 34,
            },
            {
                id: 12,
                src: trouser4,
                ait: "Trouser",
                brand: "Trouser",
                name: "Comfort",
                price: 23,
            },
            {
                id: 13,
                src: short1,
                ait: "Short",
                brand: "Short",
                name: "Cargo",
                price: 31,
            },
            {
                id: 14,
                src: short2,
                ait: "Short",
                brand: "Short",
                name: "Stretch",
                price: 31,
            },
            {
                id: 15,
                src: short3,
                ait: "Short",
                brand: "Short",
                name: "Weekend",
                price: 18,
            },
            {
                id: 16,
                src: short4,
                ait: "Short",
                brand: "Short",
                name: "Indiania",
                price: 30,
            },
            {
                id: 17,
                src: jacket1,
                ait: "Jacket",
                brand: "Jacket",
                name: "Country",
                price: 74,
            },
            {
                id: 18,
                src: jacket2,
                ait: "Jacket",
                brand: "Jacket",
                name: "Bonded",
                price: 72,
            },
            {
                id: 19,
                src: jacket3,
                ait: "Jacket",
                brand: "Jacket",
                name: "Bakewell",
                price: 69,
            },
            {
                id: 20,
                src: jacket4,
                ait: "Jacket",
                brand: "Jacket",
                name: "Weatherproof",
                price: 65,
            },
    ],

    itemToView: null,

    cart: JSON.parse(localStorage.getItem('cart')) || [],

    searchItem: null,

    checkingOut: null,
};

export const storeSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        openProduct: (state, action) => {
            const { id } = action.payload;
            state.itemToView = state.products.find(item => item.id === id);
        },
        openSearchProduct: (state, action) => {
            const { id } = action.payload;
            state.searchItem = state.products.find(item => item.id === id);
        },
        closeProduct: (state) => {
            state.itemToView = "";
        },
        closeSearchProduct: (state) => {
            state.searchItem = "";
        },
        addProductToCart: (state, action) => {
            const { id, size, color, quantity } = action.payload;
            const product = state.products.find(product => product.id === id);
            const existingItem = state.cart.find(item => item.id === id);
            if (!existingItem) {
                state.cart.push({
                    id: product.id,
                    src: product.src,
                    alt: product.alt,
                    brand: product.brand,
                    name: product.name,
                    price: product.price,
                    size,
                    color,
                    quantity
                });


            }
        },
        deleteProduct: (state, action) => {
            const { id } = action.payload;
            state.cart = state.cart.filter(item => item.id !== id);
        },
        setProducts: (state, action) => {
            const { products } = action.payload;
            state.cart = products
        },
    }
})

export const {
    openProduct,
    closeProduct,
    closeSearchProduct,
    openSearchProduct,
    deleteProduct,
    addProductToCart,
    emptyCart,
    setProducts,
    setSelectQuery,
    clearProduct,
    checkingOut
} = storeSlice.actions;
export default storeSlice.reducer;
