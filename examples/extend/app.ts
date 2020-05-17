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

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.error(err))
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.name)
  }
}

test()
