import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


class MyFavCard extends Component {
    render() {
        return (
            <div>
                {this.props.showData && this.props.allFav.map((item, index) => {
                    return (


                        <Card key={index} style={{ width: "18rem", margin: "1.5rem", display: "inline-block", }} >
                            <Card.Img variant="top" src={item.strDrinkThumb} alt="" />
                            <Card.Body>
                                <Card.Title>{item.strDrink}</Card.Title>
                                <Card.Text>{item.idDrink}</Card.Text>
                                <Button onClick={() => { this.props.handleShow(index) }}>Update</Button>
                                <br></br>
                                <Button onClick={() => { this.props.deleteData(index) }}>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default MyFavCard
