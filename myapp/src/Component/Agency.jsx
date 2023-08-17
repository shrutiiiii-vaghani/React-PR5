import './All.css';

const Agency = () => {
    return(
     <body>
        <section className='py-5'>
           <div className="container">
              
                  <div className='d-flex'>
                  <div className="w-50 b1 about">
                      <h2>Award-winning and  <br/> <span>Trusted SEO Agency</span></h2>
                                <p>Did you know that 68% of website traffic comes from search <br/>engines? The importance of <span style={{color:"white"}}>SEO services</span> for companies <br/>seeking to attract new customers and increase traffic cannot<br/> be overstated.</p>
                              <div className='d-flex'>
                              <div className="w-33">
                                <img src="Images/7.png" alt=""  width={207} height={55}/>
                              
                                </div>
                                <div className="w-50">
                                <span style={{fontSize:"16px",color:"white",marginLeft:"10px"}}>
                  Trusted by 1M+ people around the <br/> <span style={{marginLeft:"10px"}}>globe</span></span>
                                </div>
                              </div>
                    </div>
                    <div className="bgg-overlay">
                    <div className="w-50">
                    <img src="Images/8.png" alt="My Image" width={470} height={514}/>
                    </div>
                  </div>
               </div>
           </div>
        </section>
      </body>
    )
}
export default Agency;