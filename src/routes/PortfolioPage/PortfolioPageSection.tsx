import React from 'react'
import { useParams } from 'react-router-dom';
import './style.css';

const PortfolioPageSection = () => {
  let params = useParams();

  return (
    <section className='portfolio-section-container'>
      <h3>{params.sectionId}</h3>
    </section>
  )
}

export default PortfolioPageSection