# AWS Lambda And API Gateway Full Tutorial For Beginners and Intermediates

This repository contains an AWS Lambda function that connects to MongoDB to retrieve usage plans based on an API key. The function is secured using API Gateway, which restricts access through API keys and usage plans.

## Features

- Connects to MongoDB.
- Retrieves usage plans based on API keys.
- Secured with API Gateway and usage plans.

## Prerequisites

- AWS Account
- Node.js (20.x or higher)
- MongoDB Atlas account (or local MongoDB instance)
- AWS CLI configured

## API Gateway Setup

1. Create an API in API Gateway.
2. Link the Lambda function to an endpoint.
3. Enable API key requirement for the endpoint.
4. Create usage plans and associate them with API keys.

## Usage

Send a POST request to the endpoint with the API key in the request body. The function will return the corresponding usage plan or an error message.

## Testing

You can test the function using the AWS Lambda console or tools like Postman.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
