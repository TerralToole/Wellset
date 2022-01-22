# Review Resource

```json
{
  "uuid": "22b582b5-d5e7-3e95-a156-14692352236b",
  "beer": <BeerResource>,
  "reviewer": {
    "uuid": "49f5ecb4-8196-3e30-8b61-1665500898b9",
    "name": "Olaf Christiansen",
    "is_reviewer": false,
    "is_admin": false
  },
  "rating": 3,
  "score": 54,
  "content": "Multi-lined \n Text \n",
  "created_at": "2022-01-22T09:21:13.000000Z",
  "updated_at": "2022-01-22T09:21:13.000000Z"
}
```

# Beer Resource

```json
{
  "uuid": "fbaf8b06-e767-3a9d-bb8e-b21f6967b1e1",
  "slug": "illo",
  "name": "illo",
  "style": <StyleResource>,
  "image": "<URL to an image file>",
  "abv": "7.10",
  "origin": "Iceland",
  "description": "Multi-lined \n Text \n",
  "created_at": "2022-01-22T09:21:13.000000Z",
  "updated_at": "2022-01-22T09:21:13.000000Z"
}
```

# Style Resource

```json
{
  "id": 1,
  "uuid": "781271df-5f4c-33b1-b7b7-d4640b294e4a",
  "slug": "non-eligendi-non",
  "name": "et",
  "description": "paragraph",
  "created_at": "2022-01-22T09:21:13.000000Z",
  "updated_at": "2022-01-22T09:21:13.000000Z"
}
```

# User Resource

```json
{
  "uuid": "e5df4c7b-11d9-3ebb-981f-a6bf76d2b588",
  "name": "Eda Schimmel",
  "is_reviewer": false,
  "is_admin": false,
  "email": "dmckenzie@example.org", // can be null or missing, only appears if user is retrieving their own object.
  "reviews": [<ReviewResource>] // (can be null or missing is `is_reviewer` is false)
}
```
