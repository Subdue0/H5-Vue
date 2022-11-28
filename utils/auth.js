function callAuth() {
	// 设定token键名
	const TokenKey = 'token';
	return {
		// 获取token
		getToken: () => {
			return localStorage.getItem(TokenKey); 
		},
		// 设定token
		setToken: () => {
			return localStorage.setItem(TokenKey, token); 
		},
		// 移除token
		removeToken: () => {
			return localStorage.removeItem(TokenKey); 
		},
	}
}

const auth = callAuth();