
/**
全局分享页面
**/
module.exports = {

	onLoad() {
	},
	methods:{

	},
	onShow() {
		let pages = getCurrentPages();
		// console.log(pages, "xiexiexie")
		if (pages.length === 0) return
		this.$u.pageRouter = (pages[pages.length - 1]).route

		switch (this.$u.pageRouter) {
			case 'pages/Ccac/projectDetails/projectDetails':
				// console.log('进')
				this.$u.mpShare = {
					title: ``, // 默认为小程序名称
					path: ``, // 默认为当前页面路径
					// imageUrl: '' ,// 默认为当前页面的截图
					imageUrl: 'http://tt.6vapp.com/img/shareProimg.png' // 默认为当前页面的截图
				}
				break;
			default:
				// console.log("出")
				this.$u.mpShare = {
					title: '感知职业，和小伙伴一起做项目吧~', // 默认为小程序名称
					path: ``, // 默认为当前页面路径
					imageUrl: 'http://tt.6vapp.com/img/shareBgImng.png' // 默认为当前页面的截图
				}



		}
	},
	onShareAppMessage() {
		return this.$u.mpShare
	}
}
