import React from "react"

const SearchBar = () => {
    return (
      <div className="input-group w-100">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm tại đây vô vàn sản phẩm cà phê chính hãng từ tập đoàn Trung Nguyên Legend..."
        />
        <button className="btn btn-outline-secondary">🔍</button>
      </div>
    )
}

export default SearchBar
  