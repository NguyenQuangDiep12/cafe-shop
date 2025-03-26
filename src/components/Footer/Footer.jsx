import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-black text-light py-4">
      <div className="container">
        <div className="row">
          {/* Cột 1: Logo */}
          <div className="col-md-2 text-center mb-3">
            <a href="#">
              <img src="/path/to/logo.png" alt="Trung Nguyen Legend" className="img-fluid" />
            </a>
          </div>

          {/* Cột 2: Về chúng tôi */}
          <div className="col-md-2">
            <h6 className="text-warning">VỀ CHÚNG TÔI</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Giới thiệu</a></li>
              <li><a href="#" className="text-light">Vị trí cửa hàng</a></li>
              <li><a href="#" className="text-light">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="text-light">Chính sách và điều khoản</a></li>
              <li><a href="#" className="text-light">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-light">Đăng ký đối tác</a></li>
              <li><a href="#" className="text-light">Liên hệ</a></li>
            </ul>
          </div>

          {/* Cột 3: Đối tác của chúng tôi */}
          <div className="col-md-2">
            <h6 className="text-warning">ĐỐI TÁC CỦA CHÚNG TÔI</h6>
            <div className="d-flex flex-column">
              <img src="/path/to/partner1.png" className="img-fluid mb-2" alt="Partner 1" />
              <img src="/path/to/partner2.png" className="img-fluid mb-2" alt="Partner 2" />
            </div>
          </div>

          {/* Cột 4: Đối tác thanh toán */}
          <div className="col-md-2">
            <h6 className="text-warning">ĐỐI TÁC THANH TOÁN</h6>
            <div className="d-flex flex-column">
              <img src="/path/to/payment1.png" className="img-fluid mb-2" alt="Visa" />
              <img src="/path/to/payment2.png" className="img-fluid mb-2" alt="MasterCard" />
            </div>
            <a href="#" className="text-light">Cách thức thanh toán</a>
          </div>

          {/* Cột 5: Đối tác vận chuyển */}
          <div className="col-md-2">
            <h6 className="text-warning">ĐỐI TÁC VẬN CHUYỂN</h6>
            <div className="d-flex flex-column">
              <img src="/path/to/shipping1.png" className="img-fluid mb-2" alt="Viettel Post" />
              <img src="/path/to/shipping2.png" className="img-fluid mb-2" alt="GHN" />
            </div>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Chính sách giao nhận</a></li>
              <li><a href="#" className="text-light">Chính sách bảo hành</a></li>
              <li><a href="#" className="text-light">Chính sách đổi trả</a></li>
            </ul>
          </div>

          {/* Cột 6: Thông tin liên hệ */}
          <div className="col-md-2">
            <p><strong>Văn phòng:</strong> 82-84 Bùi Thị Xuân, Q.1, TP.HCM</p>
            <p><strong>Showroom:</strong> 324-326 Nguyễn Đình Chiểu, Q.3, TP.HCM</p>
            <p><strong>Đơn vị chủ quản:</strong> Công ty Cổ phần Tập Đoàn Trung Nguyên</p>
            <p><strong>Điện thoại:</strong> (84.8) 39251852</p>
            <p><strong>ĐƯỜNG DÂY NÓNG:</strong> 19006016</p>
            <p>© 2019 Trung Nguyen Legend</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;