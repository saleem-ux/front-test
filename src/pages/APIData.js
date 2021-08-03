import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import { Card, Button} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import MyApiCard from './MyApiCard';

class APIData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://drinks-301.herokuapp.com/',
      allDrinks: [],
      showDrinks: false,
    }
  }
  componentDidMount = async () => {
    axios.get(`${this.state.url}/api`).then(result => {
      this.setState({
        allDrinks: result.data,
        showDrinks: true,
      })
    })
  }

  addToFav = async(item) =>{
    const reqbody = {
      email: this.props.auth0.user.email,
      strDrink: item.strDrink,
      strDrinkThumb: item.strDrinkThumb,
      idDrink: item.idDrink
    }
    await axios.post(`${this.state.url}/fav`, reqbody)
  }

  render() {
    return (
      <MyApiCard allDrinks={this.state.allDrinks} addToFav={this.addToFav} showData={this.state.showDrinks}/>

      // <div>
      //   {this.state.showDrinks && this.state.allDrinks.map(item => {
      //     return (
      //       <Card style={{ width: '18rem', display: 'inline-block'}}>
      //         <Card.Img variant="top" src={item.strDrinkThumb} />
      //         <Card.Body>
      //           <Card.Title>{item.strDrink}</Card.Title>
      //           <Card.Text>
      //             {item.idDrink}
      //           </Card.Text>
      //           <Button variant="primary" onClick={()=> {this.addToFav(item)}}>Add to Fav</Button>
      //         </Card.Body>
      //       </Card>
      //     )
      //   })}
      // </div>
    )
  }
}

export default withAuth0(APIData)
