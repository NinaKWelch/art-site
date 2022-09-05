import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';
import PageTemplate from '../../templates/PageTemplate'

const sections = [
  {
    name: 'painting',
  },
  {
    name: 'drawing',
  },
  {
    name: 'sculpture',
  },
]

const PortfolioPage = () => {
  return (
    <PageTemplate pageTitle='Portfolio'>
      <nav>
        {sections.map((section, index) => (
          <NavLink
            style={({ isActive }) => {
              return {
                margin: "1rem",
                color: isActive ? "red" : "",
              };
            }}
            to={`/:artistId/portfolio/${section.name}`}
            key={index}
          >
            {section.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </PageTemplate>
  )
}

export default PortfolioPage