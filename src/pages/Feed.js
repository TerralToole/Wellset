import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, Spinner} from "react-bootstrap";
import { ApiService } from "../services/ApiService";
import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import ReviewCard from "../components/Cards";

function Feed() {
  const API = new ApiService({});
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetching reviews from back-end 
  const fetchReviews = async () => {
    API.get("/api/reviews")
      .then((reviewsData) => {
        // set reviews into state
        setReviews(reviewsData.data);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, []); // Empty dependency array [] means it only runs when component mounts (one time)

  return (
    <>
      <MainNav />
      {isLoading
        ? 
        // React-Bootstrap Spinner component (only displays when loading state is set to true)
        <Spinner animation="border" role="status"> 
        <span className="visually-hidden">Loading...</span>
      </Spinner>
        : reviews &&
          reviews.map((review) => {
            return (
              <Row key={review.uuid}>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{review.beer.name}</Card.Title>
                      <Card.Text>{review.content}</Card.Text>
                      <Link to={`/review/${review.uuid}`}>
                        <Button variant="primary">See review</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
    </>
  );
}

export default Feed;
