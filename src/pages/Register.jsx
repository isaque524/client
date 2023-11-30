import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";

const Register = () =>{
    return (<>
    <Form>
        <Row style={
            {
                height: "100vh",
                justifyContent:"center",
                paddingTop: "10%",
            }
        }>
            <Col  xs={6}>
            <Stack gap={3}>
                <h2>Criar Conta</h2>

                <Form.Control type="text" placeholder="Nome"/>
                <Form.Control type="email" placeholder="Email"/>
                <Form.Control type="password" placeholder="Senha"/>
           <Button variant="primary" type="submit" >
            Cadastra
           </Button>

           <Alert variant="danger" >Ocorreu um erro.</Alert>
            </Stack>
            </Col>
        </Row>
    </Form>
    </>);
}

export default Register;