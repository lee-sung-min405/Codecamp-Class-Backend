//const express = require('express') 옛날 방식 => commonjs
import express from 'express'      //요즘 방식 =>module
import {CashService} from './cash.ks'
import {ProductService} from './package.json'
import { CashService } from './cash'

const app = express()

//상품 구매하기 API
app.post('/product/buy', (req, res) => {

  //1. 가진돈 검증하는 코드 => cash.js
  const cashService = new CashService()
  const hasMoney = cashService.checkValue()

  //2. 판매 여부를 검증하는 코드 => product.js
  const productService = new ProductService()
  const isSoldOut = productService.checkValue()

  //3. 상품 구매하는 코드
  if(hasMoney && !isSoldOut){
    res.send("상품 구매 완료")
  }
})

//상품 환불하기 API
app.post('/product/refund', (req, res)=>{

  // 1. 판매 여부를 검증하는 코드 (대략 10줄 정도)
  const productService = new ProductService()
  const isSoldOut = productService.checkValue()

  //2. 상품 환불하는 코드
  if(isSoldOut){
    res.send("상품 환불 완료")
  }
})

//포트번호
app.listen(4000)