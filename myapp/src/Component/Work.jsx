import './All.css';

const Work = () => {
    return(
       <body>
          <section className="about">
               <div className="container">
                   <h2>The Work We've<br/><span>Already Finished</span></h2>
                   <p>The importance of <span style={{color:"white"}}>SEO services </span>for companies seeking to attract new <br/>customers and increase traffic cannot be overstated.</p> 
              </div>
          </section>

          <section className='pb-5'>
            <div className="container">
            <div className="bg-overlay">
            <div className="d-flex">
                        <div className="w-50 work">
                            <img src="Images/9.png" alt="" width={550} height={480}  style={{borderRadius:"40px"}}/>
                            <h4>SEO ANALYSIS</h4>
                            <h3>SEO strategy for IT company</h3>
                        </div>
                        <div className="w-50 work">
                        <img src="Images/10.png" alt="" width={550} height={480}  style={{borderRadius:"40px"}}/>
                            <h4>Technical Audit	</h4>
                            <h3>Partnership SEO consulting</h3>
                        </div>
                  </div>
                  <div className="d-flex mt-5">
                        <div className="w-50 work">
                        <img src="Images/11.png" alt="" width={550} height={480}  style={{borderRadius:"40px"}}/>
                            <h4>Technical Audit	</h4>
                            <h3>SEO plan for a financial agency</h3>
                        </div>
                        <div className="w-50 work">
                            <img src="Images/12.png" alt="" width={550} height={480}  style={{borderRadius:"40px"}}/>
                            <h4>KEYWORD RESEARCH</h4>
                            <h3>Real estate SEO campaign</h3>
                        </div>
                  </div>
              </div>
            </div>
          </section>
         
       </body>
    )
}
export default Work;