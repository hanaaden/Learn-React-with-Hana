# JSON Web Token JWT

A JSON Web Token (JWT) is a secure way to send information between a client and a server

 It is mainly used in web applications and APIs to verify users and prevent unauthorized access.

A JWT is JSON data secured with a cryptographic signature.

The signing can be done using these cryptographic methods:

HMAC (Hash-based Message Authentication Code)
RSA or ECDSA (Asymmetric cryptographic algorithms)

### structure of JWT
it has 
1: Header 
Contains metadata about the token, such as the algorithm used for signing.

```
{
    "alg": "HS256",
    "typ": "JWT"
}
```

2 : payload 
Stores the claims, i.e., data being transmitted

```
{
    "userId": 123,
    "role": "admin",
    "exp": 1672531199
}
```

3: signiture 
Ensures the token's integrity and authenticity.

```
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```

Login Request: The user logs in through the client application (e.g., web or mobile app) by sending their credentials (username & password) to the server.
Server Generates JWT: If the credentials are correct, the server generates a JWT token using a secret key.
Returns JWT: The server sends the JWT back to the client application.
Further Requests with JWT: For any subsequent requests, the client sends the JWT along with the request. The server verifies the JWT before granting access to protected resources.


# Cross Origin Resource Sharing (CORS)

Cross-Origin Resource Sharing (CORS) is a browser security mechanism that controls how a web application running on one origin (domain, protocol, or port) can request resources from a different origin. 


browsers block such cross-origin requests to prevent unauthorized access to sensitive data. CORS provides a controlled way to enable intentional sharing of resources with trusted third-party domains through specific HTTP headers.

CORS works by having the browser check whether the server allows a request from a different origin. When your frontend sends a request to another domain, the browser first sends a small “preflight” request asking the server if it’s okay to share data. If the server replies with a header like Access-Control-Allow-Origin: https://example.com, the browser allows the real request to continue. If not, the browser blocks it for security reasons.

A common use of JSON is to exchange data to/from a web server.
When sending data to a web server, the data has to be a string.

You can convert any JavaScript datatype into a string with JSON.stringify().

const obj = {name: "John", age: 30, city: "New York"};

Use the JavaScript function JSON.stringify() to convert it into a string.

const myJSON = JSON.stringify(obj);



