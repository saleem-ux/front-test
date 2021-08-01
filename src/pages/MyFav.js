import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card,Button } from 'react-bootstrap';
import UpdateModal from '../pages/UpdateModal';

class MyFav extends React.Component {
  constructor(props){
    super(props);
    this.state={
      url:process.env.REACT_APP_SERVER,
      dataList:[],
      showData:false,

      id : '',
      name:'',
      img:'',
      level:'',
      index: 0,
      
      showModel:false
    }

  }

componentDidMount=async()=>{
  const {user} = this.props.auth0
  axios.get(`${this.state.url}/fav?email=${user.email}`).then(result=>{
    this.setState({
      dataList:result.data,
      showData:true,
    })
    console.log(result);
  })
}
/////////////////////////////////////////////////////
//  Delete Function
deleteData=async(index)=>{
  const {user} = this.props.auth0

axios.delete(`${this.state.url}/fav/${index}?email=${user.email}`).then(result=>{
  this.setState({
    dataList:result.data,
    showData:true,
  })
  console.log(result);
})
}

/////////////////////////////////////////////
updateData = async (event) => {
  event.preventDefault();

  const { user } = this.props.auth0;
  const updateDataQuery = {
    name: event.target.name.value,
    level:event.target.level.value,
    img: event.target.img.value,
    email: user.email

  }
  console.log('aaaaaaaaaaaaaaaaaaaaaaa', event.target.level.value)
    console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbb', this.state.index)
   axios.put(`${process.env.REACT_APP_SERVER}/fav/${this.state.index}`, updateDataQuery).then(result=>{
    // console.log('llllllllllllllllllllllllllllll', result)
    this.setState({
      dataList:result.data,
      // showData:true,
    })
    console.log(result);
  })
  this.componentDidMount();

}

handleShow = (index) => {
  this.setState({
      showModel: true,
      index:index,
    theName:this.state.dataList[index].name,
    theLevel:this.state.dataList[index].level,
    theImg:this.state.dataList[index].email,
  })
}

handleClose = () => {
  this.setState({
      showModel: false
  })
}




  render() {
    return(
      <>
      
      
        {this.state.showData && this.state.dataList.map((item, index) => {
          return (
            <>
             
              <Card style={{ width: "18rem", margin: "1.5rem", display: "inline-block", }}                >                 
               <Card.Img variant="top" src={item.img} alt="" />                  
               <Card.Body>                    
                 <Card.Title>{item.name}</Card.Title>                    
                 <Card.Text>{item.level}</Card.Text>                    
                 <Button onClick={()=>{this.handleShow(index)}}>Update</Button>   
                 <br></br>               
                 <Button onClick={()=>{this.deleteData(index)}}>Delete</Button>                  
                 </Card.Body>                
                 </Card>
            </>
            
        )
        
      })}
      <>
      <UpdateModal showModel={this.state.showModel} handleShow={this.handleShow} handleClose={this.handleClose} updateData={this.updateData}  dataList={this.state.dataList} />
      </>
            </>
    )
  }
}

export default withAuth0(MyFav);
