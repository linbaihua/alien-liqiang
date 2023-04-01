import Mock from "mockjs";
import homeAPI from './mockSaveData/home';

Mock.mock('/api/home/getDate', homeAPI.getStatisticalData)
