import React from 'react'
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
import "./Partnership.css";
const Partnership = () => {
  return (
    <div>
    <div style={{ background: 'linear-gradient(to bottom, #177692, #09080D)', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
      
       <div className='form'>
<h2>Lets be friends</h2>
<p>Interested in partnership with us?</p>
<label>Name</label>


<br/>
<input type="text"/>


<button>Send</button>
       </div>
      
       
        <Footer />
      </div>
    </div>
  )
}

export default Partnership;
