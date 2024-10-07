import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  
                  <Link className="nav-link active" to={'/home'}>Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/content'}>Content</Link>
                  {/* <a className="nav-link" href="#">Content</a> */}
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={'/about'}>About</Link>
                {/* <a className="nav-link" href="#">About</a> */}
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pages</a>
                </li>

            </ul>

            </div>
        </div>
        </nav>

    </>
  )
}
