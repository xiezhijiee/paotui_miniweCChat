//新版用户登录
const jobInfo = "/api/lab/job/info"


/**
 * 简历相关api
 */

const install = (Vue, vm) => {
	const createGetApi = (pash) => {
		return (params = {}) => vm.$u.get('/api' + pash, params);
	}
	const createPostApi = (pash) => {
		return (params = {}) => vm.$u.post('/api' + pash, params);
	}
	// 此处没有使用传入的params参数
	//get


	//post
	// let getYzzzzkzDX = (params = {}) => vm.$u.post(yzzzzkzDX, params); //短信接口
	


	let uploadImg = (filePath, formData = {}, name = 'file') => {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: vm.$u.http.config.baseUrl + imgUpload, //仅为示例，非真实的接口地址
				filePath: filePath,
				name: name,
				header: {
					token: uni.getStorageSync('token')
				},
				formData: formData,
				success: (uploadFileRes) => {
					uploadFileRes.data && resolve(JSON.parse(uploadFileRes.data))
				},
				fail: (error) => {
					reject(error)
				}
			});
		})
	}


	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	//put
	vm.$u.api = {
		
	};
}
export default {
	install
}