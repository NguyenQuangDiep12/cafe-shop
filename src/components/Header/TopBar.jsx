import React from "react"


const TopBar = () => {
    return (
      <div className="bg-dark text-white text-small py-2 px-4 d-flex justify-content-between align-items-center">
        <span>Trang thương mại điện tử chính thức của Tập Đoàn Trung Nguyên Legend</span>
        <div>
          <span className="me-3">📞 1900 6016</span>
          <a href="#" className="me-3 text-white">Trở thành đối tác</a>
          <a href="#" className="me-3 text-white">Kiểm tra bảo hành</a>
          <a href="#" className="me-3 text-white">Đăng nhập</a>
          <a href="#" className="text-white">Đăng ký</a>
          <span className="ms-2">🇻🇳</span>
        </div>
      </div>
    )
}

export default TopBar