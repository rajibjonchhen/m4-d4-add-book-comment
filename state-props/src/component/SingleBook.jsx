import React from 'react';

import{Component} from "react"
import{Card, Button, Container, Row, Col} from "react-bootstrap"


class SingleBook extends Component{
    state={
        selected:false
    }

    // toggleClass=(e)=>(
    //     this.toggleSelect? this.setState({toggleSelect:true}):this.setState({toggleSelect:true})
    // )
    render(){
        return(
            (
               <Container key={this.props.book.id}>
                   <Row className="d-flex justify-content-center">
                       <Col >
                       <Card onClick={()=>this.setState({selected: !this.state.selected})}
                        style={{border:this.state.selected? "5px solid red":"none", width:"15rem"}} className="text-center m-3">
                <Card.Img  variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                        <span>Category : {this.props.book.category.toUpperCase()}</span>
                    
                    </Card.Text>
                    <Button variant="primary">{this.props.book.price} </Button>
                </Card.Body>
            </Card>
                       </Col>
                   </Row>
               </Container>
            ))
        
    }
}

export default SingleBook