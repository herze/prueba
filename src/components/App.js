import React, { Component } from 'react';
import ProductList from './ProductList';
import CartProduct from './CartProduct';
export default class App extends Component{
    render(){
        return(
            <div className='content'>
                <div>
                    <ProductList />
                </div>
                    <CartProduct />
            </div>
        )
    }
}