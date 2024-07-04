import React from 'react'
import Container from './Container'
import Flex from '../Component/Flex'
import Images from './Images'
import Logo from "../assets/logo.png"
import List from './List'
import ListItems from './ListItems'
const Navbar = () => {
  return (
   <Container  data-aos="fade up" data-aos-delay="300"  className={"shadow-2xl  mt-10"} >
   
     <Flex className={"Flex gap-x-80  items-center "}>
     <Images src={Logo} className={" "} />
           
              <List className={"flex gap-x-14 font-bold"}>
                      <ListItems listName={"Home"} classLinkName={"text-yellow-100 text-2xl hover:text-black "}/>
                      <ListItems listName={"About"} classLinkName={"text-yellow-100 text-2xl hover:text-black"}/>
                      <ListItems listName={"Contract"}classLinkName={"text-yellow-100 text-2xl hover:text-black"}/>
                      <ListItems listName={"Service"}classLinkName={"text-yellow-100 text-2xl hover:text-black"}/>
                      <ListItems listName={"Careers"}classLinkName={"text-yellow-100 text-2xl hover:text-black"}/>
              </List>   
            
                  <button  data-aos="fade up" data-aos-delay="300"  className=' bg-slate-800 outline-2 w-[200px] h-[60px] text-center rounded-md text-xl font-bold text-[#767676]'>Contract Us</button>
 
     </Flex>
   
   </Container>
  )
}

export default Navbar