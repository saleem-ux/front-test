import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class MyApiCard extends Component {
  render() {
    return (
      <div>
        {this.props.showData && this.props.allDrinks.map((item, index) => {
          return (
            <>

              <Card key={index} style={{ width: "18rem", margin: "1.5rem", display: "inline-block", }}                >
                <Card.Img variant="top" src={item.strDrinkThumb} alt="" />
                <Card.Body>
                  <Card.Title>{item.strDrink}</Card.Title>
                  <Card.Text>{item.idDrink}</Card.Text>
                  <Button onClick={() => { this.props.addToFav(item) }}>Add To Fav</Button>
                </Card.Body>
              </Card>
            </>
          )
        })}
      </div>
    )
  }
}

export default MyApiCard
