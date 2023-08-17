import './All.css';

const Slider = () => {
    return(
       <body>
               <section className='banner'>
                    <div className="container">
                      <div className="bg-1">
                          <div className="w-100 d-flex">
                            <div className="w-50 b1">
                                <h1>Full Service <br/> AI-Focused <br/><span>SEO Agency</span></h1>
                                <p>The importance of <span style={{color:"white"}}>SEO services</span> for companies seeking <br/>to attract new customers and increase traffic cannot be <br/>overstated.</p>
                                <button className='btn-banner' style={{fontSize:"18px",fontWeight:"600"}}>Get started</button>
                            </div>
                            <div className="w-50 b2"></div>
                          </div>
                      </div>  
                    </div>
               </section>

               <section className='count' style={{textAlign:"center"}}>
                   <div className="container">
                      <div className='d-flex line'>
                      <div className="w-25 c1">
                         <h2>1M+</h2>
                         <span>Happy customers</span>
                       </div>
                       <div className="w-25 c1">
                       <h2>90%</h2>
                         <span>Increase in ROAS</span>
                       </div>
                       <div className="w-25 c1">
                       <h2>80+</h2>
                         <span>Companies trust us</span>
                       </div>
                       <div className="w-25 c1">
                       <h2>4K+</h2>
                         <span>Projects completed</span>
                       </div>
                      </div>
                   </div>
               </section>
       </body>
    )
}
export default Slider;