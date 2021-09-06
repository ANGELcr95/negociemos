import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import { Link } from "react-router-dom";
import './Laboratories.css';
import styled from 'styled-components';
import img1 from './img/01.jpg';
import img2 from './img/02.jpg';
import img3 from './img/03.jpg';
import img4 from './img/04.jpg';
import img5 from './img/05.jpg';
import img6 from './img/06.jpg';
import img7 from './img/07.jpg';
import img8 from './img/08.jpg';
import img9 from './img/09.jpg';
import img10 from './img/10.jpg';
import img11 from './img/11.jpg';
import img12 from './img/12.jpg';
import img13 from './img/13.jpg';
import img14 from './img/14.jpg';
import img15 from './img/15.jpg';
import img16 from './img/16.jpg';
import img17 from './img/17.jpg';
import img18 from './img/18.jpg';
import img19 from './img/19.jpg';
import img20 from './img/20.jpg';
import img21 from './img/21.jpg';
import img22 from './img/22.jpg';
import { useDispatch } from 'react-redux';

import { getLaboratorieAction } from '../../redux/laboratorieDucks';
import GF from "../../data/dataGF.json";
import AG from "../../data/dataAG.json";
import ANGL from "../../data/dataANGL.json";
import BCN from "../../data/dataBCN.json";
import BIOQ from "../../data/dataBIOQ.json";
import BUSS from "../../data/dataBUSS.json";
import CLFR from "../../data/dataCLFR.json";
import COLM from "../../data/dataCOLM.json";
import ECAR from "../../data/dataECAR.json";
import EXP from "../../data/dataEXP.json";
import JGB from "../../data/dataJGB.json";
import LBCO from "../../data/dataLBCO.json";
import LG from "../../data/dataLG.json";
import LPRF from "../../data/dataLPRF.json";
import MEMP from "../../data/dataMEMP.json";
import PROC from "../../data/dataPROC.json";
import PROF from "../../data/dataPROF.json";
import PZ from "../../data/dataPZ.json";
import VITA from "../../data/dataVITA.json";


const App = () => {

	const dispatch = useDispatch()


	return (
		<div className="Laboratories">
			<Titulo>Laboratorios</Titulo>
			<Slideshow controles={true} autoplay={true} velocidad="1500">
				<Slide>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(AG))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img1} alt="AMERCAN GENERICS"/>
						</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction(BCN))} to="/laboratorio" style={{textDecoration:"none"}}>							
							<img src={img2} alt="BCNMedical"/>
						</Link>
					</div>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(ANGL))} to="/laboratorio" style={{textDecoration:"none"}}>							
							<img src={img3} alt="ANGLOPHARMA"/>
						</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction([]))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img4} alt="GBT"/>
						</Link>
					</div>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(BUSS))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img5} alt="Bussie"/>
							</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction(COLM))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img6} alt="COLMED"/>
							</Link>
					</div>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(ECAR))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img7} alt="ecar"/>
							</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction(EXP))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img8} alt="Expofarma"/>
							</Link>
					</div>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction([]))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img9} alt="FARMACOOP"/>
						</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction(GF))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img10} alt="Genfar"/>
							</Link>
					</div>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(JGB))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img11} alt="JGB"/>
							</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction(LBCO))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img12} alt="LABINCO"/>
							</Link>
					</div>
				</Slide>

				<Slide>
				<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(LBCO))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img13} alt="Lafrancol"/>
							</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction(MEMP))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img14} alt="MEMPHIS"/>
							</Link>
					</div>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(PZ))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img15} alt="Pfizer"/>
						</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction(PROF))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img16} alt="Profamilia"/>
						</Link>
					</div>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(LPRF))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img17} alt="laproff"/>
						</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction(LPRF))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img18} alt="Tecnoquimicas"/>
						</Link>
					</div>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(VITA))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img19} alt="Vitalis"/>
						</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction(LG))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img20} alt="LG Pharma"/>
						</Link>
					</div>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(BIOQ))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img21} alt="BIQUIFAR"/>
						</Link>
						<Link onClick={()=> dispatch(getLaboratorieAction(PROC))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img22} alt="PROCAPS"/>
						</Link>
					</div>
					<div>
						<Link onClick={()=> dispatch(getLaboratorieAction(BUSS))} to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img5} alt="Bussie"/>
						</Link>
						<Link to="/laboratorio" style={{textDecoration:"none"}}>
							<img src={img9} alt="FARMACOOP"/>
						</Link>
					</div>
				</Slide>
			</Slideshow>
		</div>
	);
}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
  color:black;
`;
 
export default App;