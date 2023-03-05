import swaggerJSDoc, { Options } from 'swagger-jsdoc'

const swaggerOptions: Options = {
  definition: {
    info: {
      title: 'Household Account Book API',
      description: 'http://localhost:3000/api-docs.json',
      version: '1.0.0'
    }
  },
  apis: ['./routes/*Routes.ts']
}

export const swaggerDocs = swaggerJSDoc(swaggerOptions)