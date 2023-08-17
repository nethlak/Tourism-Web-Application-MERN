import React,{useEffect} from 'react'
import './main.scss'
import img1 from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.jpg'
import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from "react-icons/hi"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:"Sigiriya" ,
    location:"Polonnaruwa",
    grade:"CULTURAL RELAX",
    fees:'$400',
    description:'Perched on a slab of rock that juts dramatically over the forests of central Sri Lanka, Sigiriya is as imposing a sight now as it must have been when it was first built by a fierce king in the fifth century A.D. Meaning “lion’s rock,” Sigiriya (designated a UNESCO World Heritage site in 1982) is accessed by way of passageways cut into the rock face between a monumental pair of lion paws.llagers. Outsiders used knowledge of its past, preserved in Buddhist texts, to search for the ancient site. British historians rediscovered its astonishing buildings and frescoes in the 19th century..'
  },
  {
    id:2,
    imgSrc:img2 ,
    destTitle:"Ambuluwawa" ,
    location:"Gampola",
    grade:"Visiting",
    fees:'$40',
    description:"Ambuluwawa is a rock mountain but it is different trom rock mountains commonly seen in Sri Lanka . It is made of special type of rock known as “Inselberg” and is least subject to erosion caused by natural forces. Experiments on the diversity of vegetation at Ambuluwawa are still in progress."
  },
  {
    id:3,
    imgSrc:img3 ,
    destTitle:"Galle fort" ,
    location:"Galle",
    grade:"Historical",
    fees:"nofees",
    description:"Galle’s earliest historical existence is traced to Ptolemy’s world map of 125–150 AD when it was a busy port, trading with Greece, Arab countries, China and others."
  },
  
]





const Main = () => {
   useEffect(()=>{
    Aos.init({duration:2000})
   },[])



  return (
    <section className='main container section'>
      <div className="sectitle">
        <h3  data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>



      <div className="secContent grid">
       {

        Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
          return(
            <div key={id}  data-aos="fade-up" className="singleDestination">
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle}/>
                </div> 

                  <div className="cardInfo">
                    <h4 className="destTitle">
                      {destTitle}
                    </h4>

                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/> 
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>

                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS<HiOutlineClipboardCheck className="icon"/>
                    </button>

                  </div>

            </div>
          )
        })



       }
      </div>




    </section>
  )
}

export default Main;