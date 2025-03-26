import React from "react";

const Breadcrumb = () => {
    // Su dunng ContextAPI de bao bao va chuyen doi du lieu => product , blog, ...
  return (
    <nav className="breadcrumb p-3">
      <a className="breadcrumb-item text-decoration-none" href="/">Trang chủ</a>
      <span className="breadcrumb-item active">Trung Nguyên Legend Success 1</span>
    </nav>
  );
};

export default Breadcrumb;
