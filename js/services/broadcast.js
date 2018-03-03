import { request, config } from '../utils'
const { api } = config
const { broadcastBanner, broadcastRecommendLabels, broadcastList } = api

export async function getBanner (params) {
  return request({
    url: broadcastBanner,
    method: 'get',
    data: params,
  })
}

export async function getRecommendLabels (params) {
  return request({
    url: broadcastRecommendLabels,
    method: 'get',
    data: params,
  })
}

export async function getList (params) {
  return request({
    url: broadcastList,
    method: 'get',
    data: params,
  })
}
