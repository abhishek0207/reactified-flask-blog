import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
interface User  {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
const onFormSubmit = (user: User) => {
    console.log(user)
}
const RegistrationForm : React.FunctionComponent<{}> = () => {
   const [ userName, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
    return(
        <div className="registerationForm">
            <h1>Please register Here to start Posting</h1>
            <Form action="#" onSubmit={(e) => onFormSubmit({userName, email, password, confirmPassword })} >
            <Form.Group as={Row} controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={userName} onChange={(t) => setUsername(t.target.value) } />
            </Form.Group>
            <Form.Group as={Row} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange = {(t) => setEmail(t.target.value)} />
                <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group as={Row} controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={password} onChange = {(t) => setPassword(t.target.value)} />
            </Form.Group>
            <Form.Group as={Row} controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange = {(t) => setConfirmPassword(t.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>

    )
}   

export default RegistrationForm