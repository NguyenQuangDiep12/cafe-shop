import { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mt-3">
      {/* Tab Navigation */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Mô tả sản phẩm
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Chi tiết
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Nhận xét của khách hàng
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-3">
        {activeTab === "description" && (
          <div>
            <h5>Đặc tính:</h5>
            <ul>
              <li>Thể chất đậm, mạnh</li>
              <li>Gu truyền thống</li>
            </ul>
            <h5>Thành phần:</h5>
            <p>Cà phê (Arabica 60%, Robusta 40%)</p>
          </div>
        )}

        {activeTab === "details" && (
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Mã sản phẩm</th>
                <td>5000570</td>
              </tr>
              <tr>
                <th>Thương hiệu</th>
                <td>Trung Nguyên Legend</td>
              </tr>
              <tr>
                <th>Trọng lượng</th>
                <td>1 kg</td>
              </tr>
              <tr>
                <th>Hạn sử dụng</th>
                <td>1 năm</td>
              </tr>
              <tr>
                <th>Xuất xứ</th>
                <td>Việt Nam</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "reviews" && (
          <div>
            <button className="btn btn-dark">Viết bình luận mới</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
