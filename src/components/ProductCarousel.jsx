import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import product1 from '../assets/images/products/5000570.jpg';
import "./Css/ProductCarousel.css"

// Dữ liệu sản phẩm mẫu
const products = [
  {
    id: 1,
    name: "Trung Nguyên Legend Success 1",
    price: "288.682 đ",
    oldPrice: "339.625 đ",
    discount: "-15%",
    image: product1,
  },
  {
    id: 2,
    name: "Combo máy pha cà phê BFC 1 group",
    price: "78.349.091 đ",
    oldPrice: "",
    image: product1
  },
  {
    id: 3,
    name: "Combo máy pha cà phê BFC 2 group",
    price: "94.569.013 đ",
    oldPrice: "114.034.171 đ",
    image: product1
  },
  {
    id: 4,
    name: "Combo máy pha cà phê Oscar II",
    price: "28.080.000 đ",
    oldPrice: "",
    image: product1
  },
  {
    id: 5,
    name: "Combo máy pha cafe Conti 2G",
    price: "87.374.062 đ",
    oldPrice: "94.601.539 đ",
    image: product1
  },
  {
    id: 6,
    name: "Combo máy pha cafe Appia Life 1G",
    price: "69.660.000 đ",
    oldPrice: "",
    image: product1
  },
  {
    id: 7,
    name: "Trung Nguyên Legend Success 1",
    price: "288.682 đ",
    oldPrice: "339.625 đ",
    discount: "-15%",
    image: product1,
  },
];

function ProductCarousel() {
  const swiperRef = useRef(null);

  return (
    <div className="product-carousel position-relative">
      <div>Hello</div>
      {/* Custom Button Prev */}
      <button className="custom-prev btn btn-dark" onClick={() => swiperRef.current.slidePrev()}>&lt;</button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={15} // Khoảng cách giữa các item
        slidesPerView={6} // Hiển thị 6 sản phẩm mỗi lần
        navigation={{ enabled: false }} // Tắt navigation mặc định của Swiper
        pagination={{ clickable: true }}
        breakpoints={{
          1200: { slidesPerView: 6 }, // Desktop lớn
          992: { slidesPerView: 4 }, // Laptop
          768: { slidesPerView: 3 }, // Tablet
          576: { slidesPerView: 2 }, // Mobile nhỏ
          375: { slidesPerView: 1 }, // Điện thoại
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="product-item">
            <div className="product-card border rounded p-3 shadow-sm">
              {product.discount && <span className="badge bg-warning position-absolute top-0 start-0">{product.discount}</span>}
              <img src={product.image} alt={product.name} className="img-fluid w-100" />
              <h5 className="mt-2">{product.name}</h5>
              {product.oldPrice && <p className="text-muted text-decoration-line-through">{product.oldPrice}</p>}
              <p className="text-danger fw-bold">{product.price}</p>
              <button className="btn btn-outline-primary w-100">Mua ngay</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Button Next */}
      <button className="custom-next btn btn-dark" onClick={() => swiperRef.current.swiper.slideNext()}>&gt;</button>
    </div>
  );
}

export default ProductCarousel;
