import React, { useContext, useEffect, useState } from 'react'
import {CiLight, CiSearch, CiShoppingCart} from 'react-icons/ci';
import men from './SliderOne.json';
import women from './SliderTwo.json';
import kid from './SliderThree.json';
import {MdKeyboardDoubleArrowLeft,MdKeyboardDoubleArrowRight} from 'react-icons/md'
import { modeContext } from '../App';
import "../App.css";
function Header() {
    const {Mode,setMode}=useContext(modeContext);
    const data = [ men , women, kid];

    const [Slider,SetSlider]=useState(0);
    function handleBack(){
        SetSlider(Slider===data.length-1?0:Slider+1);

    }
    function handleFront(){
        SetSlider(Slider===0?data.length-1:Slider-1);
        



    }

    useEffect(()=>{
      const auto = setInterval(() => {
            handleFront();
            
        },2000);

    },[Slider]);


  return (
    <header>
        <nav className={Mode==0?"navLight":'navDark'}>
            <div className='nameDiv'>
                <h1 className={Mode==0?"logoLight":'logoDark'} >Dexterous</h1>
                <CiLight className={Mode==0?"modeLight":"modeDark"} 
                onClick={()=>{
                    if(Mode==0){
                        setMode(1);
                    }else{
                        setMode(0);
                    }
                }}
                />
            </div>
            <div className={Mode==0?"searchLight":"searchDark"}>
                <input  type="text" placeholder='Search' />
                <CiSearch/>
            </div>

        </nav>
       <div>
        {
            data[Slider].map((slider,i)=>{
                return(
                    <div className={Mode==0?"cardLight":"cardDark"}>
                        <MdKeyboardDoubleArrowLeft onClick={handleBack}/>
                        <div>
                            <h3>{slider.Title}</h3>
                            <p>{slider.Des}</p>
                        </div>
                        <div>
                            <h1 className={Mode==0?"nameLight":"nameDark"}>{slider.name}</h1>
                        </div>
                        <MdKeyboardDoubleArrowRight onClick={handleFront}/>
                    </div>
                )
            })
        }
       </div>
    </header>
  )
}

export default Header
