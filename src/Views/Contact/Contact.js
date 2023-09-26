import './Contact.css';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import {Link} from 'react-router-dom';

export default function Contact(){
    return(
        <>
        <div className='contact'>
        <Navbar/>
            <h1>
                Contact Us
            </h1>
            <div className='sub-div'>
            <section>
        <p>
        Ready to start your project or have questions? Feel free to reach out
        to us. We'd love to hear from you and discuss how we can help bring
        your ideas to life.
        </p>
    </section>
                <h2>Pravin Chavan</h2>
                <span>Email : pravinchavan0656@gmail.com</span><br/>
                <span>Mobile No. : 8999190656</span><br/>
                <Link to ='https://instagram.com/its_me_pravin_01_here?igshid=YTQwZjQ0NmI0OA=='>Instagram</Link><br/>
                <Link to='https://github.com/pravin12111'>Github</Link><br/>
                <Link to='https://www.linkedin.com/in/pravin-chavan-bb2192230'>Linkedin</Link><br/>
                <Link to='https://peerlist.io/pravin_01'>peerlist</Link>
                
            </div>
            <Footer/>
        </div>
        </>
    )
}