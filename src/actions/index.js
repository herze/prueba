const loadProducts = ()=>{
    let products = [
        {id: 1, name: 'papaya'},
        {id: 2, name: 'manzana'}
    ]

    return {
        type: 'REPLACE_PRODUCTS',
        products
    }
};

const addToCart = product =>{
    return {
        type: 'ADD_PRODUCT',
        product
    }
};


const removeFromCart = product =>{
    return {
        type: 'DELETE_PRODUCT',
        product
    }
};

export { loadProducts,addToCart,removeFromCart};