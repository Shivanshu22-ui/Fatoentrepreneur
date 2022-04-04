import React ,{useState}from 'react'
import "./DropDownNav.css"
import { Link } from 'react-router-dom'
function DropDownNav() {
    const MenuItems = [
        {
          title: 'Marketing',
          path: '/marketing',
          cName: 'dropdown-link'
        },
        {
          title: 'Consulting',
          path: '/consulting',
          cName: 'dropdown-link'
        },
        {
          title: 'Design',
          path: '/design',
          cName: 'dropdown-link'
        },
        {
          title: 'Development',
          path: '/development',
          cName: 'dropdown-link'
        }
      ];


      function Dropdown() {
        const [click, setClick] = useState(false);
      
        const handleClick = () => setClick(!click);
      }
  return (
   <div>
   </div>
  );
}

export default DropDownNav;