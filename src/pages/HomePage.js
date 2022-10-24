import { Col, Row, } from 'reactstrap';
import decor_bartender1 from "../app/img/decor_bartender1.jpg";
import logo from "../app/img/logo.png";
import food_burger from "../app/img/food_burger.jpg";
import food_pizza_marg1 from "../app/img/food_pizza_marg1.jpg";
import food_gordita from "../app/img/food_gordita.jpg";
import { Animator, ScrollContainer, ScrollPage, Fade,  Sticky, batch,  } from 'react-scroll-motion';
import Popup from '../components/Popup';
import '../components/popup.css'
import { useState } from 'react';
import decor_bar from '../app/img/decor_bar.jpg'
import drink_blue from '../app/img/drink_blue.jpg'
import drink_marg from '../app/img/drink_marg.jpg'
import drink_white from '../app/img/drink_white.jpg'
import food_tacos from '../app/img/food_tacos.jpg'

const Page2 = batch(Fade(),);

const HomePage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <>
    <ScrollContainer>
       <ScrollPage page={0}>
                <Row>
                    <Col>
                    <div className='fill' style={{backgroundImage: `url(${decor_bartender1})` }}>   
                        <Animator animation={Sticky(8,22)}><img className='logo mt-2' src={logo} alt='logo' ></img> </Animator>
                    </div>        
                    </Col>
                </Row>

                    <div className='spacing1'></div>
                    <div>
                        <h3 >WHAT ARE YOU CRAVING?</h3>
                        <button className='button-27' onClick={() => setButtonPopup(true)}>Menu</button>   
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                           
                        </Popup>
                    


                      
                    </div>
                 
       </ScrollPage>
        <ScrollPage page={1}>
            <Animator animation={Page2} >
            <Animator animation={Sticky(8,22)}><img className='logo mt-2' src={logo} alt='logo' ></img> </Animator>
                
                    <div className='page2-div'>
                        <Col className='text-center kitchen'>
                            <h1>From our kitchen</h1>
                            <p>From now on, every time you crave Italian cuisine, or Mexican cuisine look no further than the ones who make the most authentic Italian and Mexican cuisine from scratch! We are a family-owned restaurant that offers a great selection of delicious entrees from Chicken Piccata and Enchiladas Verdes, to some of your favorite Texan dishes! Our unique heritage background allows us to specialize in many of your favorite dishes.</p>
                        </Col>
                        <img className='food' src={food_burger} alt='burger' ></img>
                        <img className='food' src={food_pizza_marg1} alt='pizza' ></img>
                        <img className='food' src={food_gordita} alt='gordita' ></img> 
                        <img className='food' src={food_tacos} alt='tacos' ></img> 
                    </div>
                
            </Animator>
        </ScrollPage>


        <ScrollPage page={2} >
            <Animator animation={Page2} >
            <Animator animation={Sticky(8,22)}><img className='logo mt-2' src={logo} alt='logo' ></img> </Animator>
                
                    <div className='page3-div'>
                        <Col className='text-center kitchen'>
                            <h1>Behind the Bar</h1>
                            <p>We firmly belive that drinks are better when shared with friends and in good conversation. Should you find yourself in need of a converstation starter to kick off your next happy hour or evening, look no further than Amore!</p>
                        </Col>
                        <div className='drinks' style={{backgroundImage: `url(${decor_bar})` }}></div>
                        <img className='drinks2' src={drink_blue} alt='blue' ></img>
                        <img className='drinks1' src={drink_marg} alt='marg' ></img>
                        <img className='drinks1' src={drink_white} alt='white' ></img>
                       
                        
                    </div>
                
            </Animator>
        </ScrollPage>
    </ScrollContainer>


        </>
    )
}

export default HomePage;
