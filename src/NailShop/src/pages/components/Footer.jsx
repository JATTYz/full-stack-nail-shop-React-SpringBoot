import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../../responsive"
const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.h1`
    margin: 20px 0px;
    font-weight: 150;
`
const SocialContainer = styled.h1`
    display: flex;
`
const SocialIcon = styled.h1`
    width: 40px;   
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props => props.color};
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
      flex: 1; 
      padding: 20px; 
      ${mobile({display: "none"})}
`

const Title= styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
      flex: 1;  
      padding: 20px; 
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width:50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>No. 1989 Beauty</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sit, beatae saepe voluptate voluptatem officia odit deleniti soluta deserunt voluptates </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon >
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon >
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon >
                    <SocialIcon color="fc0101">
                        <YouTube />
                    </SocialIcon >
                </SocialContainer>
            </Left>
            <Center>
                <Title>Trading Hours</Title>
                <List>
                    <ListItem>Monday</ListItem>
                    <ListItem>9:30AM - 5:30PM</ListItem>
                    <ListItem>Tuesday</ListItem>
                    <ListItem>9:30AM - 5:30PM</ListItem>
                    <ListItem>Tuesday</ListItem>
                    <ListItem>9:30AM - 5:30PM</ListItem>
                    <ListItem>Wednesday</ListItem>
                    <ListItem>9:30AM - 5:30PM</ListItem>
                    <ListItem>Thursday</ListItem>
                    <ListItem>9:30AM - 5:30PM</ListItem>
                    <ListItem>Friday</ListItem>
                    <ListItem>9:30AM - 5:30PM</ListItem>
                    <ListItem>Saturday</ListItem>
                    <ListItem>9:30AM - 5:30PM</ListItem>
                    <ListItem>Sunday & Public Holidays</ListItem>
                    <ListItem>CLOSED</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>231 Liverpool Street, SYDNEY AUSTRALIA
                    </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>+61 1237 237 123
                    </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>1989NAILSHOP@gmail.com
                    </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
