
import React from "react";
import {Card, Button}from "react-bootstrap"
import {Link} from "react-router-dom";

  
const ReviewCard = (props) => {
return (
  <>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{props.review.beer.name}</Card.Title>
    <Card.Text>
      {props.review.beer.origin}
    </Card.Text>
    <Link to={`/review/${props.review.uuid}`}>
    <Button variant="primary">Find Out More</Button>
    </Link>
  </Card.Body>
</Card>

  </>
);
  }


export default ReviewCard;