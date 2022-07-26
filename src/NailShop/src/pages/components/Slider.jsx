import { ArrowLeftOutlined,ArrowRightOutlined} from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../../data"
import { mobile } from "../../responsive"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

// const Container = styled.div`
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     position: relative;
//     overflow: hidden;
//     ${mobile({display: "none"})}
// `
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction ==="left" && "10px"};
    right: ${props => props.direction ==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
    /* align-items: center;
    justify-content: center; */
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    margin-left: 100px;
    margin-top: 30px;
`
const Image = styled.img`
    margin-top: 7rem;
    height: 65%;
    width: 100%;

`

const InfoContainer = styled.div`
    flex: 1;
    margin-left: 40px;
`

const Title = styled.h1`
    font-size: 70px; 
`;
const Desc = styled.p`
    margin: 50px 0px; 
    font-size: 20px; 
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    font-weight: 600;
    margin-left: 250px;
`;

const Slider = () => {

    // const [slideIndex, setSlideIndex] = useState(0);
    // const handleClick = (direction) => {
    //     if(direction==='left'){
    //         setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    //     }else {
    //         setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    //     }
    // }; 
    return (
        <Container fluid className="d-flex">
            {/* <Wrapper slideIndex={slideIndex}> */}
                {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                < Image src={item.img}/>
                {/* <ImgContainer>
                < Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Link to="/Booking"><Button >BOOK NOW</Button></Link>
                </InfoContainer> */}
                </Slide>
                ))}
            {/* </Wrapper> */}
        </Container>
    )
}

export default Slider
