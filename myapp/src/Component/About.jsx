import './All.css';

const About = () => {
    return(
      <body>
         <section className='about'>
         <div className="container">
            <div className="d-flex">
                <div className="w-50 ">
                    <h2>We Provide SEO <br/> Solutions <span>that works</span></h2>
                    <img src="Images/dfvdf-927x1024.png" alt="My Image" width={530} height={585}/>
                </div>
                <div className="w-50">
                    <p>Did you know that 68% of website traffic comes from search <br/> engines? The importance of <span style={{color:"white"}}>SEO services</span> for companies seeking to  <br/>attract new customers and increase traffic cannot be overstated.</p>
                    <div className="box d-flex" style={{width:"580", height:"173"}}>
                      <div className='col-2'>
                           <img src="Images/machine-learning.png" alt="My Image" width={44} height={44}/>
                      </div>
                      <div className='col-10'>
                            <h3 style={{color:"white",fontSize:"24px"}}>AI technology</h3>
                            <p style={{fontSize:"16px",color:"#A9A4ABC7"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                      </div>
                    </div>
                    <div className="box d-flex boxh" style={{width:"580", height:"173"}}>
                      <div className='col-2'>
                           <img src="Images/transparency.png" alt="My Image" width={44} height={44}/>
                      </div>
                      <div className='col-10'>
                            <h3 style={{color:"white",fontSize:"24px"}}>Total Transparency</h3>
                            <p style={{fontSize:"16px",color:"#A9A4ABC7"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                      </div>
                    </div>
                    <div className="box d-flex boxh" style={{width:"580", height:"173"}}>
                      <div className='col-2'>
                           <img src="Images/education.png" alt="My Image" width={44} height={44}/>
                      </div>
                      <div className='col-10'>
                            <h3 style={{color:"white",fontSize:"24px"}}>Education-Focused</h3>
                            <p style={{fontSize:"16px",color:"#A9A4ABC7"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                      </div>
                    </div>
                </div>
            </div>
         </div>
       </section>
      </body>
    )
}
export default About;