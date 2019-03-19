const express = require('express')
const config = require('./config')
const path = require('path')
const app = express()

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

const website = {
  title: 'xxx',   // 公司名
  logo: '',       // 公司logo
  menus: [
    {
      label: '首页',
      path: '/'
    },
    {
      label: '公司信息',
      path: '/company'
    },
    {
      label: '企业文化',
      path: '/culture'
    },
    {
      label: '业务体系',
      path: '/system'
    },
    {
      label: '投资者关系',
      path: '/investor'
    }
  ]
} 

// 首页
app.get('/', function ({
  path
}, res) {
  const news = [
    {
      title: '新科技',
      desc: '构筑智慧未来'
    },
    {
      title: '新文化',
      desc: '丰富精神生活'
    },
    {
      title: '社会责任',
      desc: '履行历史担当'
    }
  ]

  const params = {
    path,
    news,
    website
  }
  res.render('page-index/index.jade', params)
})

// 公司
app.get('/company', function ({
  path
}, res) {
  const params = {
    path,
    website
  }
  res.render('page-company/index.jade', params)
})

// 企业文化
app.get('/culture', function ({
  path
}, res) {
  const params = {
    path,
    website
  }
  res.render('page-culture/index.jade', params)
})


// 业务体系
app.get('/system', function ({
  path
}, res) {
  const params = {
    path,
    website
  }
  res.render('page-system/index.jade', params)
})

// 投资者关系
app.get('/investor', function ({
  path
}, res) {
  const params = {
    path,
    website
  }
  res.render('page-investor/index.jade', params)
})

app.listen(config.port)