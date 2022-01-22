import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {ApiService} from "../services/ApiService";
import {Link} from "react-router-dom";

function Feed() {
  const API = new ApiService({});
  const [apiResults, setApiResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.get("reviews")
      .then((json) => {
        setApiResults(json.data);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && (<>loading</>)}
      {apiResults && (
          apiResults.map(result => (
            <Row key={result.uuid}>
              <Col>
                <Link to={`/review/${result.uuid}`}>{result.uuid}</Link>
              </Col>
            </Row>
          ))
      )}
    </>)
}

export default Feed;
