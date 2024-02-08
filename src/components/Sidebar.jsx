import React from 'react'
import { useSelector } from 'react-redux';
const Sidebar = () => {
    const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
    if (!isMenuOpen) {
        return null;
    }
    
  return (

    <>
    <div className='w-48'>
    <div>
    <h1 className='font-bold'>DUMMY HEADER</h1>
    <ul>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
    </ul>
    </div>

<div>
<h1 className='font-bold'>DUMMY HEADER</h1>
<ul>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
</ul>
</div>

<div>
    <h1 className='font-bold'>DUMMY HEADER</h1>
    <ul>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
    </ul>
    </div>

<div>
<h1 className='font-bold'>DUMMY HEADER</h1>
<ul>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
</ul>
</div>

<div>
    <h1 className='font-bold'>DUMMY HEADER</h1>
    <ul>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
        <li>TEMP DATA</li>
    </ul>
    </div>

<div>
<h1 className='font-bold'>DUMMY HEADER</h1>
<ul>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
    <li>TEMP DATA</li>
</ul>
</div>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum temporibus eligendi molestiae amet est impedit. Aut aperiam exercitationem libero explicabo.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum temporibus eligendi molestiae amet est impedit. Aut aperiam exercitationem libero explicabo.</p>
<p>Lorem ipsum dolor sit amet, consectetur adibo.</p>
</div>
</>
  )
}

export default Sidebar