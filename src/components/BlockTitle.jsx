import React, {useState, useEffect} from "react"

function BlockTitle() {
    
    const [bannerData, setBannerData] = useState(null);

    useEffect(() => {
        // Giả lập gọi API
        setTimeout(() => {
        setBannerData({
            category: "CÀ PHÊ",
            subCategory: "Cà phê năng lượng - Cà phê đổi đời",
        });
        }, 1000);
    }, []);

  if (!bannerData) {
    return <div className="text-center text-light py-3">Đang tải...</div>;
  }
    
    return(
    <div className="bg-dark text-light py-2">
      <div className="container d-flex align-items-center">
        <span className="fw-bold text-warning fs-5">{bannerData.category}</span>
        <span className="mx-2 text-secondary">/</span>
        <span className="fs-6 text-light">{bannerData.subCategory}</span>
      </div>
    </div>
    )
}

export default BlockTitle