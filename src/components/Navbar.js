import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ mode, toggleMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    { name: 'Business', path: '/Business' },
    { name: 'Entertainment', path: '/Entertainment' },
    { name: 'General', path: '/General' },
    { name: 'Health', path: '/Health' },
    { name: 'Science', path: '/Science' },
    { name: 'Sports', path: '/Sports' },
    { name: 'Technology', path: '/Technology' },
  ];

  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${mode === 'light' ? 'light' : 'dark'} bg-${mode === 'light' ? 'light' : 'dark'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News Monkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
            </ul>
            <div className="dropdown">
              <button className={`btn dropdown-toggle mx-4 bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </button>
              <ul className={`dropdown-menu bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`}>
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      className={`dropdown-item bg-${mode === 'light' ? 'light' : 'dark'} text-${selectedCategory === category.name ? 'primary' : (mode === 'light' ? 'dark' : 'light')}`}
                      to={category.path}
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggleMode} />
              <label className={`form-check-label ${mode === 'light' ? 'text-dark' : 'text-light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
