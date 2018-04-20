import {
  wxRequest
} from '../utils/wxRequest';
import wepy from 'wepy';

let env = "-test" //-dev 或者 -test
let token = '1b35d1d2cfcd57d6c5d984432ea5b488';
const community = 'https://community.yzrom.com';
const flzsYzrom = 'https://flzs.yzrom.com';
const mgYzromCom = 'https://mg.yzrom.com';
const rootFans = "https://www.rootfans.com";

/**
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */

//登录
const login = async (params) => {
  let res = await wxRequest(params, community + '/index.php?m=Api&c=Account&a=login')
  return res;
};
// 获取敏感文案
const sensitivityStr = (params) => wxRequest(params, flzsYzrom + '/index.php/api/Getyq/arr_strs');
// 获取小区用户信息
const getUserInfoInguid = (params) => wxRequest(params, community + '/index.php?m=Api&c=Area&a=area');
// 获取小区指南信息
const getGuideInfo = (params) => wxRequest(params, community + '/index.php?m=Api&c=Area&a=server_type');
// 上传用户的聊天记录
const uploadUserChat = (params) => wxRequest(params, community + '//index.php?m=Api&c=Search&a=upload');
// 获取用户聊天记录
const downloadUserChat = (params) => wxRequest(params, community + '/index.php?m=Api&c=Search&a=download');
// 获取问候语文案
const getWelmsg = (params) => wxRequest(params, rootFans + '/api/welmsg?sex=');
// 获取教程文案
const getTutorials = (params) => wxRequest(params, community + '/index.php?m=Api&c=search&a=tutorials');
// 粘贴板内容请求
const getClipboardData = (params) => wxRequest(params, community + '/index.php?m=Api&c=search&a=index');
// 用户发送文案请求内容
const getUserSearch = (params) => wxRequest(params, community + '//index.php?m=Api&c=search&a=index');
module.exports = {
  token,
  login,
  sensitivityStr,
  getUserInfoInguid,
  getGuideInfo,
  uploadUserChat,
  downloadUserChat,
  getWelmsg,
  getTutorials,
  getClipboardData,
  getUserSearch
}
