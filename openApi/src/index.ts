
import { OpenAPIHono } from '@hono/zod-openapi'
import { route } from './route'
import { swaggerUI } from '@hono/swagger-ui'

const app = new OpenAPIHono()

app.openapi(route, (c) => {
  const { id } = c.req.valid('param')
  return c.json({
    id,
    age: 20,
    name: 'Ultra-man',
  })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})
//@ts-ignore
app.get('/ui', swaggerUI({ url: '/doc' }))

export default app