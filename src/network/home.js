import {request} from './index'


export function getData() {
  // 這邊記得return
  return request({
    url: "/air"
  })
}