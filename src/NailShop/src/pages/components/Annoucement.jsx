import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #dd5349;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500px;
`
const Annoucement = () => {
    return (
        <Container>
            Super Deal! Do something get something More!
        </Container>
    )
}

export default Annoucement
