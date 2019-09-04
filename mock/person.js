import Mock from 'mockjs'

const info = []
// const sum = 10

// for (let i = 0; i < sum; i++) {
  info.push({
    id: '1',
    author: 'zhansan',
    title: '受打击非东方闪电搜房送快递费你搜ID发送到发是开裆裤',
    display_time:'2019-3-3'
  },
  {
    id: '5',
    author: 'lisi',
    title: '圣诞节发顺丰is电风扇快递费精神可嘉',
    display_time:'2019-5-3'
  },
  {
    id: '6',
    author: 'wanger',
    title: '的街坊邻居啥地方建设的令肌肤生来得快',
    display_time:'2019-8-3'
  },
  {
    id: '7',
    author: 'mazi',
    title: '见风使舵九分裤洛斯里克飞机文',
    display_time:'2019-9-3'
  },
  {
    id: '8',
    author: 'zhaoye',
    title: '独角兽分手快乐地方呢六维空间',
    display_time:'2019-12-3'
  }
  )
// }

export default [{
  url: '/person/employed',
  type: 'get',
  response: config => {
    return {
      code: 20000,
      data: info
    }
  }
},
{
  url: '/person/edmit',
  type: 'get',
  response: config => {
    const { infomation, index } = config.query
    const infom = eval('('+infomation+')');
    const arr = info.splice( index, 1, infom)
    return {
      code: 20000,
      data: info
    }
  }
},
{
  url: '/person/delete',
  type: 'post',
  response: config => {
   const { index } = config.body
   const obj = info.splice(index, 1)
   return {
     code: 20000,
     data:info
   }
  }
}
]
