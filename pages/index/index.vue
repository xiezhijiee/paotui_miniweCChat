<template>
	<view class="content">
		<view :style="{ height: CustomBar + 'px', backgroundColor: '#6e1cc1' }" v-if="!inSidePage">
			<view class="bar_cur" :style="{ height: CustomBar + 'px', paddingTop: StatusBar + 'px' }">
				<view class="returnTeam"  >
				 <!-- <u-icon name="photo"  color="#2979ff" size="28" ></u-icon> -->
				 <image src="../../static/logo.png" style="width: 50rpx; height: 50rpx;" mode=""></image>
				</view>
			</view>
		</view>
		<u-icon name="photo"  color="#2979ff" size="28" ></u-icon>
	</view>
</template>

<script>
	let app=getApp()
	export default {
		data() {
			return {
				title: 'Hello',
				CustomBar:app.globalData.CustomBar,
				StatusBar:app.globalData.StatusBar
			}
		},
		onLoad() {
			console.log(this.$u.api,"123");
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
/* 自定义导航栏 */
.bar_cur {
	z-index: 20;
	padding-left: 32rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	
	.returnTeam {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		padding-right: 32rpx;
	}
	
	.backTeamClass {
		vertical-align: -13rpx;
		width: 64rpx;
		height: 64rpx;
	}
}


</style>
