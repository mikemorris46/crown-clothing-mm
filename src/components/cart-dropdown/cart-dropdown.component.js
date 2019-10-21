import React from 'react'

import './cart-dropdown.styles.scss'
import CustomButton from 'components/custom-button/custom.button.component'

const CartDropdown = () => {
  return (
    <div class='cart-dropdown'>
      <div className='cart-item' />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown