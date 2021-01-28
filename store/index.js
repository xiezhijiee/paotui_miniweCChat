import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++
		}
	},
	actions: {
		getPhoneInfo({ //获取手机信息
		}) {
			wx.getSystemInfo({
				success: (e) => {
					getApp().globalData.StatusBar = e.statusBarHeight;
					let capsule = wx.getMenuButtonBoundingClientRect();
					if (capsule) {
						getApp().globalData.displayArea = {
							windowHeight: e.windowHeight,
							windowWidth: e.windowWidth,
							screenHeight: e.screenHeight,
						};
						getApp().globalData.Custom = capsule;
						getApp().globalData.CustomBar =
							//胶囊顶边
							capsule.bottom + capsule.top - e.statusBarHeight;
					} else {
						getApp().globalData.CustomBar = e.statusBarHeight + 50;
					}
				},
			});
		},
	}

})


export default store;
