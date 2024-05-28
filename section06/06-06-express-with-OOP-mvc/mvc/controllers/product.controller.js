import {CashService} from './services/cash.services.js'
import {ProductService} from './services/product.services.js'

export class ProductController{
    //상품 구매하기 API
    buyProduct = (req,res) => {
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
    }

    //상품 환불하기 API
    refundProduct= (req,res) =>{
        // 1. 판매 여부를 검증하는 코드 (대략 10줄 정도)
        const productService = new ProductService()
        const isSoldOut = productService.checkValue()

        //2. 상품 환불하는 코드
        if(isSoldOut){
          res.send("상품 환불 완료")
        }
    }
}