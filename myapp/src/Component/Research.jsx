import './All.css';

const Research = () => {
    return(
      <body>
        <section>
           <div className="container">
            <div className='d-flex'>
               <div className="w-50 b1 about">
                  <h2>SEO Strategy Based on  <br/> <span>Scientific Research</span></h2>
                            <p>Did you know that 68% of website traffic comes from search <br/>engines? The importance of <span style={{color:"white"}}>SEO services</span> for companies <br/>seeking to attract new customers and increase traffic cannot<br/> be overstated.</p>
                            <button className='btn-banner' style={{fontSize:"18px",fontWeight:"600"}}>Get started</button>
                </div>
                <div className="bg">
                  <div className="w-50">
                    <img src="Images/1.png" alt="My Image" width={580} height={634}/>
                  </div>
                </div>
               </div>
            </div>
        </section>
      </body>
    )
}

export default Research;