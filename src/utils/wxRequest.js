import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async (params = {}, url) => {
  tip.loading();
  let data = params.query || {};
  data.token = "1b35d1d2cfcd57d6c5d984432ea5b488";
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
  });
  tip.loaded();
  return res;
};


module.exports = {
  wxRequest
}
