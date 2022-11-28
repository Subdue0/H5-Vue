// 存放变量的容器，变量可自行添加修改
function callEnv() {
	return {
		baseURL: 'http://httpbin.org', // http测试
		// baseURL: 'http://ayanymall.com', // 正式服
		// baseURL: 'https://bfdl.weiyinstudio.com', // 测试服
		// baseURL: 'http://intelly.vip'
	}
}
const env = callEnv();
