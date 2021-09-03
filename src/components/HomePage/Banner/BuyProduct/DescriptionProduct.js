import React, { useState } from 'react';
import "../../../../Styles/HomePageStyle/Banner/BuyProduct/DescriptionProduct.css"
// Styles/HomePageStyle/Banner/BuyProduct/DescriptionProduct.css"
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TextField from '@material-ui/core/TextField';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getProductBuyAction } from '../../../../redux/itemsCarDucks';


const DescriptionProduct = () => {


    const [addCar, setAddCar] = useState(false)

    const dispatch = useDispatch()

    

    const counItem = useSelector(store=> store.countBuyProduct)
    const item = useSelector(store=> store.buyProduct.array)
    console.log(item)


    const itemLocal = JSON.parse(window.localStorage.getItem("item"))

    if(counItem.length != 0){
        window.localStorage.setItem("itemsBuy",JSON.stringify(counItem))
    }

    if(item.length != 0 ){
        window.localStorage.setItem("item", JSON.stringify(item))
    }

    const changeColor = (event) => {
        event.currentTarget.style.backgroundColor == "gray"? event.currentTarget.style.backgroundColor = "red":event.currentTarget.style.backgroundColor = "gray"
    }

    const checkNumber = (event) => {
        if(event.target.value < 0 ){
            event.target.value = 0
        }
        if(event.target.value > 0) {
            setAddCar(true)
        } else {
            setAddCar(false)
        }
    }

    function formatNumber(number) {
        return new Intl.NumberFormat("ES-MX",{
            style: "currency",
            currency: "COP"
        }).format(number)
    }

    return (
        <div className="DescriptionProduct">
             <div className='Description'>
                <h3>Nuestros Productos</h3>
                <p>Incio - Nuestros productos</p>
            </div>
            <div className="InfoBuyProduct">
                <div className="ImgBuyProduct">
                    {item.ID_CODBAR? <img src={`img/${item.ID_CODBAR}.jpg`} alt="img"></img>:<img src={`404.png`} alt="404"></img>}
                </div>
                <div className="PicreAndDescription">
                    <p>{item.length != 0? item.CMLINEAS_DESCRIPCION: itemLocal.CMLINEAS_DESCRIPCION}</p>
                    <h3>{item.length != 0? item.DESCRIPCION: itemLocal.DESCRIPCION}</h3>
                    <div className="Prices">
                        <div className="NoTachado">
                        <h3 >{formatNumber(item.length != 0?item.ULTIMO_COSTO_ED: itemLocal.ULTIMO_COSTO_ED)}</h3>
                            <p>Ahora</p>
                        </div>
                        {item.length != 0 && item.ULTIMO_COSTO_ED < item.PRECIO_MIN_1? 
                         <h5 className="Tachado">{formatNumber(item.length != 0?item.PRECIO_MIN_1:itemLocal.PRECIO_MIN_1)}</h5>:
                         null
                        }
                        {item.length == 0 && itemLocal.ULTIMO_COSTO_ED < itemLocal.PRECIO_MIN_1? 
                         <h5 className="Tachado">{formatNumber(itemLocal.length != 0?itemLocal.PRECIO_MIN_1:itemLocal.PRECIO_MIN_1)}</h5>:
                         null
                        }
                    </div>
                    <p>
                    {item.DESC_ITEM_PADRE}Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los .
                    </p>
                    <div className="Amount">
                        <label >Cantidad <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            onChange={(event)=>{checkNumber(event)}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            />
                        </label>
                    </div>
                    <div className="AddToCar">
                        <Button 
                        disabled={!addCar}
                        onClick={()=>{
                            dispatch(getProductBuyAction(item.length != 0? item.DESCRIPCION:itemLocal.DESCRIPCION))
                        }}
                        type="number" className="Buy" variant="contained" size="medium" color="primary" startIcon={<ShoppingCartIcon />}>Añadir al carrito</Button>
                        <Button
                        className="Like"style={{backgroundColor: 'gray'}} onClick={(event)=>{changeColor(event)}}
                            variant="contained"
                            color="default"
                            startIcon={<FavoriteBorderIcon />}
                            >
                        </Button>
                    </div>
                    <div className="RedInfo"> 
                        <p> Ref:        {item.length != 0?item.ID_REFERENCIA:itemLocal.ID_REFERENCIA}</p>
                        <p> Categoria:  Antiesaminico   </p>
                        <p> Etiqietas:  Medivameneto Pastilla</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionProduct;