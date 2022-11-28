function callApis() {
	return {
        // anything测试接口
        anything: (params, config) => {
            return request.post('/anything', params, config);
        }
	}
}
const apis = callApis();

