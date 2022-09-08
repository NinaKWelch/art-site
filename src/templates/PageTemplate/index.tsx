import React from 'react'
import './style.css';

interface PageTemplateProps {
  pageTitle: string;
  children: React.ReactNode;
}

const PageTemplate = ({ pageTitle, children }: PageTemplateProps) => {
  return (
    <main className='page-template-container'>
      <h2 className='page-template-header'>{pageTitle}</h2>
      {children}
    </main>
  )
}

export default PageTemplate