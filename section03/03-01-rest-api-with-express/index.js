//const express = require('express') 옛날 방식 => commonjs
import express from 'express'      //요즘 방식 =>module

const app = express()

//get방식의 api를 만들겠다
app.get('/qqq', function (req, res) {
  res.send('Hello World')
})

//get방식의 api를 만들겠다
app.get('/qqq2', function (req, res) {
  res.send('Hello World2')
})

//get방식의 api를 만들겠다
app.get('/qqq3', function (req, res) {
  res.send('Hello World3')
})

//포트번호
app.listen(4000) 