import './All.css';

const Faq = () => {
    return(
        <body>
            <section className="about">
                <div className="container">
                <div className="bg-2">
                <h2 style={{textAlign:"center"}}>The Work We've<br/><span>Already Finished</span></h2>
                   <p style={{textAlign:"center"}}>The importance of <span style={{color:"white"}}>SEO services </span>for companies seeking to attract new <br/>customers and increase traffic cannot be overstated.</p>
                   <div className="d-flex">
                            <div className="w-50">
                                <div className="box2">
                                    <div className="star" style={{marginBottom:"22px"}}>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </div>
                                    <h3 style={{marginBottom:"22px"}}>“High standard and excellent quality of work.<br/> They helped my business grow in digital.”</h3>
                                    <div className="d-flex">
                                            <div className="w-70">
                                                <h5>Peter Tailor</h5>
                                                <span>Entrepreneur</span>
                                            </div>
                                            <div className="w-30 faq-img">
                                                <img src="Images/13.png" alt="" />
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-50">
                            <div className="box2">
                                    <div className="star" style={{marginBottom:"22px"}}>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </div>
                                    <h3 style={{marginBottom:"22px"}}>“High standard and excellent quality of work.<br/> They helped my business grow in digital.”</h3>
                                    <div className="d-flex">
                                            <div className="w-70">
                                                <h5>Nina Kent</h5>
                                                <span>HR manager</span>
                                            </div>
                                            <div className="w-30 faq-img">
                                                <img src="Images/14.png" alt="" />
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="start-seo about" style={{marginTop:"30px", textAlign:"center"}}>
                        <h2 style={{textAlign:"center"}}>Ready to Start Your Next <br/><span>SEO Campaign</span>?</h2>
                   <p style={{textAlign:"center"}}>Contact us now and save 25%!</p>
                   <button className='btn-banner' style={{fontSize:"18px",fontWeight:"600",margin:"0 auto"}} >Get started</button>
                        </div>
                    </div>
                </div>
            </section>


                   
                       
                  
                
            
        </body>
    )
}
export default Faq;