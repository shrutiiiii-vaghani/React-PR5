import './All.css';

const Footer = () => {
    return(
       <section className='footer'>
         <div className="container">
            <div className="d-flex f-all">
                <div className="w-33 f1">
                   <h3>Selo</h3>
                   <p>Get your business to the<br/>new heights.</p>
                </div>
                <div className="w-33 f1">
                    <h3>sales@example.com</h3>
                   <p>MON–FRI 9AM–6PM</p>
                </div>
                <div className="w-33 f1">
                    <h3>(234) 567.890.11</h3>
                   <p>WhatsApp or Call</p>
                </div>
            </div>
            <div className="border-bottom border-1 "></div>
            <div className="d-flex">
                <p className='w-50'>Copyright ©2023 Selo. All rights reserved.</p>
                <div className="menu w-50">
                    <ul className='d-flex' style={{justifyContent:"end"}}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
         </div>
       </section>
    )
}
export default Footer;