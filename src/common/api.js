import Axios from "axios";

export default {
  //查询钱包列表
  list: function () {
    return Axios.get("/moon-server/api/wallets/list");
  },
  //推荐码生成
  recommendation: function () {
    return Axios.get("/moon-server/api/task/recommendation");
  },
  //每日任务
  dailytasks: function () {
    return Axios.get("/moon-server/api/task/daily-tasks");
  },
  //全部任务列表以及完成查询
  tasklist: function () {
    return Axios.get("/moon-server/api/task/task-list");
  },
  //邀请人以及收益查询
  invitations: function () {
    return Axios.get("/moon-server/api/task/invitations");
  },
  //积分列表
  points: function () {
    return Axios.get("/moon-server/api/task/points");
  },
  //积分排行榜
  ranking: function () {
    return Axios.get("/moon-server/api/task/ranking");
  },
  //限价订单查询接口
  limitorderslist: function () {
    return Axios.get("/moon-server/api/trade/limit-orders-list");
  },
  //交易列表查询接口
  tradelist: function () {
    return Axios.get("/moon-server/api/trade/list");
  },
  //用户注册接口
  register: function (data) {
    return Axios.post("/moon-server/api/user/register", data);
  },
  //用户登录接口
  login: function (data) {
    return Axios.post("/moon-server/api/user/login", data);
  },
  //快捷登录接口
  quicklogin: function (data) {
    return Axios.post("/moon-server/api/user/quick-login", data);
  },
  //修改密码接口
  changepassword: function (data) {
    return Axios.post("/moon-server/api/user/change-password", data);
  },
  //重置密码接口
  resetpassword: function (data) {
    return Axios.post("/moon-server/api/user/reset-password", data);
  },
  //创建钱包
  create: function (data) {
    return Axios.post("/moon-server/api/wallets/create", data);
  },
  //关联钱包
  link: function (data) {
    return Axios.post("/moon-server/api/wallets/link", data);
  },
  //修改钱包昵称
  name: function (data) {
    return Axios.post("/moon-server/api/wallets/name", data);
  },
  //用户签到
  checkin: function (data) {
    return Axios.post("/moon-server/api/task/check-in", data);
  },
  //限价订单生成接口
  limitorder: function (data) {
    return Axios.post("/moon-server/api/trade/limit-order", data);
  },
  //代币交易接口
  deal: function (data) {
    return Axios.post("/moon-server/api/trade/deal", data);
  },
  //持仓列表查询接口
  positions: function (data) {
    return Axios.post("/moon-server/api/trade/positions", data);
  },
  //持仓收益查询接口
  profit: function (data) {
    return Axios.post("/moon-server/api/trade/profit", data);
  },
  //发送验证码接口
  sendverify: function (data) {
    return Axios.post("/moon-server/api/user/send-verify-code", data);
  },
};
