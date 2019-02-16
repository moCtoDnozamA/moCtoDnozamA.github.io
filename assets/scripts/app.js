'use strict'

const authenticationEvents = require('./auth/events')
const productEvents = require('./product/events')
const cartEvents = require('./cart/events')
const orderEvents = require('./order/events')

$(() => {
  authenticationEvents.addAuthEventHandlers(event)
  productEvents.addAuthEventHandlers(event)
  cartEvents.addAuthEventHandlers(event)
  orderEvents.addAuthEventHandlers(event)
})
