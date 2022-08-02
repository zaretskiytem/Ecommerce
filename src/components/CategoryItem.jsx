
import  styled  from "styled-components";

const Container = styled.div`
flex:1;
margin:3px;
height: 70vh;`
const Image = styled.img`
width:100% `
const Info = styled.div``
const Title  = styled.h1``
const Button = styled.button ``



function CategoryItem({item}) {
  return <Container>
            <Image>{item.img} </Image>
            <Info><Title>{item.title}</Title></Info>
            <Button>SHOP NOW</Button>
         </Container>;
}

export default CategoryItem;
