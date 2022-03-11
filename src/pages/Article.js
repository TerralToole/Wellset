import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import moment from 'moment';
import MainNav from "../components/MainNav";
import { ApiService } from "../services/ApiService";


function Article(props) {
  const API = new ApiService({});
  const { reviewId } = useParams();

  const [review, setReview] = useState();


  const fetchReview = async (reviewId) => {
    API.get(`/api/review/${reviewId}`)
      .then((reviewData) => {
        setReview(reviewData.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (reviewId) fetchReview(reviewId);
  }, [reviewId])

  return (
    <>
      <MainNav />
      <Container>
        <h1> {review && review.beer && review.beer.name} </h1> 
        <h2> Posted At: {review && moment(review.created_at).format('MMMM Do YYYY')} </h2>{" "}
        <Row>
          <Col>Reviewed By: {review && review.reviewer && review.reviewer.name} </Col> 
          <Col>Rating: {review && review.rating} </Col> 
          <Col>Score: {review && review.score} </Col>{" "}
        </Row>{" "}
        <p>Article Content {review && review.content} </p>{" "}
        <Button as={Link} to="/feed">
          {" "}
          Back{" "}
        </Button>{" "}
      </Container>{" "}
    </>
  );
}

export default Article;
