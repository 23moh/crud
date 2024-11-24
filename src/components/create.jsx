import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import array from '../array';
import { ButtonGroup, Form } from 'react-bootstrap';


const Create = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        var uni = ids.slice(0, 8);

        var a = name,
            b = age;
        if (name == "" || age == "") {
            alert("invalid inpuit")
            return;
        } else {
            array.push({ id: uni, Name: a, Age: b });
            navigate("/");
        }
    }

    return (
        <div>
            <Form className='d-grid-2' style={{ margin: "5rem" }}>
            <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                >
                    <Form.Control
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
 
                {/* Fetching a value from input textfirld in
                    a setage using usestate*/}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicAge"
                >
                    <Form.Control
                        onChange={(e) =>
                            setAge(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                        required
                    />
                </Form.Group>
 
                {/* handing a onclick event in button for
                    firing a function */}
                <ButtonGroup
                    onClick={(e) => handleSubmit(e)}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </ButtonGroup>
 
                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to="/">
                    <ButtonGroup variant="primary" size="lg">
                        Home
                    </ButtonGroup>
                </Link>
            </Form>
        </div>
    );
}

export default Create;
