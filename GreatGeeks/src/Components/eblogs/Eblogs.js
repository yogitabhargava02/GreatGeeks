import React from 'react'
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import "./Eblogs.css";
import RightImage from "../assets/images/right.png";
import "bootstrap/dist/css/bootstrap.min.css";
const Eblogs = () => {
  return (
    <div>


      <div style={{ background: 'linear-gradient(to bottom, #177692, #09080D)', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', padding: '10px 0', marginTop: '90px' }}>
     Eblogs
        </h1>
        <div className='searchbar-container'>
  <form className='search-form'>
    <input type="text" name="search" placeholder="Search.." />
    <button type="submit" className='search-button'>
      <i className="fas fa-search"></i> {/* Assuming you're using Font Awesome for icons */}
    </button>
  </form>
</div>




        <div class="flex-container">

<div class="flex-child left">
<div className='center'>
<h1>STAY CURIOUS</h1>
  <p>Discover stories, thinking, and expertise <br/>from writers in any topic</p>
</div>
 
</div>

<div class="flex-child right">
 <img src={RightImage} alt="RightImage" className='rightImage'/>
</div>

</div>





        <Footer />
      </div>
    </div>
  )
}

export default Eblogs;
