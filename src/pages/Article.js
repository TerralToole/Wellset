import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";


function Article() {
  const { reviewId } = useParams();

  console.log(reviewId);
  return (
    <Container>
      <h1>Beer Name</h1>
      <h2>Posted At</h2>
      <Row>
        <Col>
          Reviewed By
        </Col>
        <Col>
          Rating
        </Col>
        <Col>
          Score
        </Col>
      </Row>
      <p>
        Article Content
      </p>
      <Button as={Link} to="/feed">Back</Button>
    </Container>
  )
}

export default Article;
