import './All.css';

const Header = () => {
   return(
   <body>
     <section className='headerbg'>
      <div className="container">
        <div className='d-flex justify-content-center align-center'>
        <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand text-white logo" href="#" style={{fontFamily: 'Lexend'}}>Selo</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 list">
                <li class="nav-item">
                <a class="nav-link"  href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Pages</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                <a class="nav-link"  href="#">About Us</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Our Team</a>
                </li>
                <li class="nav-item">
                <a class="nav-link"  href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                <a class="nav-link"  href="#">Blog</a>
                </li>
            </ul>
           
            <form class="d-flex">
                <button class="wpclass" type="submit">WhatsApp: (234) 567.890.11</button>
            </form>
            </div>
        </nav>
        </div>
      </div>
    </section>
   </body>
   )
}

export default Header;