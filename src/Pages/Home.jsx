import React, { useEffect } from 'react'
import Container from '../Layout/Container'
import Flex from '../Component/Flex'
import Banner from "../assets/banner.png"

import Navbar from '../Layout/Navbar'
import Heading from './Heading'
import Card from '../Component/Card'
import Logo2 from "../assets/logo4.png"
import Logo3 from "../assets/logo3.png"
import Logo4 from "../assets/logo2.png"
import Logo5 from "../assets/logo5.png"
import Logo6 from "../assets/logo6.png"
import Logo7 from "../assets/logo7.png"
import Banner2 from "../assets/banner2 (1).png"
import Banner3 from "../assets/banner2 (2).jpg"
import Banner4 from "../assets/banner2 (3).png"
import Banner5 from "../assets/banner2 (4).png"
import Banner6 from "../assets/banner2 (5).png"
import Banner7 from "../assets/banner2 (6).png"
import BannerImg from '../Component/BannerImg'
import Logo8 from "../assets/logo1 (2).png"
import SideImg from "../assets/logo1 (1).jpg"
import LogoCard from '../Component/LogoCard'
import Revew from '../Component/Revew'
import Vector from "../assets/Vector.svg"
import Star from "../assets/star.png"
import Pic from "../assets/Ellipse 31.png"
import Pic1 from "../assets/Ellipse 33.png"
import Logo9 from "../assets/logo8.png"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List from '../Layout/List'
import ListItems from '../Layout/ListItems'
import CountUp from 'react-countup';
import  AOS  from "aos";
import "aos/dist/aos.css"
   
