import React from 'react'
import Header from '../components/Header/Header'
import ProductCarousel from '../components/ProductCarousel'
import Slider from '../components/Main/Slider'

function Homepage() {
  return (
    <div className='homepage pb-4'>
      <div className="row">
        {/* Cot menu */}
        <div className="col-md-3">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              Cà phê
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Máy cà phê
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Công cụ dụng cụ cà phê
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Nguyên phụ liệu pha chế
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Ly - Cốc - Tách - Phin
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Lối Sống Tinh Thức
            </a>
          </div>
        </div>

        {/* Cot Slide */}
        <div className="col-md-9">
          <Slider/>
        </div>
      </div>
    </div>
  )
}

export default Homepage