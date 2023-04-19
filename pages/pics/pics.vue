<template>
	<view class="pics">
		<!-- 可滚动的左侧区域 -->
		 <!-- scroll-y设置垂直滚动 -->
		<scroll-view class="left" scroll-y>
			<!-- active控制高亮 -->
			<view 
			@click="leftClickHandle(index,item.cat_id)"
			:class="active===index?'active':''" 
			v-for="(item,index) in cates" 
			:key="item.cat_id">
			  {{item.cat_name}}
			</view>
		</scroll-view>
		
		<!-- 右侧区域 -->
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.cat_id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<text>{{item.cat_name}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondData: []
			}
		},
		methods: {
			async getPicsCate () {
				const res = await this.$myRuquest({
					url: '/categories'
				})
				console.log(res)
				this.cates = res.data.message
				//默认先获取第一个分类的内容
				this.leftClickHandle(0,this.cates[0].cat_id)
			},
			async leftClickHandle (index,cat_id) {
				//通过active控制高亮
				this.active = index
				// 获取右侧的数据
				console.log(cat_id)
				const res = await this.$myRuquest({
					url: '/goods/search?cid='+cat_id
				})
				console.log(res)
				this.secondData = res.data.message
			},
			//图片预览，数组的每一项是当前图片的地址
			previewImg (current) {
				//将item.img_url赋值给urls
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				//预览方法传递参数，当前页面为current
				uni.previewImage({
					current,
					urls
				})
			}
		},
		
		onLoad () {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
// 初始化样式
page{
	height: 100%;
}
.pics{
	height: 100%;
	display: flex;
	.left{
		width: 200rpx;
		height: 100%;
		border-right:1px solid #eee;
		view{
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top:1px solid #eee;
		}
		.active{
			background: $shop-color;
			color: #fff;
		}
	}
	.right{
		height: 100%;
		width: 520rpx;
		margin: 10rpx auto;
		.item{
			image{
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
