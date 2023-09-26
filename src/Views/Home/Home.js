import './Home.css'
import Navbar from'./../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
export default function Home(){
    return(
        <div className='home'>
            <Navbar/>
            <header>
        <h1>Welcome to Our Portfolio</h1>
        <p>Your Source for Creative Web Solutions</p>
      </header>

      <section>
        <h2>What We Do</h2>
        <p>
          We specialize in creating stunning websites and web applications
          tailored to your needs. Our team is dedicated to delivering
          high-quality, responsive, and user-friendly solutions.
        </p>
      </section>

      <section>
        <h2>Our Work</h2>
        <p>
          Take a look at our portfolio to see some of the amazing projects we've
          worked on. We believe our work speaks for itself, showcasing our
          commitment to excellence in web development.
        </p>
      </section>

            <Footer/>
        </div>
    )
}