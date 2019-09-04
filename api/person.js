import request from '@/utils/request'

export function unemployed() {
  return request({
    url: '/person/employed',
    method: 'get'
  })
}
export function edmit(info) {
  return request({
    url: '/person/edmit',
    method: 'get',
    params:info
  })
}
export function deleted(index) {
  return request({
    url: '/person/delete',
    method: 'post',
    index
  })
}
