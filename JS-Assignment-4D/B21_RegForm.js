import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
export default function RegForm() {

    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const handleFullName = (e) => {
        setFullName(e.target.fullName)
        setSubmitted(false)
    }
    const handleUserName = (e) => {
        setUserName(e.target.userName)
        setSubmitted(false)
    }

    const handleEmail = (e) => {
        setEmail(e.target.name)
        setSubmitted(false)
    }

    const handlePassword = (e) => {
        setPassword(e.target.name)
        setSubmitted(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName === '' || userName === '' || email === '' || password === '') {
            setError(true)
        }
        else {
            setSubmitted(true)
            setError(false)
        }

    }

    const successMessage = () => {
        return <h2 style={{ display: submitted ? '' : 'none' }}>User {fullName} registered successfully</h2>
    }
    const errorMessage = () => {
        return <h2 style={{ display: error ? '' : 'none' }}>Ooo.. Enter all fields</h2>
    }

    return (
        <>
            <div className="mainBox">
                <h1>Registration Form</h1>
                <h2> {errorMessage()}{successMessage()}</h2>
                <Form >
                    <FormGroup>
                        <Label for="fullName">Full Name</Label>
                        <Input name="fullName" type="text" onChange={handleFullName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input name="email" type="email" onChange={handleEmail} placeholder="@gmail.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userName">User Name</Label>
                        <Input name="userName" type="text" onChange={handleUserName} placeholder="@userName" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input name="password" type="password" onChange={handlePassword} placeholder="* * * * * " />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                        <Button type="reset">
                            Reset
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}