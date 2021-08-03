import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import { Card, Button, Modal, Form } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavCard from './MyFavCard';
import UpdateFormModel from './UpdateFormModel';



class MyFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://drinks-301.herokuapp.com/',
      allFav: [],
      showFav: false,
      index: 0,
      showModal: false,
      strDrink: '',
      strDrinkThumb: '',
      idDrink: ''
    }
  }

  componentDidMount = async () => {
    axios.get(`${this.state.url}/fav?email=${this.props.auth0.user.email}`).then(result => {
      this.setState({
        allFav: result.data,
        showFav: true
      })
    })
  }

  deleteFav = async (index) => {
    axios.delete(`${this.state.url}/fav/${index}?email=${this.props.auth0.user.email}`).then(result => {
      this.setState({
        allFav: result.data,
        showFav: true
      })
    })
  }

  updateFav = async (event) => {
    event.preventDefault();
    const reqbody = {
      email: this.props.auth0.user.email,
      strDrink: event.target.name.value,
      strDrinkThumb: event.target.img.value,
      idDrink: event.target.level.value
    }
    axios.put(`${this.state.url}/fav/${this.state.index}`, reqbody).then(result => {
      this.setState({
        allFav: result.data
      })
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  handleShow = (index) => {
    this.setState({
      showModal: true,
      index: index,
      strDrink: this.state.allFav[index].strDrink,
      strDrinkThumb: this.state.allFav[index].strDrinkThumb,
      idDrink: this.state.allFav[index].idDrink
    })
  }


  render() {
    return (
      <>
        <MyFavCard showData={this.state.showFav} allFav={this.state.allFav} handleShow={this.handleShow} deleteData={this.deleteFav} />
        <UpdateFormModel showModal={this.state.showModal} handleShow={this.handleShow} handleClose={this.handleClose} updateData={this.updateFav} dataList={this.state.allFav} theName={this.state.strDrink} theLevel={this.state.idDrink} theImg={this.state.strDrinkThumb} />
        {/* {this.state.showFav && this.state.allFav.map(item => {
          return (
            <Card style={{ width: '18rem', display: 'inline-block' }}>
              <Card.Img variant="top" src={item.strDrinkThumb} />
              <Card.Body>
                <Card.Title>{item.strDrink}</Card.Title>
                <Card.Text>
                  {item.idDrink}
                </Card.Text>
                <Button variant="primary" onClick={() => { this.deleteFav(item) }}>Delete</Button>
                <Button variant="primary" onClick={() => { this.handleShow(this.state.index) }}>Update</Button>
              </Card.Body>
            </Card>
          )
        })} */}

      </>
    )
  }
}

export default withAuth0(MyFav);
