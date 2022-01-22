# API Endpoints

## Headers

While any endpoints that require a bearer token will be noted, if you use the provided Api Service wrapper, all
appropriate headers should be present without any changes.

## Resource Objects

Resource object descriptions can be found on the [resources doc](./resources.md)


## GET `/reviews`

### Parameters

| Key  	| Validations       	|
|------	|-------------------	|
| page 	| nullable, integer 	|

### Responses

#### Success

```
200 OK

{
  "data": ["<ReviewResource>"],
  "links": {
    "first": "<server URL>/reviews?page=1",
    "last": "<server URL>/reviews?page=2",
    "prev": null,
    "next": "<server URL>/reviews?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 2,
    "links":  [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "<server URL>/reviews?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": "<server URL>/reviews?page=2",
        "label": "2",
        "active": false
      },
      {
        "url": "<server URL>/reviews?page=2",
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "path": "<server URL>/reviews",
    "per_page": 15,
    "to": 15,
    "total": 25,
  },
  "success": true
}
```

## GET `/reviews/<review uuid>`

### Parameters

| Key  	| Validations       	|
|------	|-------------------	|
|  	|  	|

### Responses

#### Success

```
200 OK

{
  "data": "<ReviewResource>",
}
```

## GET `/beers`

### Parameters

| Key  	| Validations       	|
|------	|-------------------	|
| page 	| nullable, integer 	|

### Responses

#### Success

```
200 OK

{
  "data": ["<BeerResource>"],
  "links": {
    "first": "<server URL>/beers?page=1",
    "last": "<server URL>/beers?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "links":  [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "<server URL>/beers?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "path": "<server URL>/beers",
    "per_page": 15,
    "to": 10,
    "total": 10,
  },
  "success": true
}
```

## GET `/beers/<slug>`

### Parameters

| Key  	| Validations       	|
|------	|-------------------	|
| page 	| nullable, integer 	|

### Responses

#### Success

```
200 OK

{
  "data": "<BeerResource>",
}
```

## GET `/styles`

### Parameters

| Key  	| Validations       	|
|------	|-------------------	|
| page 	| nullable, integer 	|

### Responses

#### Success

```
200 OK

{
  "data": ["<StyleResource>"],
  "success": true
}
```

## GET `/user`

### Headers
Requires bearer token:

```
headers: {
  Accept: "application/json",
  Authorization: `Bearer <user token>`,
},
```

### Parameters

| Key  	| Validations       	|
|------	|-------------------	|
|  	|  	|

### Responses

#### Success

```
200 OK

{
  "data": ["<StyleResource>"],
  "success": true
}
```

## POST `/login`

### Parameters

| Key            | Validations                |
|-------------	|--------------------------	|
| email        | required, string            |
| password        | required, string, min: 8    |
| device_name    | required, string            |

### Responses

#### Success

```
200 OK

{
  "success": true
  "token": "1|7HRKXURQY2CqO9ZKqle5Vt7kOGohQxiPs6czN0jI"
  "token_type": "Bearer"
  "email": "annie27@example.org"
  "name": "Hulda Kris"
  "device_name": "user_test"
}
```

## POST `/logout`

### Headers
Requires bearer token:

```
headers: {
  Accept: "application/json",
  Authorization: `Bearer <user token>`,
},
```

### Parameters

| Key            | Validations                |
|-------------	|--------------------------	|
|        	|          	|

### Responses

#### Success

```
200 OK

{
  "success": true
  "message": "Logged Out"
}
```

## POST `/register`

### Parameters

| Key            | Validations                                |
|-------------	|-------------------------------------------	|
| name            | required, string, max: 255                    |
| email        | required, string, email, max: 255, unique    |
| password        | required, string, min: 8                    |
| device_name    | required, string                            |

### Responses

#### Success

```
200 OK

{
  "success": true
  "token": "1|JO0iPlXlnkC0zU4d86hBLAufCMrEnLkPy4p4ASQB"
  "token_type": "Bearer"
  "email": "becker.chanel@example.net"
  "name": "Miss Annette Stracke"
  "device_name": "user_test"
}
```

