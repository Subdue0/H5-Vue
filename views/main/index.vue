<template>
    <div class="home">
        <!--弹窗-->
        <van-popup class="b-buy-popup" v-model="isShowBuyPopup" round position="bottom">
            <div class="b-top">
                <van-image class="img-goods" src="/assets/images/list_goods/goods1.jpg" fill="cover"></van-image>
                <div class="b-right">
                    <span class="t-title">武夷老枞水仙</span>
                    <span class="t-price">￥101.00-300.00</span>
                    <span class="t-get">最高可得300积分</span>
                    <span class="t-des">秉鉴信用：订购成功<strong>+0.1</strong>，手动确定<strong>+0.1</strong></span>
                </div>
            </div>
            <div class="b-bottom">
                <div class="b-title">
                    <span class="t-title">未售订购记录</span>
                    <span class="t-des">共<strong>3</strong>条</span>
                </div>
                <div class="b-list">
                    <div class="b-item">
                        <span class="t-no">1</span>
                        <span class="t-id">A03072ARZ9</span>
                        <span class="t-price">￥139.00</span>
                        <span class="t-time">10天前</span>
                        <span class="t-status">待售出</span>
                    </div>
                    <div class="b-item">
                        <span class="t-no">2</span>
                        <span class="t-id">A03072ARZ9</span>
                        <span class="t-price">￥139.00</span>
                        <span class="t-time">10天前</span>
                        <span class="t-status">待售出</span>
                    </div>
                    <div class="b-item">
                        <span class="t-no">3</span>
                        <span class="t-id">A03072ARZ9</span>
                        <span class="t-price">￥139.00</span>
                        <span class="t-time">10天前</span>
                        <span class="t-status">待售出</span>
                    </div>
                </div>
            </div>
            <div class="btn-opt" @click="buy">马上定购</div>
        </van-popup>
        <!--顶部-->
        <div id="b-top">
            <!--顶部标题-->
            <div id="b-top-title">
                <span class="t-title">欢迎来到自贸区</span>
                <div class="b-right-btn">
                    <a href="javascript:alert('暂未开放');">
                        <img src="/assets/images/message.png">
                        <span class="t-subscript">36</span>
                    </a>
                </div>
            </div>
            <div class="b-center-info" @click="close">
                <div class="b-left">
                    <img class="img-avatar" src="/assets/images/avatar.png">
                    <span class="t-username">Sunlight_青柠</span>
                </div>
                <div class="b-right-arrow">
                    <span class="t-self">个况总览</span>
                    <img class="img-right-arrow" src="/assets/images/right_arrow.png">
                </div>
            </div>
            <div class="b-bottom-info">
                <div class="b-item" @click="close">
                    <div class="b-wrapper">
                        <span class="t-value">0</span>
                        <div class="b-bottom-label">
                            <span class="t-label">茶交子</span>
                            <img class="img-right-arrow" src="/assets/images/right_arrow_mini.png">
                        </div>
                    </div>
                </div>
                <div class="b-item" @click="close">
                    <div class="b-wrapper">
                        <span class="t-value">0</span>
                        <div class="b-bottom-label">
                            <span class="t-label">犒赉金</span>
                            <img class="img-right-arrow" src="/assets/images/right_arrow_mini.png">
                        </div>
                    </div>
                </div>
                <div class="b-item" @click="close">
                    <div class="b-wrapper">
                        <span class="t-value">0</span>
                        <div class="b-bottom-label">
                            <span class="t-label">消费金</span>
                            <img class="img-right-arrow" src="/assets/images/right_arrow_mini.png">
                        </div>
                    </div>
                </div>
                <div class="b-item" @click="close">
                    <div class="b-wrapper">
                        <span class="t-value">0</span>
                        <div class="b-bottom-label">
                            <span class="t-label">秉鉴信用</span>
                            <img class="img-right-arrow" src="/assets/images/right_arrow_mini.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!--图标式：快捷入口-->
        <div id="b-list-icon">
            <div class="b-item" v-for="(item, index) in iconsList" :key="index">
                <div class="b-warpper">
                    <router-link :to="item.path">
                        <div class="b-img-icon">
                            <img :src="item.img">
                        </div>
                        <span class="text-icon">{{ item.text }}</span>
                    </router-link>
                </div>
            </div>
        </div>
        <!--底部选项卡-->
        <div class="b-card">
            <div class="b-list-tabbar">
                <div :class="`b-item${tabIndex === 0? ' active' : ''}`" @click="switchTab(0)">
                    <span class="t-label">普通区</span>
                    <span class="t-label-en">Ordinary area</span>
                </div>
                <div :class="`b-item${tabIndex === 1? ' active' : ''}`" @click="switchTab(1)">
                    <span class="t-label">会员区</span>
                    <span class="t-label-en">Ordinary area</span>
                </div>
            </div>
            <div class="b-content">
                <div class="b-top-type">
                    <div class="b-left">
                        <div class="b-label" @click="switchSubTab(0)">
                            <span :class="`t-label${subTabIndex === 0? ' active' : ''}`">全部</span>
                            <!-- <span class="t-subscript">99</span> -->
                        </div>
                        <div class="b-label" @click="switchSubTab(1)">
                            <span :class="`t-label${subTabIndex === 1? ' active' : ''}`">可购区</span>
                            <span class="t-subscript">1</span>
                        </div>
                        <div class="b-label" @click="switchSubTab(2)">
                            <span :class="`t-label${subTabIndex === 2? ' active' : ''}`">常购区</span>
                            <!-- <span class="t-subscript">99</span> -->
                        </div>
                    </div>
                    <div class="b-right">加速排队 ></div>
                </div>
                <div class="b-list">
                    <div v-if="tabIndex === 0">
                        <div class="b-item" v-for="(item, index) in goodsList" :key="index">
                            <div class="b-top">
                                <span class="t-left-label">活动时间： {{ item.time }}</span>
                                <div class="b-right">
                                    <!-- /assets/images/avatar.png -->
                                    <img :src="item" v-for="(item, index) in item.avatarList" :key="index">
                                    <span class="t-label">{{ item.joinNum }}人参与</span>
                                </div>
                            </div>
                            <div class="b-bottom">
                                <van-image class="img-goods" :src="item.goodsImg" fill="cover"></van-image>
                                <div class="b-right">
                                    <span class="t-title">{{ item.title }}</span>
                                    <span class="t-des">{{ item.des }}</span>
                                    <span class="t-get">{{ item.points }}</span>
                                    <span class="t-price">￥{{ item.price }}</span>
                                    <div class="btn-opt" @click="buy">马上定购</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="tabIndex === 1">
                        <div class="b-item">
                            <div class="b-top">
                                <span class="t-left-label">活动时间： 15:00~17:00</span>
                                <div class="b-right">
                                    <img src="/assets/images/avatar.png">
                                    <img src="/assets/images/avatar.png">
                                    <img src="/assets/images/avatar.png">
                                    <span class="t-label">28748人参与</span>
                                </div>
                            </div>
                            <div class="b-bottom">
                                <van-image class="img-goods" src="/assets/images/list_goods/goods5.jpg" fill="cover"></van-image>
                                <div class="b-right">
                                    <span class="t-title">安化黑茶</span>
                                    <span class="t-des">安化黑茶</span>
                                    <span class="t-get">最高可得5000积分</span>
                                    <span class="t-price">￥5000.00-1000.00</span>
                                    <div class="btn-opt" @click="buy">马上定购</div>
                                </div>
                            </div>
                        </div>
                        <div class="b-item">
                            <div class="b-top">
                                <span class="t-left-label">活动时间： 10:30~12:30</span>
                                <div class="b-right">
                                    <img src="/assets/images/avatar.png">
                                    <img src="/assets/images/avatar.png">
                                    <img src="/assets/images/avatar.png">
                                    <span class="t-label">32923人参与</span>
                                </div>
                            </div>
                            <div class="b-bottom">
                                <van-image class="img-goods" src="/assets/images/list_goods/goods6.jpg" fill="cover"></van-image>
                                <div class="b-right">
                                    <span class="t-title">福鼎白茶</span>
                                    <span class="t-des">福鼎白茶</span>
                                    <span class="t-get">最高可得10000积分</span>
                                    <span class="t-price">￥2000.00-5000.00</span>
                                    <div class="btn-opt disabled" @click="buy">马上定购</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <img src="https://httpbin.org/image" alt="无记录"> -->
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    //不能使用 export default
	data() {
		return {
            iconsList: [
                {
                    path: '/icons/1',
                    text: '我的云仓',
                    img: '/assets/images/list_icons/icon1.png'
                },
                {
                    path: '/icons/2',
                    text: '订单记录',
                    img: '/assets/images/list_icons/icon2.png'
                },
                {
                    path: '/icons/3',
                    text: '经销伙伴',
                    img: '/assets/images/list_icons/icon3.png'
                },
                {
                    path: '/icons/4',
                    text: '收款方式',
                    img: '/assets/images/list_icons/icon4.png'
                },
                {
                    path: '/icons/5',
                    text: '月度任务',
                    img: '/assets/images/list_icons/icon5.png'
                },
            ],
            goodsList: [
                {
                   time: '19:00~21:00',
                   avatarList: ['/assets/images/avatar.png', '/assets/images/avatar.png', '/assets/images/avatar.png'],
                   joinNum: '1875724',
                   goodsImg: '/assets/images/list_goods/goods1.jpg',
                   title: '碧石岩',
                   des: '普通岩茶',
                   points: '最高可得300积分',
                   price: '101.00-300.00',
                },
                {
                   time: '19:00~21:00',
                   avatarList: ['/assets/images/avatar.png', '/assets/images/avatar.png', '/assets/images/avatar.png'],
                   joinNum: '1875724',
                   goodsImg: '/assets/images/list_goods/goods1.jpg',
                   title: '碧石岩',
                   des: '普通岩茶',
                   points: '最高可得300积分',
                   price: '101.00-300.00',
                },
                {
                   time: '19:00~21:00',
                   avatarList: ['/assets/images/avatar.png', '/assets/images/avatar.png', '/assets/images/avatar.png'],
                   joinNum: '1875724',
                   goodsImg: '/assets/images/list_goods/goods1.jpg',
                   title: '碧石岩',
                   des: '普通岩茶',
                   points: '最高可得300积分',
                   price: '101.00-300.00',
                }
            ],
			tabIndex: 0, // 底部标签卡
			subTabIndex: 0, // 底部子标签卡
			isShowBuyPopup: false, // 抢购弹窗
		};
	},
    mounted() {
        console.log("进入主页面");
        console.log(this.$router);
        apis.anything({
            test: 1
        }).then(res => {
            console.log(res);
        });
        // console.log(request.get('anything'));
    },
	methods: {
		buy() {
			this.isShowBuyPopup = true;
			// alert("11月16日下午2点开启预约");
		},
		// 点击底部标签卡
		switchTab(index) {
			this.tabIndex = index;
		},
		// 点击底部子标签卡
		switchSubTab(index) {
			this.subTabIndex = index;
		},
		close() {
			alert("暂未开放");
		},
	}
};
</script>

