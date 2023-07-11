import React, { useState } from 'react'
import { useAccordionButton } from 'react-bootstrap';

function Popup() {
  const[open,setOpen]=useState(false);
    const Menus=["Profile","Settings","Logout"];
  return (
    <div className="relative">
      {
        open && (
        <div className="bg-white p-4 w-52 shadow-lg absolute -left-14 top-24">
            <ul>
            {Menus.map((menu) => (
                    <li className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100'   key={menu}>{menu}</li>
                ))}
            </ul>
        </div>
        )
      }
    </div>
  )
}

export default Popup