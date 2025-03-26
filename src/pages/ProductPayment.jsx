import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import ProductDetail from "../components/ProductPayment/ProductDetail";
import RelatedProducts from "../components/ProductPayment/RelatedProduct";
import ProductTabs from "../components/ProductPayment/ProductTabs";

const relatedProductsData = [
  {
    id: 1,
    name: "Cà phê Drip - Culi Robusta 250gr",
    image: "image1.jpg",
    oldPrice: "70.957",
    newPrice: "62.442",
    discount: 12,
  },
  {
    id: 2,
    name: "Cà phê Drip - Arabica Robusta 250gr",
    image: "image2.jpg",
    oldPrice: "100.312",
    newPrice: "88.519",
    discount: 10,
  },
  {
    id: 3,
    name: "Cà phê Drip - Arabica Robusta 250gr",
    image: "image2.jpg",
    oldPrice: "100.312",
    newPrice: "88.519",
    discount: 10,
  },
  {
    id: 4,
    name: "Cà phê Drip - Arabica Robusta 250gr",
    image: "image2.jpg",
    oldPrice: "100.312",
    newPrice: "88.519",
    discount: 10,
  },
  {
    id: 5,
    name: "Cà phê Drip - Arabica Robusta 250gr",
    image: "image2.jpg",
    oldPrice: "100.312",
    newPrice: "88.519",
    discount: 10,
  },
  {
    id: 6,
    name: "Cà phê Drip - Arabica Robusta 250gr",
    image: "image2.jpg",
    oldPrice: "100.312",
    newPrice: "88.519",
    discount: 10,
  },
  {
    id: 7,
    name: "Cà phê Drip - Arabica Robusta 250gr",
    image: "image2.jpg",
    oldPrice: "100.312",
    newPrice: "88.519",
    discount: 10,
  },
  {
    id: 8,
    name: "Cà phê Drip - Arabica Robusta 250gr",
    image: "image2.jpg",
    oldPrice: "100.312",
    newPrice: "88.519",
    discount: 10,
  },
];

const ProductDetailItem = {
  id: 1,
  src: "https://cafe.net.vn/media/catalog/product/cache/f650724451860877a45386b8b081a692/5/0/5000570.jpg",
  detail: "Trung Nguyên Legend Success 1",
  code: "5000570",
  description: "Việc chọn lựa nguyên liệu là 01 bí quyết, cùng với nghệ thuật rang tạo nên sản phẩm cà phê Năng Lượng đượm hương thơm, thoáng mùi khói nhẹ, đậm vị cà phê nguyên bản, hậu vị đậm. Trọng lượng tịnh: 1kg",
  sale: "339.625",
  price: "288.682",


}

const ProductPayment = () => {
  return (
    <div className="container">
      <Breadcrumb />
      <div className="row">
        <ProductDetail ProductDetailItem={ProductDetailItem}/>
        <RelatedProducts products={relatedProductsData} />
        <ProductTabs/>
      </div>
    </div>
  );
};

export default ProductPayment;