<style scoped>
body {
	background-color: #FAF8F7;
}

.b-buy-popup {
}
.b-buy-popup .b-top {
	display: flex;
	align-items: center;
	padding: 15px;
	border-bottom: 1px solid #70707033;
}
.b-buy-popup .b-top .img-goods {
	width: 120px;
	height: 120px;
}
.b-buy-popup .b-top .b-right {
	margin-left: 10px;
}
.b-buy-popup .b-top .b-right .t-title {
	display: block;
	font-weight: bold;
	color: #25365A;
	font-size: 16px;
}
.b-buy-popup .b-top .b-right .t-price {
	display: block;
	margin: 7px 0;
	font-weight: bold;
	color: #E24146;
	font-size: 18px;
}
.b-buy-popup .b-top .b-right .t-get {
	display: block;
	margin: 3px 0;
	line-height: 18px;
	color: #25365A66;
	font-size: 13px;
}
.b-buy-popup .b-top .b-right .t-des {
	display: block;
	color: #25365A66;
	font-size: 13px;
}
.b-buy-popup .b-top .b-right .t-des strong {
	color: #E24146;
	font-size: 13px;
}

.b-buy-popup .b-bottom {
	padding: 15px;
}
.b-buy-popup .b-bottom .b-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.b-buy-popup .b-bottom .b-title .t-title {
	color: #25365A;
	font-size: 15px;
}
.b-buy-popup .b-bottom .b-title .t-des {
	color: #25365A77;
	font-size: 13px;
}
.b-buy-popup .b-bottom .b-title .t-des strong {
	color: #E24146;
}
.b-buy-popup .b-bottom .b-list {
	max-height: 100px;
	overflow: scroll;
}
.b-buy-popup .b-bottom .b-list .b-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 15px 0;
	font-size: 14px;
}
.b-buy-popup .b-bottom .b-list .b-item .t-no {
	color: #25365A80;
}
.b-buy-popup .b-bottom .b-list .b-item .t-id {
	color: #25365A80;
}
.b-buy-popup .b-bottom .b-list .b-item .t-price {
	color: #E24146;
}
.b-buy-popup .b-bottom .b-list .b-item .t-time {
	color: #25365A80;
}
.b-buy-popup .b-bottom .b-list .b-item .t-status {
	color: #E24146;
}
.b-buy-popup .btn-opt {
	display: block;
	width: 80%;
	margin: 0 auto;
	padding: 13px 0;
	text-align: center;
	font-size: 12px;
	color: #FFF;
	border-radius: 99px;
	background: #FF6932;
	box-shadow: 0px 3px 36px 1px rgba(255,107,52,0.1);
}


