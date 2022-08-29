import { defHttp } from '/@/utils/http/axios';

enum Api {
  decisionPlanList = '/decision/plan',
  deptList = '/decision/deptList',
  capacityList = '/decision/capacityList',
  sensitiveSideList = '/decision/sensitiveSideList',
  sensitiveList = '/decision/sensitiveList',
  boundaryList = '/decision/boundaryList',
}

/**
 * @description: Get user menu based on id
 */

export const getDecisionPlanList = () => {
  return defHttp.get({ url: Api.decisionPlanList });
};
export const getDeptList = () => {
  return defHttp.get({ url: Api.deptList });
};
export const getSensitiveSideList = () => {
  return defHttp.get({ url: Api.sensitiveSideList });
};
export const getSensitiveList = () => {
  return defHttp.get({ url: Api.sensitiveList });
};
export const getCapacityList = () => {
  return defHttp.get({ url: Api.capacityList });
};
export const getBoundaryList = () => {
  return defHttp.get({ url: Api.boundaryList });
};
