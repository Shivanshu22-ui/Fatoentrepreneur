import React from 'react'
import "./DropDownNav.css"
import { Link } from 'react-router-dom'

function DropDownNav() {
  return (
    <div><ul class="nav nav-tabs">
    <li class="nav-item">
      <Link class="nav-link active" aria-current="page" to="#">Active</Link >
    </li>
    <li class="nav-item dropdown">
      <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown"  role="button" aria-expanded="false">Dropdown</Link >
      <ul class="dropdown-menu">
        <li><Link class="dropdown-item" to="#">Action</Link ></li>
        <li><Link class="dropdown-item" to="#">Another action</Link ></li>
        <li><Link class="dropdown-item" to="#">Something else here</Link ></li>
        
        <li><Link class="dropdown-item" to="#">Separated link</Link ></li>
      </ul>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="#">Link</Link >
    </li>
    <li class="nav-item">
      <Link class="nav-link disabled">Disabled</Link >
    </li>
  </ul></div>
  )
}

export default DropDownNav