function Arrow(props) {
  const { className, style, onClick } = props;
  
                  useEffect(()=>{
                      AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
                  },[]);


  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue", padding :"6px", width:"30px", height:"30px" }}
      onClick={onClick}
    />
  );
}
const Home = () => {
        const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
   arrow :true,
     nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    speed :500
  };    
     
  return (
    <>
    
    <section  className='mt-0 w-full h-screen bg-cover mb-20 mix-blend-overlay ' style={{backgroundImage: `url(${Banner}) `}}>
    <Container>
    <Flex>
          <Navbar/>      
    </Flex>
              <div  >
               <div data-aos="fade-down" data-aos-delay="300"  className=' w-[950px] h-[180px] pt-20 m-auto text-center translate-y-[130%]  text-cyan-300 text-[75px] font-bold '>We Help brands with high quality services</div>  
    <div   className='w-[620px] h-[70px]  text-2xl m-auto text-center  translate-y-[280px]    text-black '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</div>
    <button  className='w-[200px] h-[60px] m-auto bg-slate-950 text-[#767676] font-bold text-xl text-center translate-x-[730px] translate-y-[350px] rounded-lg'> Get Start </button>
              </div> 
    </Container>
    </section>

    <section className='mb-10 '>
                <Container >
                 <div data-aos="fade-down" data-aos-delay="500" className='mt-20 bg-[#E0FFF9] w-[1450px] h-[300px] mb-28 ml-20 rounded-xl'>
                
    <div className='flex gap-x-40 justify-center '>
             <div className='pt-[80px]'>
             <h2 className='text-[#6A4DF4] text-xl pb-4 '>Ou<span className='pl-2'>r</span> Success</h2>
             <p className='w-[387px] h-[80px] text-[35px] font-semibold text-red-700 leading-none '>West cost Brand makers-Global Edge</p>
             </div>
              
         
           <Heading heading1={"+"} heading2={"Customer Satisfied"} className={"pt-[90px]"} >
     
            <CountUp  
            start={0} 
            end={200} 
             duration={2} 
             className='text-[50px] font-bold text-red-700 '>
             </CountUp> 
            
            
             </Heading>
                   
             <Heading heading1={"+"} heading2={"200+ Avg rating"} className={"pt-[90px]"}> 
           
            <CountUp start={0} 
            end={50} 
             duration={4} 
             className='text-[50px] font-bold text-red-700 '>
             </CountUp> 
             
             </Heading>
              <Heading heading1={"+"} heading2={"Project Delivered"} className={"pt-[90px]"} >
           
            <CountUp start={0} 
            end={300} 
             duration={2} 
             className='text-[50px] font-bold text-red-700 '>
             </CountUp> 
             </Heading>
            
    </div>
     
  </div>

                                 <div className='text-center'>
                                 <h1 data-aos="fade-down" data-aos-delay="500" className='text-[45px]  font-bold text-red-900'>Our Provided Services</h1>
                                 <p data-aos="fade-up" data-aos-delay="500" className='w-[602px] h-[52px] m-auto text-[18px] text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form</p>
                                 </div>

                                 <div data-aos="fade-down" data-aos-delay="500" className='mt-28 flex gap-20 justify-center'>
                                 <Card  src={Logo2} title={"Web Design"} details={"There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."}/>
                                   <Card src={Logo3} title={"UI/UX Design"} details={"There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."}/>
                                     <Card  src={Logo4} title={"Web Development"} details={"There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."}/>
          
                                 </div>
                                 <div data-aos="fade-up" data-aos-delay="500" className='mt-10 flex gap-20 justify-center'>
                                 <Card src={Logo5} title={"Motion Graphics"} details={"There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."}/>
                                   <Card src={Logo6} title={"3D Animation"} details={"There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."}/>
                                     <Card src={Logo7} title={"Digital Marketing"} details={"There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."}/>
          
                                 </div>

                </Container>
    
    </section>
    <section>
    <Container className={"mt-20 mb-20 bg-[#F3F3F3] h-[1470px] max-w-full"}>
    
    <div className=' m-auto text-center pt-32'>
    <h1 data-aos="fade-up" data-aos-delay="500" className='text-[56px] font-bold text-slate-800'>Our Recent Work</h1>
    <p className='font-normal text-[#767676] w-[620px] h-[52px] m-auto text-xl pt-5'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
    </div>
                          <div data-aos="fade-down" data-aos-delay="500" className='flex mt-20 gap-x-10 justify-center'>
                         <BannerImg src={Banner2} title={"Task Management App"}  details={"This is a task management application that can help you be more "}/>
                         <BannerImg src={Banner3} title={"Saas Landing Page Design"}  details={"This is a task management application that can help you be more "}/>
                         <BannerImg src={Banner4} title={"App Design"}  details={"This is a task management application that can help you be more "}/>
                          </div> 
                            <div data-aos="fade-up" data-aos-delay="500" className='flex mt-20 gap-x-10 justify-center'>
                         <BannerImg src={Banner5} title={"Landing Page Design"}  details={"This is a task management application that can help you be more "}/>
                         <BannerImg src={Banner6} title={"Dashboard Design"}  details={"This is a task management application that can help you be more "}/>
                         <BannerImg src={Banner7} title={"Web App Design"}  details={"This is a task management application that can help you be more "}/>
                          </div>       
                                      
    </Container>
    </section>


    <section className='mb-20 '>
    <Container>
     <div className='m-auto'>
     <h1 data-aos="fade-down" data-aos-delay="500" className='text-center font-bold text-[50px] text-[black]'>Why You Should Choose Agenc</h1>
     <p data-aos="fade-up" data-aos-delay="500" className='w-[850px] h-[52px] m-auto text-lg text-[#767676] text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
     </div>

    <div className=' flex gap-x-20 justify-center items-center'>
               <div>
                <div data-aos="fade-left" data-aos-delay="500" className='flex gap-x-24 justify-center'>
     <LogoCard src={Logo8} title={"Innovative Ideas"} details={"Because each project is different, we adapt to your business model."}/>
     <LogoCard src={Logo8} title={"Innovative Ideas"} details={"Because each project is different, we adapt to your business model."}/>
     
     </div>
      <div data-aos="fade-left" data-aos-delay="500" className='flex gap-x-24 justify-center gap-y-0'>
     <LogoCard src={Logo8} title={"Innovative Ideas"} details={"Because each project is different, we adapt to your business model."}/>
     <LogoCard src={Logo8} title={"Innovative Ideas"} details={"Because each project is different, we adapt to your business model."} />
     
     </div>
               </div>

               <div data-aos="fade-right" data-aos-delay="300">
               <picture>
               <img data-aos="fade-down" data-aos-delay="500" src={SideImg} alt="" className='h-[500px] mt-14' />
               </picture>
               </div>
    </div>


                     <div data-aos="fade-down" data-aos-delay="300" className='m-auto mt-20 text-center'>
                     <h1 className='text-[45px] text-black font-bold '>Some Client Reviews</h1>
                     <p className='w-[620px] h-[52px] m-auto text-center text-[#767676]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                     </div>
                             <Slider  {...settings} className='pl-24 mb-20'>
                    
                             <Revew  src={Vector} text={"I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."} src1={Star} src2={Pic} heading={"Eric Drake"} name={"Digital Marketor"}/>
                              <Revew src={Vector} text={"I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."} src1={Star} src2={Pic} heading={"Eric Drake"} name={"Digital Marketor"}/>
                               <Revew src={Vector} text={"I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."} src1={Star} src2={Pic1} heading={"Rosa Farmer"} name={"UI Designer"}/>
                     
                     </Slider>
    </Container>
    </section>

    <section className='bg-[#F3F3F3] mt-20 '>
    <Container>
                          <div  className='flex gap-x-40'>
                                             <div data-aos="fade-left" data-aos-delay="300" className='pt-60 ml-40'>
                   <h1  className='text-[45px] text-slate-700 font-bold w-[600px] 0 pb-9'>We Do design, Code & Development</h1>
                        <p className='text-[#767676]  w-[656px]  pb-4  '>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                               <p className='text-[#767676]  w-[676px] pb-4  ' >There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                          </div>

                          <div data-aos="fade-right" data-aos-delay="300" className=' rounded-lg bg-[#FFFFFF] mb-20 mt-20 pt-10 border-black border-2 w-[556px] h-[622px] hover:bg-red-900 hover:drop-shadow-3xl'>
                          <h1  className='pt-10 text-center text-[30px] font-bold'>Get a free quote now</h1>
                                     <form action="" className='pt-10 pl-10 m-auto '>
                                     <label className='block text-2xl font-bold  ' htmlFor="name">Name :</label>
                                     <input className='text-2xl text-[#20160a] pl-5 outline-none rounded-lg w-[450px] h-[64px] mt-3 mr-2' type="text" name='name' placeholder='Enter Your Name' />
                                      <label className='block  text-2xl font-bold ' htmlFor="email">Email :</label>
                                     <input className='text-2xl text-[#E8E8E8] pl-5 outline-none rounded-lg w-[450px] h-[64px] mt-3 mr-2' type="email" name='email' placeholder='Enter Your Email' />
                                      <label className='block  text-2xl font-bold' htmlFor="phone">Phone :</label>
                                     <input className='text-2xl text-[#E8E8E8] pl-5 outline-none rounded-lg w-[450px] h-[64px] mt-3 mr-2' type="tel" name='phone' placeholder='Enter Your Phone Number' /> <br></br>
                                     <button className='w-[450px] h-[64px] mt-10 rounded-lg text-center text-2xl font-bold bg-slate-500 text-white'>Get Pricing Now</button>
                                     </form>
                          </div>
                          </div>
    </Container>
    
    </section>
     <hr className='border-4 border-red-800' />
    <footer className='bg-slate-800 w-full h-[300px]'>
    <Container>
                   <div  data-aos="fade-down" data-aos-delay="500"  className='flex justify-around pt-10 pl-10'>
                    <div className='pt-6 pl-10'>
                      <img src={Logo9} alt=" No picture" />
                      <p className='text-[#767676] text-lg pt-3 w-[356px] h-[106px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>

                    </div>
                    <List className={"font-bold pt-6"} >
                      <ListItems listName={"About"} classLinkName={"pb-5 text-2xl "} />
                      <ListItems listName={"About Us"}  classLinkName={"text-[#767676] font-bold text-xl"}/>
                      <ListItems listName={"Features"}classLinkName={"text-[#767676] font-bold text-xl"}/>
                      
                      <ListItems listName={"News"}classLinkName={"text-[#767676] font-bold text-xl"}/>
                      <ListItems listName={"Carrer"}classLinkName={"text-[#767676] font-bold text-xl"}/>
                    </List>
                   
                   <List className={"font-bold pt-6"} >
                      <ListItems listName={"Company"} classLinkName={"pb-5 text-2xl "} />
                      <ListItems listName={"Our Team"}  classLinkName={"text-[#767676] font-bold text-xl"}/>
                      <ListItems listName={"CPartner With Us"}classLinkName={"text-[#767676] font-bold text-xl"}/>
                      <ListItems listName={"FAQ"} classLinkName={"text-[#767676] font-bold text-xl"}/>
                      
                       
                    </List>
                    <List className={"font-bold pt-6"} >
                      <ListItems listName={"Support"} classLinkName={"pb-5 text-2xl "} />
                      <ListItems listName={"About"}  classLinkName={"text-[#767676] font-bold text-xl"}/>
                      <ListItems listName={"CSupport Center"}classLinkName={"text-[#767676] font-bold text-xl"}/>
                      <ListItems listName={"Service"} classLinkName={"text-[#767676] font-bold text-xl"}/>
                      <ListItems listName={"Feedback"}classLinkName={"text-[#767676] font-bold text-xl"}/>
                       <ListItems listName={"Contact Us"}classLinkName={"text-[#767676] font-bold text-xl"}/>
                    </List>
                    <List className={"font-bold pt-6"} >
                      <ListItems listName={"Get in touch"} classLinkName={"pb-5 text-2xl "} />
                      <ListItems listName={"info@gmail.com"}  classLinkName={"text-[#767676] font-bold text-xl"}/>
                      <ListItems listName={"+88 0121 0212"}classLinkName={"text-[#767676] font-bold text-xl"}/>
                     
                    </List>
                   
                   
                   </div>
    </Container>
    </footer>
    </>

  )
}

export default Home;