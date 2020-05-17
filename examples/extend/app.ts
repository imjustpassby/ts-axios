import axios from '../../src/index'
/* 
    两种调用方法，只传config 或者 url + config
*/
axios({
  url: '/extend/post',
  method: 'post',
  data: {
    a: 'hi'
  }
})

axios('/extend/post', {
  method: 'post',
  data: {
    a: 'hi hi'
  }
})

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
})

axios.get('/extend/get')

axios.head('/extend/head')

axios.delete('/extend/delete')

axios.options('/extend/options')

axios.post(
  '/extend/post',
  { msg: 'post' },
  { headers: { 'content-type': 'application/json', extend: 'post' } }
)

axios.put('/extend/put', { msg: 'put' })

axios.patch('/extend/patch', { msg: 'patch' })
