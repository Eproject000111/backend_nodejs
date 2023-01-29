
let userModel =  require('./../src/models/user_info.models');
let sessionModel = require('./../src/models/shopping_session.models');
let roleModel = require('./../src/models/role.models');
let productModel = require('./../src/models/product.models');

let optionGroupModel = require('./../src/models/product-options/optiongroups.models');
let optionModel = require('./../src/models/product-options/options.models');
let productOptionModel =require('./../src/models/product-options/productOptions.models');

let paymentDetailsModel = require('./../src/models/payment/paymentDetails.models');
let userPaymentModel = require('./../src/models/payment/userPayment.models');

let orderModel = require('./../src/models/orders/orders.models');
let orderDetailsModel = require('./../src/models/orders/ordersDetail.models');

let categoryModel =require('./../src/models/categories.models');
let cartItemModel = require('./../src/models/cartItem.models');
let addressModel = require('./../src/models/address.models');

module.exports = {
    userModel,
    sessionModel,
    roleModel,
    productModel,
    optionGroupModel,
    optionModel,
    productOptionModel,
    paymentDetailsModel,
    userPaymentModel,
    orderModel,
    orderDetailsModel,
    categoryModel,
    cartItemModel,
    addressModel
}

