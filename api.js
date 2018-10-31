module.exports = function api(options) {

 var valid_ops = { new:'new', list:'list'}

  this.add('role:api,path:customer', function (msg, respond) {
    var operation = msg.args.params.operation
    var name = msg.args.query.name
    var address = msg.args.query.address
    this.act('role:customer', {
      cmd:   valid_ops[operation],
      name:  name,
      address: address,
    }, respond)
  })


  this.add('init:api', function (msg, respond) {
    this.act('role:web',{routes:{
      prefix: '/api',
      pin:    'role:api,path:*',
      map: {
        customer: { GET:true, POST:true, suffix:'/:operation' }
      }
    }}, respond)
  })

}