import "bootstrap/dist/css/bootstrap.min.css";
// src/components/CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Usa react-icons para el ícono de carrito
import { Badge } from 'react-bootstrap'; // Usa Bootstrap para la notificación

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado de elementos en el carrito

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <Badge pill bg="danger" className="cart-badge">
        {itemCount}
      </Badge>
    </div>
  );
}

export default CartWidget;
