import axios from '../../src/index'
import qs from 'qs'

axios.defaults.headers.common['test2'] = 132

axios({
  url: '/config/post',
  method: 'post',
  data: qs.stringify({
    a: '/config/post'
  }),
  headers: {
    test1: '333'
  }
}).then(res => {
  console.log(res.data)
})
