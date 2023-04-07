import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

const showOrder = (props) => {
  let summa = 0
  props.orders.forEach(element => summa += Number.parseFloat(element.price))

  return (
    <div>
      {props.orders.map(elemnt => (
      <Order onDelete={props.onDelete} key = {elemnt.id} item = {elemnt}/>
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)} руб</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div>
      <h2> 
        Корзина пуста
      </h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>KuzovaNET</span>
            <ul className='navigation'>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
              className={`shop-cart-button ${cartOpen && 'active'}`}
              class='shop-cart-button'
            />
            {cartOpen && (
              <div className='shop-cart'>
                {
                  props.orders.length > 0 ? showOrder(props) : showNothing()
                }
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
