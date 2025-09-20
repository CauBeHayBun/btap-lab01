const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: { title: 'Node MVC CRUD API', version: '1.0.0', description: 'API cho Suppliers & Products' }
    },
    apis: ['./routes/*.js'] // bạn có thể thêm ./controllers/*.js
};

module.exports = swaggerJSDoc(options);