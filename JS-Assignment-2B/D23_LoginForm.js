import React from "react";
import { Form, FormGroup, Input, Label, Button ,Col,FormText} from "reactstrap";
function LoginForm() {

    return (
        <>

            <Form>
                <FormGroup >
                    <Label for="email">Email</Label>
                    <Input  type="email" id="email" name="email" placeholder="Email" />
                </FormGroup>
                <FormGroup >
                    <Label for="password">Password</Label>
                    <Input  type="password" id="password" name="password" placeholder="Password" />
                </FormGroup>

                <FormGroup row>
                    <Label for="tnc" sm={2} > Term & Condition </Label>
                    <Col sm={{ size: 10 }} >
                        <FormGroup check>
                            <Input type="checkbox" id="tnc" />
                            <Label check > Agree: All the term and conditions </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup check row >
                    <Col sm={{ offset: 2, size: 10 }} >
                        <Button> Submit </Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    )

}
export default LoginForm