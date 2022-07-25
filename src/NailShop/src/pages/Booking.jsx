import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #9f65e2;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;


const Booking = () => {
  const [name, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookings, setBookings] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const booking = {name,
      lastName,
      email,
      phoneNumber}

    console.log(booking);
    fetch("http://localhost:8080/api/v1/bookings",{
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(booking)
    }).then(()=>{
      console.log("New Booking added")
    })

  }


  // useEffect(() => {
  //   fetch("http://localhost:8080/api/v1/bookings")
  //   .then(res=>res.json())
  //   .then((result)=>{
  //     setBookings(result);
  //   }
  //   )
  // },[])


    return (
        <Container>
            <Wrapper>
                <Title>Make A Booking</Title>
                <Form>
                    <Input 
                    placeholder="name: E.g John"
                    value={name}
                    onChange={(e)=>setFirstName(e.target.value)}
                    name="firstName"
                    />
                    <Input 
                    placeholder="last name: E.g John"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    name="lastName"
                    />
                    <Input 
                    placeholder="email: E.g example@gmail.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    name="email"/>

                    <Input
                    number="phone number, E.g 0123456789"
                    placeholder="phone number, E.g 0123456789"
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    name="phoneNumber"/>

                    <Input type="datetime-local"/>

                    <Agreement>
                    <input type="checkbox"/> By making a booking, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                  </Agreement>
                   <Button onClick={handleSubmit}> Book </Button>
                </Form>
            </Wrapper>
        </Container>
       
    )
}

export default Booking
