const express = require('express')
const router = express.Router()
const apiData = require('../data.json')

router.get('/seller.json', (req, res) => {
  if (apiData.seller) {
    res.json({
      'error': '0',
      data: apiData.seller
    })
  } else {
    res.send('no such a name')
  }
})

router.get('/goods.json', (req, res) => {
  if (apiData.goods) {
    res.json({
      'error': '0',
      data: apiData.goods
    })
  } else {
    res.send('no such a name')
  }
})

router.get('/ratings.json', (req, res) => {
  if (apiData.ratings) {
    res.json({
      'error': '0',
      data: apiData.ratings
    })
  } else {
    res.send('no such a name')
  }
})

router.get('/all.json', (req, res) => {
  if (apiData) {
    res.json({
      'error': '0',
      data: apiData
    })
  } else {
    res.send('no such a name')
  }
})

module.exports = router
