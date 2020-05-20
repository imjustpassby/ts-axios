import axios, { AxiosTransformer } from '../../src/index'
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

axios({
  transformRequest: [
    // request.data处理逻辑
    function(data) {
      return qs.stringify(data)
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function(data) {
      // response.data 处理逻辑
      if (typeof data === 'object') {
        data.b = 2
      }
      return data
    }
  ],
  url: '/config/post',
  method: 'post',
  data: {
    a: '/config/post'
  }
}).then(res => {
  console.log(res.data)
})

const instance = axios.create({
  transformRequest: [
    function(data) {
      return qs.stringify(data)
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function(data) {
      if (typeof data === 'object') {
        data.b = 3
      }
      return data
    }
  ]
})

instance({
  url: '/config/post',
  method: 'post',
  data: {
    a: 1,
    c: 2
  }
}).then(res => {
  console.log(res.data)
})
