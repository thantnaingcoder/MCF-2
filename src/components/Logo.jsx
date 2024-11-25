import React from 'react'
import logo from "../assets/pathwayLogo.png"

const Logo = ({className}) => {
  return <img src={logo} className={`${className}`} alt="logo" />
}

export default Logo