import React from 'react';
import './Result.css';
import { Container, Card, Button } from 'react-bootstrap';

function ResultPage() {
    return (
        <div>
            <Container className="result-box">
                <Container className="filter-box">

                </Container>
                <Container className="result-container">

                        <Card className="d-flex">
                            <Card.Img className="rp-img" variant="top" src="holder.js/100px180" />
                            <Card.Body className ="rp-body">
                                <Card.Title className="rp-title">Card Title</Card.Title>
                                <div className="rp-price">Price</div>
                                <Card.Text className="rp-details">
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* {
                            this.state.searchData ?
                                <div>

                                     {

                                                this.state.searchData.map((item, i) =>
                                                    <tr>
                                                        <td>{i}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.rating}</td>
                                                        <td>{item.address}</td>
                                                        <td><Link to={"/update/" + item.id} ><FontAwesomeIcon icon={faEdit} color="orange" /></Link></td>
                                                        <td><FontAwesomeIcon icon={faTrash} color="orange" onClick={() => this.delete(item.id)} /></td>
                                                    </tr>
                                                )
                                            }
                                </div>
                                : ""
                        }
                        {
                            this.state.noData ? <h3>No Data Found</h3>
                                : null
                        } */}
                </Container>
            </Container>
        </div>
    )
}

export default ResultPage;