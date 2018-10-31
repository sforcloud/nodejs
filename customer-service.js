require('seneca')()
  .use('customer')
  .listen({ type: 'tcp', pin: 'role:customer' })