//const express = require('express') 옛날 방식 => commonjs
import express from 'express'      //요즘 방식 =>module
import {ProductController} from './mvc/controllers/product.controller.js'

const app = express()

// 상품 API
const productController = new ProductController()
app.post('/products/buy',productController.buyProduct )
app.post('/products/refund', productController.refundProduct)

//게시판 API
//app.get("/boards/...")

//포트번호
app.listen(4000)