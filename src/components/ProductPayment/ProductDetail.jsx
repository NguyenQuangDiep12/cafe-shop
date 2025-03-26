import React from "react";
import CartButton from "./CartButton";

const ProductDetail = ({ ProductDetailItem }) => {
    return (
      <div className="col-md-8 my-4">
        <div className="row">
          {/* Hình ảnh sản phẩm */}
          <div className="col-md-6 text-center">
            <img
              src={ProductDetailItem.src} 
              alt="Cà phê Success 1"
              className="img-fluid"
            />
          </div>
  
          {/* Thông tin sản phẩm */}
          <div className="col-md-6">
            <h2 className="fw-bold">{ProductDetailItem.detail}</h2>  
            <p className="text-muted">Mã sản phẩm: {ProductDetailItem.code}</p>  
            <p>{ProductDetailItem.description}</p> 
  
            <h4 className="text-danger fw-bold">
              {ProductDetailItem.sale} đ{" "}
              <span className="text-muted text-decoration-line-through ms-2">
                {ProductDetailItem.price} đ
              </span>
            </h4>
  
            <p className="text-success">Tiết kiệm 15% (50.944 VNĐ)</p>
  
            {/* Nút thêm vào giỏ hàng */}
            <div className="mt-3">
              <CartButton />
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default ProductDetail;
