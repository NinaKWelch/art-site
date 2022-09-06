import React from 'react'
import './style.css';

type PageTemplateProps = {
  pageTitle: string;
  children?: React.ReactNode;
}

const PageTemplate = ({ pageTitle, children }: PageTemplateProps) => {
  return (
    <main className='page-container'>
      <h2>{pageTitle}</h2>
      {children}
    </main>
  )
}

export default PageTemplate