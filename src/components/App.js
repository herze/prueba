import React, { Component } from 'react';
import ProductList from './ProductList';
export default class App extends Component{
    render(){
        return(
            <div className='content'>
                <div>
                    <ProductList />
                </div>
                <div>Cart</div>
            </div>
        )
    }
}