var SenecaWeb = require('seneca-web')
var express = require('express')
var router = express.Router
var context = new router()

var senecaWebConfig = {
      context: context,
      adapter: require('seneca-web-adapter-express'),
      options: { parseBody: false } // so we can use body-parser
}

var app = express()
      .use( require('body-parser').json() )
      .use( context )
      .listen(3000)

var seneca = require('seneca')()
      .use(SenecaWeb, senecaWebConfig )
      .use('api')
      .client( { type:'tcp', pin:'role:customer'} )