import styled from "styled-components"

const Container = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 70vh;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

`
const Head = styled.h1`

`
const Detail = styled.h1`
    font-weight: 300;
`

const Sign = styled.h1`
    text-align: end;
    margin-right: 20px;
`
const Sign1 = styled.h1`
    text-align: end;
    margin-right:100px;
`


const ProductHead = () => {
    return (
        <Container>
            <Head>Products & Services</Head>
            <br />
            <br />
            <Detail>Lorem ipsum, dolor sit amet consectetur ad
                ipisicing elit. Cupiditate, accusantium illum, laudan
                tium veniam aut dignissimos minima corrupti adipisci, dolor eligend
                i et pariatur totam a dicta velit odit assumenda sint eveniet?</Detail>
            <br />
        
            <Sign1>Celine</Sign1>
            <Sign>Co-Founder & CEO</Sign>
       
        </Container>
    )
}

export default ProductHead
