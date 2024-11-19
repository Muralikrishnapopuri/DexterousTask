import React, { useContext, useEffect, useRef, useState } from 'react'
import { modeContext } from '../App';
import {FaRupeeSign} from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import {MdClose} from 'react-icons/md';
import '../App.css'
import axios from 'axios';
//redux
// import {logger} from ("redux-logger");
// import {logger} from ("redux-logger").default;
import { applyMiddleware,createStore } from 'redux';




function Products() {
    const [data,setData]=useState(null);

    const {Mode,setMode}=useContext(modeContext);
    const fileInputRef = useRef(null);
    const [modal,setModal]=useState(0);
    const [Product, setProduct] = useState({
        productImage: null,
        Title: '',
        Des: '',
        Price: '',
        Discount: ''
    });
    


//redux operations
            //initial state
            const initialState = {
                productImage: null,
                Title: '',
                Des: '',
                Price: '',
                Discount: ''
    
            }
    
            //reducer
            const Applications = (state=initialState,action)=>{
                switch(action.type){
                    case "Upload":
                        return CreateProduct;
                    default:
                        return state
                }
            }
    
            //store 
            const store = createStore(Applications);
            store.subscribe(()=>{console.log(store.getState())});



  //create product
   const CreateProduct = async(ProObj)=>{
    const formData = new FormData();

    for(const key in ProObj){
        formData.append(key,ProObj[key]);
    }
    const options = {
        method:'POST',
        body:formData
    };
    try{
        const result = await fetch("https://dexteroustask.onrender.com/products",options);
        const data = await result.json();
        return data;
    }catch(err){
        return err;
    }
   };

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setProduct({...Product,[name]:value});
    };
    const handleFileChange=(e)=>{
        setProduct({...Product,productImage:e.target.files[0]});
    };
    const handleAddProduct = async (e)=>{
        e.preventDefault();
        try{
            const {success,message}=await CreateProduct(Product);
            console.log(success,message);
            if(success){
                console.log(message,'success');
                window.location.reload();
            }else{
                console.log(message,'error');
            }
        }catch(err){
            console.log(err);
            console.log('Failed to create Product');
        }
    }

    //get products
    useEffect(()=>{
        try{
            axios.get("https://dexteroustask.onrender.com/products")
            .then(res=>{
                setData(res.data);
                console.log(res.data);
            })
        }catch(err){
            console.log(err);
        }
    },[]);
  return (
    <div className={Mode==0?"sectionLight":"sectionDark"}>
        <div className="modall" id={modal==0?"modalnone":"modalblock"} >
            
            
            <div className='modelCard'>
                <div>
                <h3 >Add Product</h3>
                <MdClose style={{cursor:"pointer"}}
                onClick={()=>{
                if(modal==0){
                setModal(1);
                }else{
                setModal(0);
                }}}
                />
                </div>
                <form className='formBody' onSubmit={handleAddProduct} >
                    <div className='Img' id="Preview" onClick={() => {fileInputRef.current.click();document.getElementById("Preview").style.background="lightgreen";document.getElementById("Preview").style.color="white"}} >
                    <input  type="file" name="productImage" onChange={handleFileChange} hidden ref={fileInputRef} />
                    <RiImageAddLine/>
                    </div>
                    <div className='Inputs'>
                    <input type="text" placeholder='Title' name='Title' onChange={handleChange}/>
                    <textarea type="text" placeholder='Description' name='Des' onChange={handleChange} />
                    <input type="number" placeholder='Price' name='Price' onChange={handleChange}/>
                    <input type="number" placeholder='Discount' name='Discount' onChange={handleChange}/>
                    <div className='Btn'>
                        <button type='submit'
                        onClick={()=>{
                            store.dispatch((
                                function(){
                                    return{
                                        type:"Upload"
                                    }
                                }()
                            ))
                        }}
                        >Save</button>
                    </div>
                    </div>

                </form>
            </div>
            
        </div>
        <div style={{display:"flex",justifyContent:"center",padding:"1rem"}}>
        <button className={Mode==0?"addBtnLight":"addBtnDark" } onClick={()=>{
            if(modal==0){
                setModal(1);
            }else{
                setModal(0);
            }
        }}
        style={{cursor:"pointer"}}
        >
            <span>Add Product</span> <IoAddSharp/>
        </button>
        </div>

        <div className={Mode==0?"secLight":"secDark"}>
            <div >
                {
                    data!==null?
                        <div className='secinner'>
                            {
                                data.map((product,i)=>{
                                    return(
                                        <div className={Mode==0?"ProCardLight":'ProCardDark'}>
                                            <img src={product.productImage} alt="ProductName" />
                                            <div className='matter'>
                                                <h3>{product.Title}</h3>
                                                <p>{product.Des}</p>
                                                <div className='ProPrice'>
                                                    <h2><FaRupeeSign/>{product.Discount}</h2>
                                                    <strike>{product.Price}</strike>

                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    :
                    <div className={Mode==0?"secLight":"secdark"}>
                        <h2>Fetching data From MongoDB Database...</h2>
                    </div>
                }
            </div>
        </div>

    </div>
  )
}

export default Products
