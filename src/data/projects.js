import { commercialProjects } from './commercial'
import { residentialProjects } from './residential'

// 각각의 데이터 다시 export
export { commercialProjects, residentialProjects }

// 전체 프로젝트 배열 (상업 + 주거)
export const allProjects = [...commercialProjects, ...residentialProjects]

// 메인 화면 노출용: mainOrder가 숫자로 지정된 것만 오름차순(1 -> 2 -> 3...) 정렬
export const mainProjects = allProjects
  .filter((project) => typeof project.mainOrder === 'number')
  .sort((a, b) => a.mainOrder - b.mainOrder)

// 기존 Works.vue가 `import { projects } from '@/data/projects'`를 사용하므로
// 이름 호환성을 위해 projects를 mainProjects로 매핑하여 내보냄
export const projects = mainProjects
