import './About.css';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';

export default function Contact(){
    return(
        <>
        <div className="about-us">
        <Navbar/>
    <h1>About Us</h1>
    <div className='sub-div'>
    <p>
        Welcome to our portfolio website! We are a team of passionate and
        creative individuals who love building amazing web experiences.
        Our goal is to deliver high-quality websites and applications that
        not only meet your needs but exceed your expectations.
    </p>
    <p>
        We have expertise in various technologies, including React, JavaScript,
        HTML, CSS, and more. Our team is dedicated to staying up-to-date with
        the latest trends in web development to ensure we can provide you
        with cutting-edge solutions.
    </p>
    <p>
        Whether you're looking for a personal website, a business site, or
        an e-commerce platform, we've got you covered. Contact us today to
        discuss your project, and let's turn your ideas into reality!
    </p>
    <p>
        Thank you for considering us for your web development needs. We look
        forward to working with you.
    </p>
    </div>
    <Footer/>
    </div>
    </>
    )
}