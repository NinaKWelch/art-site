import React from 'react'
import { useParams } from 'react-router-dom';
import './style.css';

const PortfolioPageCategory = () => {
  let params = useParams();

  return (
    <section className='portfolio-page-category-container'>
      <h4>{params.categoryId}</h4>
    </section>
  )
}

export default PortfolioPageCategory