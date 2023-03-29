import React from 'react'
import '../../styles/css/loader.css';

 const Loader = () => {
  return (
    <div className="spinner">
    <span>Loading...</span>
    <div className="half-spinner"></div>
  </div>
  )
}

export default Loader;
