import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGift, faStar, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className='menu'>
      <div className="row align-items-center d-flex flex-wrap flex-md-nowrap">
        {/* Phần danh mục */}
        <div className="col-md-6 d-flex align-items-center mb-2 mb-md-0">
          <button className='btn btn-dark rounded-0'>
            <FontAwesomeIcon icon={faBars} />
            <span className="ms-2">Danh mục sản phẩm</span>
          </button>
        </div>
        
        {/* Phần menu con */}
        <div className="col-md-6">
          <div className="row d-flex flex-column flex-md-row">
            <div className="col-12 col-md-4 mb-2 mb-md-0">
              <Link to="/"  className='text-decoration-none text-dark'>
                <FontAwesomeIcon icon={faGift}/> <span>Sản phẩm khuyến mãi</span>
              </Link>
            </div>
            <div className="col-12 col-md-4 mb-2 mb-md-0">
              <Link to="/"  className='text-decoration-none text-dark'>
                <FontAwesomeIcon icon={faStar} /> <span>Bán chạy nhất</span>
              </Link>
            </div>
            <div className="col-12 col-md-4">
              <Link to="/"  className='text-decoration-none text-dark'>
                <FontAwesomeIcon icon={faMugHot} /> <span>Blog cafe</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