#b-top {
	padding: 20px 10px;
	border-radius: 0px 0px 20px 20px;
	background: linear-gradient(180deg, #FFC4A9 0%, #FFFFFF 100%);
}
#b-top-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 30px 0;
}
#b-top-title .t-title {
	font-size: 20px;
	font-weight: bold;
	color: #233459;
}
#b-top-title .b-right-btn {
	position: relative;
}
#b-top-title .b-right-btn img {
	width: 30px;
	height: 30px;
}
#b-top-title .b-right-btn .t-subscript {
	position: absolute;
	top: -10px;
	right: -8px;
	padding: 2px 6px;
	font-size: 12px;
	color: #FFF;
	border-radius: 20px;
	background-color: #E24146;
}
.b-center-info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 30px 0;
	padding: 10px;
	background: rgba(255,255,255,0.3);
	box-shadow: 17px 29px 51px 1px rgba(251,190,162,0.29);
	border-radius: 18px 18px 18px 18px;
	opacity: 1;
	border: 2px solid rgba(255,255,255,0.97);
}
.b-center-info .b-left {
	display: flex;
	align-items: center;
}
.b-center-info .b-left .img-avatar {
	width: 60px;
	height: 60px;
}
.b-center-info .b-left .t-username {
	margin-left: 5px;
	font-size: 18px;
	font-weight: bold;
	color: #25365A;
}
.b-center-info .b-right-arrow {
	display: flex;
	align-items: center;
}
.b-center-info .b-right-arrow .t-self {
	margin-right: 5px;
	font-size: 13px;
	color: #999;
}
.b-center-info .b-right-arrow .img-right-arrow {
	width: 9px;
	height: 15px;
}
.b-bottom-info {
	overflow: hidden;
}
.b-bottom-info .b-item {
	float: left;
	display: inline-block;
	width: 25%;
}
.b-bottom-info .b-item:nth-child(1) .b-wrapper {
	box-shadow: -3px -4px 0px 1px #FFFFFF;
	background: linear-gradient(314deg, #654CE0 0%, #9A90E3 100%);
}
.b-bottom-info .b-item:nth-child(2) .b-wrapper {
	box-shadow: -3px -4px 0px 1px #FFFFFF;
	background: linear-gradient(132deg, #FF8585 0%, #F9C3C2 10%, #FF6161 100%);
}
.b-bottom-info .b-item:nth-child(3) .b-wrapper {
	box-shadow: -3px -4px 0px 1px #FFFFFF;
	background: linear-gradient(314deg, #4E6AE7 0%, #ADBCFF 100%);
}
.b-bottom-info .b-item:nth-child(4) .b-wrapper {
	box-shadow: -3px -4px 0px 1px #FFFFFF;
	background: linear-gradient(314deg, #FF6932 0%, #F6A487 100%);
}
.b-bottom-info .b-item .b-wrapper {
	margin: 5px;
	padding: 10px 5px;
	border-radius: 10px;
}
.b-bottom-info .t-value {
	font-size: 1rem;
	color: #FFF;
}
.b-bottom-info .b-bottom-label {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.b-bottom-info .b-bottom-label .t-label {
	font-size: 0.6rem;
	color: #FFFFFFBB;
}
.b-bottom-info .b-bottom-label .img-right-arrow {
	width: 20px;
	height: 20px;
}




#b-list-icon {
	width: 100%;
	*zoom: 1;
	overflow: hidden;
	margin: 20px 0;
	padding: 10px 0;
	background-color: #FFF;
	border-radius: 20px;
}
#b-list-icon:before,
#b-list-icon:after {
	content: "";
	display: table;
	clear: both;
}
#b-list-icon .b-item {
	float: left;
	display: inline-block;
	width: 20%;
	text-align: center;
}
#b-list-icon .b-item .b-warpper {
	display: inline-block;
	margin: 1rem;
	text-align: center;
}
#b-list-icon .b-item .b-warpper a {
	text-decoration:none;
}
#b-list-icon .b-item .b-warpper .b-img-icon {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 100%;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	background-color: #FFF;
}
#b-list-icon .b-item .b-warpper .b-img-icon img {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	width: 100%;
	height: 100%;
}
#b-list-icon .b-item .b-warpper .text-icon {
	display: block;
	width: 3rem;
	margin-top: 0.5rem;
	font-size: 0.7rem;
	color: #25365A;
}


