import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import array from '../array';
import { Button, Table } from 'react-bootstrap';


const Home = () => {
    var navigate = useNavigate();

    const setId = (id, name, age) => {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
    }

    const setDeleted = (id) => {
        var index = array.map(function (e) {
            return e.id;
        })
            .indexOf(id);

        array.splice(index, 1);

        navigate("/");
    }

    return (
        <div>
            <div style={{ margin: "6rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
        
                        {array.map((item) => {
                            return (
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>

                                    {/* getting the id,name, and 
                                    age for storing these
                                    value in the jsx with 
                                    onclick event */}
                                    <td>
                                        <Link to={`/edit`}>
                                            <Button
                                                onClick={(e) =>
                                                    setId(
                                                        item.id,
                                                        item.Name,
                                                        item.Age
                                                    )
                                                }
                                                variant="info"
                                            >
                                                Update
                                            </Button>
                                        </Link>
                                    </td>

                                    {/* Using thr deleted function passing
                                    the id of an entry */}
                                    <td>
                                        <Button
                                            onClick={(e) =>
                                                setDeleted(item.id)
                                            }
                                            variant="danger"
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                {/* Button for redirecting to create page for
                insertion of values */}
                <Link className="d-grid gap-2" to="/create">
                    <Button variant="warning" size="lg">
                        Create
                    </Button>
                </Link>
            </div>

        </div>
    );
}

export default Home;
