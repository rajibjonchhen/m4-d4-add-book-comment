import React from 'react';
import{Component} from "react"
import{Card, Button, Container, Row, Col, Spinner} from "react-bootstrap"
import AddComment from './AddComent';
import CommentList from './CommentList';


class SingleBook extends Component{
    state={
        selected:false,
        comments:[],
        isLoading:true
    }

 
        componentDidMount = async() =>{
            try {
                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book.asin, {
                method:"GET",   
                headers: { 
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzk2NjI1MjgsImV4cCI6MTY0MDg3MjEyOH0.M_W7mM03N1yeADR5Q0nbGPMaXiMh73U1VxH4uhVI160"
                }
                    })

               let data = await response.json()
               this.setState({comments:data})  
               this.setState({isLoading:false})  
               
            } catch (error) {
                console.log(error)
            }
        }

    render(){
        return(
            (
               <Container key={this.props.book.asin}>
                   <Row className="d-flex justify-content-center">
                       <Col>
                       <Card onClick={()=>this.setState({selected: !this.state.selected})}
                        style={{border:this.state.selected? "5px solid red":"none", width:"15rem"}} className="text-center m-3">
                <Card.Img  variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                        <span>Category : {this.props.book.category.toUpperCase()}</span>
                    
                    </Card.Text>
                    <Button variant="primary">Comment </Button>
                </Card.Body>
            </Card>
                       <div style={{display:this.state.selected? "block":"none"}}>

                 <div style={{display:this.state.isLoading? "block":"none"}}>
                        <Spinner animation="grow" variant="primary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="success" />
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="warning" />
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="light" />
                        <Spinner animation="grow" variant="dark" />
                </div>    
                       <CommentList comments = {this.state.comments} />
                       <AddComment asin = {this.props.book.asin}/>
                       </div>
                     
                       </Col>
                   </Row>
                   
               </Container>
            ))
        
    }



}

export default SingleBook