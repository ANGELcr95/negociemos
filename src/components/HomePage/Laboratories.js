import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow'
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

const App = () => {
	return (
		<div className="Laboratories">
			<Titulo>Laboratorios</Titulo>
			<Slideshow controles={true} autoplay={true} velocidad="1500">
				<Slide>
					<div>
						<a href="">
							<img src={img1} alt=""/>
						</a>
						<a href="">
							<img src={img2} alt=""/>
						</a>
					</div>
					<div>
						<a href="">
							<img src={img3} alt=""/>
						</a>
						<a href="">
							<img src={img4} alt=""/>
						</a>
					</div>
					<div>
						<a href="">
							<img src={img5} alt=""/>
						</a>
						<a href="">
							<img src={img6} alt=""/>
						</a>
					</div>
					<div>
						<a href="">
							<img src={img7} alt=""/>
						</a>
						<a href="">
							<img src={img8} alt=""/>
						</a>
					</div>
				</Slide>

				<Slide>
					<div>
						<a href="">
							<img src={img9} alt=""/>
						</a>
						<a href="">
							<img src={img10} alt=""/>
						</a>
					</div>
					<div>
						<a href="">
							<img src={img11} alt=""/>
						</a>
						<a href="">
							<img src={img12} alt=""/>
						</a>
					</div>
					<div>
						<a href="">
							<img src={img13} alt=""/>
						</a>
						<a href="">
							<img src={img14} alt=""/>
						</a>
					</div>
					<div>
						<a href="">
							<img src={img15} alt=""/>
						</a>
						<a href="">
							<img src={img16} alt=""/>
						</a>
					</div>
				</Slide>
				<Slide>
					<div>
						<a href="">
							<img src={img17} alt=""/>
						</a>
						<a href="">
							<img src={img18} alt=""/>
						</a>
					</div>
					<div>
						<a href="">
							<img src={img19} alt=""/>
						</a>
						<a href="">
							<img src={img20} alt=""/>
						</a>
					</div>
					<div>
						<a href="">
							<img src={img21} alt=""/>
						</a>
						<a href="">
							<img src={img22} alt=""/>
						</a>
					</div>
					<div>
						<a href="">
						<img src={img13} alt=""/>
						</a>
						<a href="">
						<img src={img14} alt=""/>
						</a>
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