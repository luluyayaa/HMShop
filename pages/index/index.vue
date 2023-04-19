<template>
	<view class="home">
		<!-- 轮播图 -->
		<!-- circular循环滑动,indicator-dots 标签点 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.goods_id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	// 封装商品列表
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [
					{
						icon: 'iconfont icon-ziyuan',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		components: {"goods-list":goodsList},
		methods: {
			// 获取轮播图的数据
			async getSwipers () {
				const res = await this.$myRuquest({
					url: '/home/swiperdata',
				})
				//对于返回的res都打印一下，确定返回的是什么，以控制台输出为准
				// console.log(res)
				this.swipers = res.data.message
			},
			// 获取热门商品列表数据
			async getHotGoods () {
				const res = await this.$myRuquest({
					url: '/goods/search?pagenum=1'
				})
				// console.log(res)
				this.goods = res.data.message.goods
			},
			// 导航点击的处理函数
			navItemClick (url) {
				uni.navigateTo({
					url
				})
			},
			// 导航到商品详情页
			goGoodsDetail (goods_id) {
				uni.navigateTo({
					url: '/goods/detail?goods_id='+goods_id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			// ipone6中750rpx正好为375px
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
		.nav {
			display: flex;
			.nav_item {
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}
				.icon-tupian{
					font-size: 45rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
		}
		
	}
</style>
