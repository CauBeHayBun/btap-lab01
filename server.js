// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node.js MVC CRUD API',
            version: '1.0.0',
            description: 'API documentation for Node.js MVC CRUD app'
        },
        servers: [{
            url: 'http://localhost:3000',
            description: 'Local server'
        }]
    },
    apis: ['./routes/*.js'], // đường dẫn tới file route có comment Swagger
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;