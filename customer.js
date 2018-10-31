// CUSTOMER service

var seneca = require('seneca')()
var entities = require('seneca-entity')
seneca.use(entities)
seneca.use('mongo-store', {
  name: 'customerdb',
  host: 'localhost',
  //host: "docker.for.windows.localhost",
  port: 27017,
  options: {useNewUrlParser: true}
})



module.exports = function customer(options) {

  this.add('role:customer,cmd:new', function sum(msg, respond) {
    var customer = seneca.make('customer')
    customer.name = msg.name
    customer.address= msg.address
    customer.save$(function(err,newCustomer){
      if(err){
        respond(err, null);
      } else {
        respond(null, seneca.util.clean(newCustomer))
      }
    })
  }) // new

  this.add('role:customer,cmd:list', function sum(msg, respond) {
    var customer = seneca.make('customer')
    customer.list$(function(err,list){
      if(err){
        respond(err, null);
      } else {
        respond(null, {list})
      }
    })
  }) // list

} //customer service