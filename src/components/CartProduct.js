import React from 'react';
import {removeFromCart} from '../actions';
import {connect} from 'react-redux';
const cartProduct = ({cart, removeFromCart})=>{
    return(
        <div>
            {cart.map((product,id)=>
                <div key={id}>
                    {product.id}:{' '}
                    {product.name}
                    <button onClick={()=>removeFromCart(product)}>Delete</button>
                </div>
            )}
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        cart: state.cart
    };
}

const mapDispatchToProps = dispatch=>{
    return {
        removeFromCart(product){
            dispatch(removeFromCart(product))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(cartProduct);