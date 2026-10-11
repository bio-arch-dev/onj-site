import { commercialProjects } from './commercial'
import { residentialProjects } from './residential'
import { medicalProjects } from './medical'
import { publicProjects } from './public'

export {
  commercialProjects,
  residentialProjects,
  medicalProjects,
  publicProjects,
}

// 전체 합본
export const allProjects = [
  ...medicalProjects,
  ...publicProjects,
  ...commercialProjects,
  ...residentialProjects,
]

// 메인 노출용: mainOrder가 숫자인 것만 오름차순(1 -> 2 -> 3...) 정렬
export const mainProjects = allProjects
  .filter((project) => typeof project.mainOrder === 'number')
  .sort((a, b) => a.mainOrder - b.mainOrder)

// 기존 Works.vue 하위 호환
export const projects = mainProjects
