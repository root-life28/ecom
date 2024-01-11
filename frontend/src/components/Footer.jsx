import { Row,Container,Col } from "react-bootstrap"

const Footer = () => {
    const currTime=new Date().getFullYear();
  return (

    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">
                    <p>E-COM &copy; {currTime}</p>
                </Col>
            </Row>

        </Container>
    </footer>
  )
}

export default Footer