const express = require('express')
const config = require('./config')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'));

const website = {
  title: 'xxx',   // 公司名
  logo: '',       // 公司logo
  menus: [
    {
      label: '公司信息',
      route: '/company'
    },
    {
      label: '企业文化',
      route: '/culture'
    },
    {
      label: '业务体系',
      route: '/system'
    },
    {
      label: '投资者关系',
      route: '/investor'
    }
  ]
} 

// 首页
app.get('/', function (req, res) {
  const params = {
    website
  }
  res.render('page-index/index.jade', params)
})

// 公司
app.get('/company', function (req, res) {
  const params = {
    website
  }
  res.render('page-company/index.jade', params)
})

app.listen(config.port)