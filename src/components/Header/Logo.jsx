import React from "react"
import LogoImg from "../../assets/images/logo-TGCF-224.png"

const Logo = () => {
    return (
      <div className="d-flex align-items-center">
        <img src={LogoImg} alt="Trung Nguyên Legend" className="me-3" height="50" />
        <h1 className="h5 mb-0">THE COFFEE OF THE WORLD</h1>
      </div>
    )
}

export default Logo