.b-card {
	padding: 10px 0;
	border-radius: 20px;
	background-color: #FFF;
}
.b-card .b-list-tabbar {
	overflow: hidden;
}
.b-card .b-list-tabbar .b-item {
	position: relative;
	float: left;
	display: inline-block;
	width: 50%;
	padding: 10px 0;
	text-align: center;
	color: #25365A;
}
.b-card .b-list-tabbar .b-item::before {
	content: '';
	display: inline-block;
	width: 1px;
	height: 50%;
	position: absolute;
	background: #ccc;
	top: 50%;
	transform: translateY(-50%);
	right: 0;
}
.b-card .b-list-tabbar .b-item:last-child::before {
	display: none;
}
.b-card .b-list-tabbar .b-item.active {
	color: #FE6F3B;
}
.b-card .b-list-tabbar .b-item.active::after {
	content: '';
	display: inline-block;
	width: 30px;
	height: 3px;
	position: absolute;
	background-color: #FE6F3B;
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
}
.b-card .b-list-tabbar .b-item .t-label-en {
	display: block;
	position: relative;
	font-size: 13px;
}
.b-card .b-list-tabbar .b-item .t-label {
	display: block;
	position: relative;
	font-size: 17px;
	font-weight: bold;
}




.b-card .b-content {
}
.b-card .b-content .b-top-type {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0;
	padding: 0 20px;
}
.b-card .b-content .b-top-type .b-left {
}
.b-card .b-content .b-top-type .b-left .b-label {
	position: relative;
	display: inline-block;
	margin: 0 5px;
}
.b-card .b-content .b-top-type .b-left .b-label .t-subscript {
	position: absolute;
	top: -15px;
	right: 0;
	padding: 2px 6px;
	font-size: 12px;
	color: #FFF;
	border-radius: 99px;
	background-color: #E24146;
}
.b-card .b-content .b-top-type .b-left .b-label .t-label {
	padding: 5px 10px;
	font-size: 13px;
	color: #25365A;
	border-radius: 99px;
	background-color: #25365A22;
}
.b-card .b-content .b-top-type .b-left .t-label.active {
	color: #FE6E39;
	background-color: #FE6E3933;
}
.b-card .b-content .b-top-type .b-right {
	font-size: 13px;
	color: #25365A;
}

