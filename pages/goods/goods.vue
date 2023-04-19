<template>
	<view class="goods_list">
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		<!-- 设置底线 -->
		<view class="isOver" v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false
			}
		},
		components: {"goods-list":goodsList},
		methods: {
			// 获取商品列表数据
			async getGoodsList(callBack) {
				const res = await this.$myRuquest({
					url: '/goods/search?pageindex='+this.pageindex
				})
				// console.log(res)
				//数据叠加
				this.goods = [...this.goods,...res.data.message.goods]
				callBack && callBack()
			},
			// 导航到商品详情页
			goGoodsDetail (id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id='+id
				})
			}
		},
		onLoad () {
			this.getGoodsList()
		},
		//触底加载
		onReachBottom() {
			//判断是否还有数据
			if(this.goods.length<this.pageindex*10) return this.flag = true
			//获取第二页数据
			this.pageindex++
			this.getGoodsList()
		},
		//上拉刷新，初始化
		onPullDownRefresh() {
			console.log('下拉刷新了')
			this.pageindex = 1
			this.goods = []
			this.flag = false
			//重新获取数据并设置刷新时间
			setTimeout(()=>{
			  this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})	
			},1000)
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;;
	}
	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		// background: #fff;
		font-size: 28rpx;
	}
</style>
