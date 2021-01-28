import CryptoJS from 'crypto-js'

const encryptByDES = function (string, key) {
	let ckey = CryptoJS.enc.Utf8.parse(key);
	let encrypted = CryptoJS.AES.encrypt(string, ckey, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});

	return encrypted.ciphertext.toString(); // 返回hex格式的密文
}
let c = Date.parse(new Date())
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'https://tt.6vapp.com', //测试环境
		// baseUrl: 'https://www.lianshoulab.com', //正式环境
		loadingText: '请求中...',
		loadingTime: 10,
		header: {
			'content-type': 'application/json;charset=UTF-8'
		},
		showLoading: true,
		loadingTime: 200

	});

	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		//加密
		// if (Vue.$store && Vue.$store.state.realUserInfo.nickName) {
		// 	let codeKey = encryptByDES(Date.parse(new Date()).toString() + Vue.$store.state.realUserInfo.nickName, 'd6b423c50b8429e9')
		// 	config.header['lianshoulab'] = codeKey;
		// } else {
		// 	let codeKey = encryptByDES(Date.parse(new Date()).toString() + "", 'd6b423c50b8429e9')
		// 	config.header['lianshoulab'] = codeKey;
		// }
		
		
		
		// await
		// vm.$u.toast("哈哈哈哈哈啊哈哈哈哈")
		// config = {
		// 	baseUrl: 'http://192.168.102.243:8080', // 请求的本域名
		// 	method: 'POST',
		// 	// 设置为json，返回后会对数据进行一次JSON.parse()
		// 	dataType: 'json',
		// 	showLoading: true, // 是否显示请求中的loading
		// 	loadingText: '请求中...', // 请求loading中的文字提示
		// 	loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
		// 	originalData: false, // 是否在拦截器中返回服务端的原始数据
		// 	loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		// 	// 配置请求头信息
		// 	header: {
		// 		'Content-Type': 'multipart/form-data; boundary=something'
		// 	},
		// // confi
		// if (config.url == "/lslab/sms/send/bind_user") {
		// 	config.header = {
		// 		'Content-Type': 'application/x-www-form-urlencoded'
		// 	}
		// }
		// if (config.url == "/lslab/sms/update/define_phone" || config.url == "/lslab/sms/change/phone") {
		// 	config.header = {
		// 		'Content-type': 'application/json;charset=UTF-8'
		// 	}
		// }

		if (config.url == '/api/user/invitelist' 
			// config.url == '/api/lab/job/companyjoblist'


		) {

			if (config.url === '/api/lab/job/add') {}
			const token = uni.getStorageSync('token');
			if (token) {
				config.header['token'] = token;
			}


		}
		// }
		// 引用token
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
		// 见：https://uviewui.com/components/globalVariable.html
		// config.header.token = vm.token;

		// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
		// config.header.token = vm.$store.state.token;

		// 方式三，如果token放在了globalData，通过getApp().globalData获取
		// config.header.token = getApp().globalData.username;

		// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的
		// 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		// const token = uni.getStorageSync('token');
		// config.header.token = token;
		// config.header.Token = 'xxxxxx';

		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
		if (config.url == '/api/lab/project_info/list' || config.url == '/api/lab/course/list') {
			// config.showLoading = true;
			// console.log(config)
			Vue.prototype.$u.http.config.showLoading = false

		} else {
			Vue.prototype.$u.http.config.showLoading = true
		}
		// 最后需要将config进行return
		// return config;
		// console.log(config)
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	}

	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		// console.log(res, "返回的数据")
		// console.log(typeof res,"xzj")
		// if (res.code == 1) {
		// 	// vm.$u.toast(res.message)
		// 	// res为服务端返回值，可能有code，result等字段
		// 	// 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
		// 	// 如果配置了originalData为true，请留意这里的返回值
		// 	// console.log(typeof res,"xzj")

		// 	if (res.data === "" || res.data === null) {
		// 		return res.code;
		// 	} else {
		// 		return res.data;
		// 	}


		// } else if (res.code == 201) {
		// 	// 假设201为token失效，这里跳转登录
		// 	vm.$u.toast(res.message)
		// 	setTimeout(() => {}, 1500)
		// 	return false;
		// } else if (res.code == 40301) {
		// 	vm.$u.toast(res.message, 3000)
		// 	uni.clearStorage()
		// 	getApp().globalData.userInfo = ""
		// 	return res.content
		// } else if (res.code == 40009) {
		// 	vm.$u.toast(res.message, 3000)
		// 	return res.content
		// } else if (res.code == 40005) {
		// 	vm.$u.toast("请刷新重试", 3000)
		// 	return res.content;
		// } else {
		// 	vm.$u.toast(res.msg, 3000)
		// 	return res.content;
		// }
	}
}

export default {
	install
}