import React from "react";
import "../Css/RelatedProduct.css"

const RelatedProducts = ({ products }) => {
  return (
    <div className="col-md-4 mt-4">
      <h4 className="text-uppercase fw-bold border-bottom pb-2">Sản phẩm liên quan</h4>
      
      {/* Bọc danh sách sản phẩm trong div có thanh cuộn */}
      <div className="scrollable-container">
        {products.map((product) => (
          <div key={product.id} className="col-12 mb-3">
            <div className="card border-0 shadow-sm p-2 d-flex flex-row align-items-center position-relative">
              {product.discount && (
                <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                  -{product.discount}%
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
              <div className="ms-3 flex-grow-1">
                <p className="mb-1 fw-semibold">{product.name}</p>
                <div>
                  {product.oldPrice && (
                    <span className="text-decoration-line-through text-muted me-2">
                      {product.oldPrice} đ
                    </span>
                  )}
                  <span className="text-danger fw-bold">{product.newPrice} đ</span>
                </div>
              </div>
              <button className="btn btn-outline-secondary btn-sm">♡</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