.b-card .b-content .b-list {}
.b-card .b-content .b-list .b-item {
	margin: 10px;
	border-radius: 20px;
	background-color: #25365A11;
}
.b-card .b-content .b-list .b-item .b-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	border-bottom: 1px solid #25365A11;
}
.b-card .b-content .b-list .b-item .b-top .t-left-label {
	font-size: 12px;
}
.b-card .b-content .b-list .b-item .b-top .b-right {}
.b-card .b-content .b-list .b-item .b-top .b-right img {
	position: relative;
	width: 20px;
	height: 20px;
	margin-left: -15px;
	vertical-align: middle;
}
.b-card .b-content .b-list .b-item .b-top .b-right img:nth-child(1) {
	z-index: 3;
}
.b-card .b-content .b-list .b-item .b-top .b-right img:nth-child(2) {
	z-index: 2;
}
.b-card .b-content .b-list .b-item .b-top .b-right img:nth-child(3) {
	z-index: 1;
}
.b-card .b-content .b-list .b-item .b-top .b-right .t-label {
	font-size: 12px;
}

.b-card .b-content .b-list .b-item .b-bottom {
	display: flex;
	align-items: center;
	padding: 10px;
}
.b-card .b-content .b-list .b-item .b-bottom .img-goods {
	width: 120px;
	height: 120px;
}
.b-card .b-content .b-list .b-item .b-bottom .b-right {
	margin-left: 10px;
	font-size: 1rem;
}
.b-card .b-content .b-list .b-item .b-bottom .b-right .t-title {
	display: block;
	font-size: 16px;
	font-weight: bold;
	color: #25365A;
}
.b-card .b-content .b-list .b-item .b-bottom .b-right .t-des {
	display: block;
	font-size: 13px;
	color: #25365A66;
}
.b-card .b-content .b-list .b-item .b-bottom .b-right .t-get {
	display: block;
	font-size: 13px;
	color: #25365A66;
}
.b-card .b-content .b-list .b-item .b-bottom .b-right .t-price {
	display: block;
	line-height: 40px;
	font-size: 18px;
	font-weight: bold;
	color: #E24146;
}
.b-card .b-content .b-list .b-item .b-bottom .b-right .btn-opt {
	display: inline-block;
	padding: 6px 20px;
	font-size: 12px;
	color: #FFF;
	background: linear-gradient(306deg, #FF6932 0%, #F6A487 100%);
	border-radius: 100px 100px 100px 100px;
}
.b-card .b-content .b-list .b-item .b-bottom .b-right .btn-opt.disabled {
	pointer-events: none;
	cursor: default;
	opacity: 0.6;
}
</style>
