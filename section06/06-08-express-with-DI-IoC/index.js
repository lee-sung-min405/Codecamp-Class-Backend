//const express = require('express') 옛날 방식 => commonjs
import express from 'express'      //요즘 방식 =>module
import {ProductController} from './mvc/controllers/product.controller.js'
import {CouponController} from './mvc/controllers/coupons.controller.js'
import { CashService } from './mvc/controllers/services/cash.services.js'
import { PointService } from './mvc/controllers/services/point.services.js'
import { ProductService } from './mvc/controllers/services/product.services.js'

const app = express()

//[의존성 주입으로 발생하는 장점]
//1. new 한번으로 모든 곳에서 재사용 (싱글톤패턴 : 메모리 절약)
//2. 의존성으로 몽땅 한꺼번에 변경 가능
//3. 의존성 주입으로 쿠폰 구매 방식이 포인트결제 방식으로 안전하게 변경 가능

//[부가 설명]
//1. ProductController가 CashService에 의존하고 있음 (CashService => 의존성)
//=> 이 상황을 "강하게 결합되어 있다" 라고 표현 
//=> tight-coupling

//2. 이를 개선하기 위해서 "느슨한 결합"으로 변경할 필요가 있음
//=> loose-coupling
//=> 이를 "의존성 주입"으로 해결 (의존성 주입 : Dependency-Injection 줄여서 DI) 
//=> 이 역할을 대신 해주는 Nest.js 기능: IoC 컨테이너 (알아서 new 해서 넣어주는 애. 즉, 알아서 DI 해줌)
//=> IOC: Inversion-Of-Control

//3. "의존성주입"으로 "싱글톤패턴" 구현 가능해짐
//=> "의존성주입"이면, "싱글패턴"인가? => 그건 아님!!

const productService = new ProductService()

const cashService = new CashService()
const pointService = new PointService()


// 상품 API
const productController = new ProductController(cashService, productService) //의존성 주입
app.post('/products/buy',productController.buyProduct )
app.post('/products/refund', productController.refundProduct)


//쿠폰(상품권) API
const couponController = new CouponController(pointService)
app.post("/coupons/buy", couponController.buyCoupon) //상품권을 돈주고 구매하는 API

//게시판 API
//app.get("/boards/...")

//포트번호
app.listen(4000)