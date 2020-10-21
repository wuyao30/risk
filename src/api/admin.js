import request from '@/utils/request'
// 返回部门列表
export function departmentList(data) {
  return request({
    url: '/user/deplist',
    method: 'get'
  })
}

export function userPage(data) {
  return request({
    url: '/user/userpage',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: '/user/updateonedetail',
    method: 'post',
    data
  })
}

export function deleteUser(data) {
  return request({
    url: '/user/deluser',
    method: 'post',
    data
  })
}
export function addUser(data) {
  return request({
    url: '/user/adduser',
    method: 'post',
    data
  })
}

export function queryColumn(data) {
  return request({
    url: '/examine/columnshow',
    method: 'post',
    data
  })
}

export function updateColumn(data) {
  return request({
    url: '/examine/updatecolumn',
    method: 'post',
    data
  })
}

export function getRecord(data) {
  return request({
    url: '/resshow/allfillpage',
    method: 'post',
    data
  })
}

export function getRecordNoPage(data) {
  return request({
    url: '/resshow/allfillexcel',
    method: 'post',
    data
  })
}

export function downloadSummaryTable(data) {
  return request({
    url: '/resshow/downlownd',
    method: 'post',
    data
  })
}

export function downloadAll(data) {
  return request({
    url: '/resshow/downlownd',
    method: 'post',
    data
  })
}

export function getMonthReport(data) {
  return request({
    url: '/resshow/allwritepage',
    method: 'post',
    data
  })
}
export function secAdminGetUserPage(data) {
  return request({
    url: '/user/depuserpage',
    method: 'post',
    data
  })
}

export function adminAuthority(data) {
  return request({
    url: '/access/accesspage',
    method: 'post',
    data
  })
}

export function getAllWorkCode() {
  return request({
    url: '/home/allWorkCode',
    method: 'get'
  })
}
export function adminUpdateUserAccess(data) {
  return request({
    url: '/access/upadteaccess',
    method: 'post',
    data
  })
}

export function adminDeleteUserAccess(data) {
  return request({
    url: '/access/delaccess',
    method: 'post',
    data
  })
}
export function secAdminGetUserAccess(data) {
  return request({
    url: '/access/accessdeppage',
    method: 'post',
    data
  })
}

export function getDepartmentRecord(data) {
  return request({
    url: '/resshow/depallfill',
    method: 'post',
    data
  })
}
export function updateDepAuthority(data) {
  return request({
    url: '/examine/addrelation',
    method: 'post',
    data
  })
}
export function queryMyRecord(data) {
  return request({
    url: '/examine/myrecord',
    method: 'post',
    data
  })
}
export function queryMyMonthRecord(data) {
  return request({
    url: '/examine/merecord',
    method: 'post',
    data
  })
}

export function queryDepartWrite(data) {
  return request({
    url: '/resshow/depallwrite',
    method: 'post',
    data
  })
}

export function queryDistrictWrite(data) {
  return request({
    url: '/resshow/disallwrite',
    method: 'post',
    data
  })
}

export function queryDistrictWritePage(data) {
  return request({
    url: '/resshow/diswritepage',
    method: 'post',
    data
  })
}

export function getMyDepartment(data) {
  return request({
    url: '/resshow/depallfill',
    method: 'post',
    data
  })
}
export function getMyDepartmentPage(data) {
  return request({
    url: '/resshow/depallfillpage',
    method: 'post',
    data
  })
}

export function getDepartColumnName() {
  return request({
    url: '/resshow/allname',
    method: 'get'
  })
}
export function downloadNewDepartMonth(data) {
  return request({
    url: '/resshow/depallwriteexcel',
    method: 'post',
    data
  })
}

export function downloadNewDistrictMonth(data) {
  return request({
    url: '/resshow/disallwriteexcel',
    method: 'post',
    data
  })
}

export function getRiskColumnName() {
  return request({
    url: '/resshow/eventname',
    method: 'get'
  })
}

export function getRiskSummary(data) {
  return request({
    url: '/userrisk/getriskdetails',
    method: 'post',
    data
  })
}
export function halfyear(data) {
  return request({
    url: '/examine/check',
    method: 'post',
    data
  })
}
export function departmentUploadHalfyear(data) {
  return request({
    url: '/examine/checkrecord',
    method: 'post',
    data
  })
}
