'use strict'

const showOrdersTemplate = require('../templates/orders-listing.handlebars')
const showTitleTemplate = require('../templates/order-title.handlebars')


const onGetOrdersSuccess = response => {
  console.log(response)
  $('#orders').html('')
  const showTitleHTML = showTitleTemplate({totalOrders: response.order.length})
  $('#orders').append(showTitleHTML)
  for (let i = 0; i < response.order.length; i++) {
    const products = response.order[i].orderData.products
    console.log('products show in order', products)
    const showOrderHTML = showOrdersTemplate({products: products})
    $('#orders').append(showOrderHTML)
    $('#orders').append('<hr>')
  }
}


const onCheckoutSuccess = response => {
  $('#user-message').html('<a class="btn btn-danger">Check out success</a>')
  return response
}

const onCheckoutFailure = () => {
  $('#user-message').html('<a class="btn btn-danger">Check out failed.</a>')
}

module.exports = {
  onCheckoutSuccess,
  onCheckoutFailure,
  onGetOrdersSuccess
}
