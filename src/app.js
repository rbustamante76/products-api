const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const db = require('./db/dbConnection')
const router = require('./routes')

const app = new Koa()

// Connection to DB
db.connect()

app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function(err, ctx) {
    if (err) ctx.throw('Body parse error', 422)
  }
}))

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app