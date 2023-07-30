import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version: '1.0.0'
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [
      {
        bearerAuth: [],
      }
    ]
  },
  apis: ['./routes/property.routes.js', './mongodb/models/property.js'],
};

const swaggerSpec = swaggerJSDoc(options)

function swaggerDocs(app, port){
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  app.get('docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec)
  })

  console.log(`Docs available att http://localhost:${port}/docs`)
}

export default swaggerDocs