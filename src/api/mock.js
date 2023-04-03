import Mock from 'mockjs'
import homeAPI from './mockSaveData/home'
import user from './mockSaveData/user'
import permission from './mockSaveData/permission'

Mock.mock('/api/home/getDate', homeAPI.getStatisticalData)

// 用户列表的数据
Mock.mock('/api/user/add', 'post', user.createUser)
Mock.mock('/api/user/edit', 'post', user.updateUser)
Mock.mock('/api/user/del', 'post', user.deleteUser)
Mock.mock(/api\/user\/getUser/, user.getUserList)

// 账号
Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)
