const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

// json data
var reviewsJSON = require("./data/reviews.json");
const beersJSON = require("./data/beers.json");
const usersJSON = require("./data/users.json");

// THIS IS UNSECURE, ONLY HARDCODING TOKEN FOR DEVELOPMENT PURPOSES
const LOGIN_TOKEN_SECRET = "0B5FHsefQDRHFkEfn1J9kxvhfH4klBei";

const port = 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/**
 * Fetch all reviews, then find by the review id
 */
app.get("/api/review/:reviewId", (req, res) => {
    const { reviewId } = req.params;
    const matchingReview = reviewsJSON.find((review) => reviewId === review.uuid);

    res.send({ data: matchingReview });
});

app.get("/api/reviews", (req, res) => {
    res.send({
        data: reviewsJSON,
        links: {
            first: "<server URL>/reviews?page=1",
            last: "<server URL>/reviews?page=2",
            prev: null,
            next: "<server URL>/reviews?page=2",
        },
        meta: {
            current_page: 1,
            from: 1,
            last_page: 2,
            links: [{
                    url: null,
                    label: "&laquo; Previous",
                    active: false,
                },
                {
                    url: "<server URL>/reviews?page=1",
                    label: "1",
                    active: true,
                },
                {
                    url: "<server URL>/reviews?page=2",
                    label: "2",
                    active: false,
                },
                {
                    url: "<server URL>/reviews?page=2",
                    label: "Next &raquo;",
                    active: false,
                },
            ],
            path: "<server URL>/reviews",
            per_page: 15,
            to: 15,
            total: 25,
        },
        success: true,
    });
});

app.get("/api/beers", (req, res) => {
    res.send({
        data: beersJSON,
        links: {
            first: "<server URL>/beers?page=1",
            last: "<server URL>/beers?page=1",
            prev: null,
            next: null,
        },
        meta: {
            current_page: 1,
            from: 1,
            last_page: 1,
            links: [{
                    url: null,
                    label: "&laquo; Previous",
                    active: false,
                },
                {
                    url: "<server URL>/beers?page=1",
                    label: "1",
                    active: true,
                },
                {
                    url: null,
                    label: "Next &raquo;",
                    active: false,
                },
            ],
            path: `localhost:${port}/api/beers`,
            per_page: 15,
            to: 10,
            total: 10,
        },
        success: true,
    });
});

app.post("/api/login", (req, res) => {
    const { email, password, device_name } = req.body;

    const userMatch = usersJSON.find(user => user.email === email);
    if (!userMatch) return res.status(401).send({ message: 'No user with that email' });
    const passwordMatches = (userMatch.password === password);
    if (!passwordMatches) return res.status(401).send({ message: 'Invalid password' });
    const userToken = jwt.sign(userMatch, LOGIN_TOKEN_SECRET);
    return res.send({
        "success": true,
        "token": userToken,
        "token_type": "Bearer",
        "email": userMatch.email,
        "name": userMatch.name,
        "device_name": device_name,
    })
});

// Created a route to send reviews

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});