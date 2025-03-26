import React, { useState } from "react"

const CartButton = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-3">
      <div className="d-flex align-items-center">
        <span className="me-2">Chọn số lượng:</span>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          -
        </button>
        <span className="px-3">{quantity}</span>
        <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
      </div>

      <button className="btn btn-dark mt-3 w-100">Thêm vào giỏ hàng</button>
    </div>
  );
};

export default CartButton;
