import React from 'react'
import { useParams } from 'react-router-dom';
import './style.css';

const PortfolioPageSection = () => {
  let params = useParams();

  return (
    <section className='portfolio-page-section-container'>
      <h4>{params.sectionId}</h4>
    </section>
  )
}

export default PortfolioPageSection