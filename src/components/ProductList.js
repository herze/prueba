import React from 'react';
import {addToCart} from '../actions/index';
import {connect} from 'react-redux';
const productList = ({products,addToCart})=>{
    return(
        <div>
            <ul>
            {products.map((product,id)=>
                <div key={id}>
                    <li>
                        <label>{product.id}</label>{' '}
                        {product.name}
                        <button onClick={()=>addToCart(product)}>Add</button>
                    </li>
                </div>
            )}
            </ul>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addToCart(product){
            dispatch(addToCart(product))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(productList);