import "../../Styles/HomePageStyle/Information.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Button from '@material-ui/core/Button';
import React from 'react';

const Information = () => {
    return (
        <div className="Information">
            <div className="NetworkInformation">
                <span className="Track">
                <a href={'https://www.google.com/maps'}><LocalShippingIcon style={{ color:"grey"}}/></a>
                Rastrea mi pedido
                </span>
                    <p>PBX: 57 (2) 386 5770</p>
                <span className="References">Siguenos en
                   <a href="https://www.facebook.com"><FacebookIcon color="primary"/></a>
                   <a href={"https://www.instagram.com/?hl=es/"}><InstagramIcon color="secondary"/></a></span>
                
            </div>
            <div className="Loginbtn">
            <Button variant="contained" color="secondary">
                Inciar Sesion
            </Button>
            </div>

            
        </div>
    );
};

export default Information;