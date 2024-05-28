//const express = require('express') 옛날 방식 => commonjs
import express from 'express'      //요즘 방식 =>module
import {ProductController} from './mvc/controllers/product.controller.js'
import {CouponController} from './mvc/controllers/coupons.controller.js'

const app = express()

// 상품 API
const productController = new ProductController()
app.post('/products/buy',productController.buyProduct )
app.post('/products/refund', productController.refundProduct)


//쿠폰(상품권) API
const couponController = new CouponController()
app.post("/coupons/buy", couponController.buyCoupon) //상품권을 돈주고 구매하는 API

//게시판 API
//app.get("/boards/...")

//포트번호
app.listen(4000)