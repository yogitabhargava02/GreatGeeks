import React from 'react'
import Navbar from '../../Home/Navbar';
import Footer from '../../Home/Footer';

const GraphicDesign = () => {
  return (
    <div>
      <div style={{ background: 'linear-gradient(to bottom, #177692, #09080D)', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', padding: '10px 0', marginTop: '90px' }}>
        Graphic Design
        </h1>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '20px', marginLeft: '-15px', marginRight: '-15px' }}>
         
        </div>
        <div className='container'>
        <div class="row">
    <div class="col">
   <div>
    <h1>What is tthe category</h1>
    <p>loremNulla excepteur tempor tempor culpa dolore. Id veniam eu elit ea adipisicing in enim. Officia minim ea eiusmod aliqua magna laborum proident anim aute ad nostrud. Nostrud duis aute est eu sit culpa reprehenderit enim mollit tempor veniam. Voluptate deserunt minim do mollit aliquip fugiat irure proident officia minim tempor non.</p>
   </div>
    </div>
    <div class="col">
    <div className="form-container">
    <form>
      <div className="form-group">
      <h1>HELLO</h1>
      </div>
      <div className="form-group">
        {/* Your content here */}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    </div>
        </div>
       
   
  
  </div>
  </div>
        <Footer />
      </div>
    </div>
  )
}

export default GraphicDesign
