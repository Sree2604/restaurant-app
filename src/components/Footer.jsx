import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
        <>
      
       <div> 
    <footer className='foot'>
        <br />
    <p id='foot1'>WE MADE IT </p>
    <div className='footdiv'>
          <a href='' className='me-4 text-reset'>
            Google
          </a>
          <a href='' className='me-4 text-reset'>
           Facebook
          </a>
          <a href='' className='me-4 text-reset'>
           Instagram
          </a>
          <a href='' className='me-4 text-reset'>
           Twitter
          </a>
        </div>
    </footer>
    </div>
    </>
    );
  }
  
  export default Footer;