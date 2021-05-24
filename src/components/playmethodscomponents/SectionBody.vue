<template>
	<div class="text-center mb-5">
		<div class="container">
			<div class="col-12 text-center">
				<div class="mt-5">
					<b-img :src=logochild style="height:30px;width:175px;"></b-img>
				</div>
				<div class="mt-3">
					<transition name="mytext" mode="out-in">
						<div key="textindex" v-if="textindex">
							<div>
								<h2>{{methodsindex}}</h2>
							</div>
						</div>
						<div key="texttwo" v-if="texttwo">
							<div>
								<h2>{{methodstwo}}</h2>
							</div>
						</div>
					</transition>
					<transition name="mybutton" mode="out-in">
						<div key="showbacktwo" v-if="showbacktwo" @click=back() variant="white">
							<b-icon></b-icon>
						</div>
						<div key="showback" @click=back() v-if="showback" variant="white" class="mousepoint">
							<b-icon icon="arrow-left-circle"></b-icon>
						</div>
					</transition>
					<transition name="mysectionchild" mode="out-in">
						<div key="showindex" v-if="showindex">
							<sectionbodychild @click.native="change(index)" v-for="(value, index) in playmethods"
								:key=index :data=value></sectionbodychild>
						</div>
						<div key="showtwo" v-if="showtwo">
							<sectionbodychild @click.native="change(index)" v-for="(value, index) in platform"
								:key=index :data=value></sectionbodychild>
						</div>
					</transition>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="text-center overflow-auto col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div @click=changedirection()>
					<b-button class="mt-5 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" v-b-toggle.collapse-1
						style="background:#f1edec;color:black">平台 & 特色对比<b-icon class="float-right mt-1" :icon=updown>
						</b-icon>
					</b-button>
				</div>
				<b-collapse id="collapse-1">
					<table class="table col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style="background:#f1edec;">
						<thead>
							<tr>
								<th></th>
								<th colspan="2" class="thead">桌面系统</th>
								<th colspan="2" class="thead">移动平台</th>
								<th colspan="4" class="thead">新版主机</th>
							</tr>
							<tr style="font-size:12px;color:#36b030">
								<td style="color:black">可用于:</td>
								<td class="routerborderset" @click="$emit('work')">
									<router-link to="/playmethods/javaversion"
										style="font-size:12px;color:#36b030;text-decoration:none;">
										windows，Mac，Linux(Java 版本)</router-link>
								</td>
								<td style="border-right: 8px solid #f8f5f4;">Windows 10</td>
								<td>iOS 系统 </td>
								<td style="border-right: 8px solid #f8f5f4;">安卓系统</td>
								<td>Xbox One</td>
								<td>Nintendo Switch</td>
								<td>Nintendo 3DS Edition</td>
								<td style="border-right: 8px solid #f8f5f4;">PlayStation 4</td>
							</tr>
						</thead>
						<tbody class="text-center" style="background-color:#e6e6e6">
							<tr style="font-size:12px">
								<td>Windows 10、 Xbox One、移动平台和 Switch 跨平台联机游戏</td>
								<td></td>
								<td style="border-right: 8px solid #f8f5f4;">
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td style="border-right: 8px solid #f8f5f4;">
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td></td>
								<td style="border-right: 8px solid #f8f5f4;">
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
							</tr>
							<tr style="font-size:12px;">
								<td>Java Edition 跨平台联机游戏：Windows、MAC 和 Linux</td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td style="border-right: 8px solid #f8f5f4;"></td>
								<td></td>
								<td style="border-right: 8px solid #f8f5f4;"></td>
								<td></td>
								<td></td>
								<td></td>
								<td style="border-right: 8px solid #f8f5f4;"></td>
							</tr>
							<tr style="font-size:12px;">
								<td>分屏多人游戏 （在线多人联机游戏需要购买单独出售的订阅服务）</td>
								<td></td>
								<td style="border-right: 8px solid #f8f5f4;"></td>
								<td></td>
								<td style="border-right: 8px solid #f8f5f4;"></td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td></td>
								<td style="border-right: 8px solid #f8f5f4;">
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
							</tr>
							<tr style="font-size:12px;">
								<td>游戏手柄/触控支持</td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td style="border-right: 8px solid #f8f5f4;">
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td style="border-right: 8px solid #f8f5f4;">
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td>
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
								<td style="border-right: 8px solid #f8f5f4;">
									<b-icon icon="check2" class="mt-4" style="width:20px;height:20px;"></b-icon>
								</td>
							</tr>
						</tbody>
						<tr>
							<td colspan="9">
								<div class="mt-3">
									<b-img :src=pdf style="height:24xp;width:18px;"></b-img><a href="#" class="ml-2"
										style="color:#288123">下载PDF</a>
								</div>
							</td>
						</tr>
					</table>
				</b-collapse>
			</div>
		</div>
	</div>
</template>
<script>
	import sectionbodychild from '@/components/playmethodscomponents/SectionBodyChild.vue'

	export default {
		name: 'sectionbody',
		components: {
			sectionbodychild
		},
		data() {
			return {
				showindex: true,
				showtwo: false,
				logochild: require("@/assets/pic/logo.png"),
				methodsindex: '您的畅玩方式?',
				methodstwo: '选择平台',
				textindex: true,
				texttwo: false,
				showback: false,
				showbacktwo: true,
				updown: 'chevron-compact-down',
				pdf: require("@/assets/svg/pdf.svg"),
				playmethods: {
					computer: {
						pic: require("@/assets/pic/Computer_Icon.png"),
						text: '电脑',
						class: 'col-12 col-sm-6 col-md-6 col-xl-3 float-left mb-5 mt-5 position-relative',
						id: "computer"
					},
					mobile: {
						pic: require("@/assets/pic/Mobile_Icon.png"),
						text: '移动平台',
						class: 'col-12 col-sm-6 col-md-6 col-xl-3 float-left mb-5 mt-5 position-relative',
						id: "mobile"
					},
					console: {
						pic: require("@/assets/pic/Console_Icon.png"),
						text: '主机',
						class: 'col-12 col-sm-6 col-md-6 col-xl-3 float-left mb-5 mt-5 position-relative',
						id: 'console'
					},
					vr: {
						pic: require("@/assets/pic/icon_vr.png"),
						text: '其他',
						class: 'col-12 col-sm-6 col-md-6 col-xl-3 float-left mb-5 mt-5 position-relative',
						id: 'vr'
					},
				},
				platform: {
					PC: {
						pic: require("@/assets/svg/windows.svg"),
						text: 'PC',
						class: 'col-12 col-sm-4 col-md-4 col-xl-4 float-left mb-5 mt-5 position-relative',
						sizeset: 'height:100px;width:100px;'
					},
					MAC: {
						pic: require("@/assets/svg/apple.svg"),
						text: 'MAC',
						class: 'col-12 col-sm-4 col-md-4 col-xl-4 float-left mb-5 mt-5 position-relative',
						sizeset: 'height:100px;width:100px;'
					},
					LINUX: {
						pic: require("@/assets/svg/linux.svg"),
						text: 'LINUX',
						class: 'col-12 col-sm-4 col-md-4 col-xl-4 float-left mb-5 mt-5 position-relative',
						sizeset: 'height:100px;width:100px;'
					}
				}
			}
		},
		methods: {
			change(index) {
				if (index == 'computer') {
					this.showback = true
					this.showbacktwo = false
					this.texttwo = true
					this.showindex = false
					this.showtwo = true
					this.textindex = false
					this.texttwo = true
				} else if (index == 'mobile') {
					this.showback = true
					this.showbacktwo = false
					this.texttwo = true
					this.showindex = false
					this.showtwo = true
					this.textindex = false
					this.texttwo = true
				} else if (index == 'console') {
					this.showback = true
					this.showbacktwo = false
					this.texttwo = true
					this.showindex = false
					this.showtwo = true
					this.textindex = false
					this.texttwo = true
				} else {
					this.showback = true
					this.showbacktwo = false
					this.texttwo = true
					this.showindex = false
					this.showtwo = true
					this.textindex = false
					this.texttwo = true
				}
			},
			back() {
				this.showback = false
				this.showbacktwo = true
				this.texttwo = false
				this.showindex = true
				this.showtwo = false
				this.textindex = true
				this.texttwo = false
			},
			changedirection() {
				if (this.updown == 'chevron-compact-down') {
					this.updown = 'chevron-compact-up'
				} else {
					this.updown = 'chevron-compact-down'
				}
			}
		}
	}
</script>
<style scoped>
	.mysectionchild-enter,
	.mybutton-enter,
	.mytext-enter {
		opacity: 0;
	}

	.mysectionchild-enter-active,
	.mybutton-enter-active,
	.mytext-enter-active {
		transition: all 1s;
	}

	.mysectionchild-enter-to,
	.mybutton-enter-to,
	.mytext-enter-to {
		opacity: 1;
	}

	.mysectionchild-leave,
	.mybutton-leave,
	.mytext-leave {
		opacity: 1;
	}

	.mysectionchild-leave-active,
	.mybutton-leave-active,
	.mytext-leave-active {
		transition: all 1s;
	}

	.mysectionchild-leave-to,
	.mybutton-leave-to,
	.mytext-leave-to {
		opacity: 0;
	}

	h2 {
		font-family: "Noto Sans";
		font-weight: 700;
		font-size: 28px;
		line-height: 34px;
		opacity: 0.9;
	}

	.btn {
		box-shadow: none;
	}

	.thead {
		color: #fff;
		background-color: #7a7574;
		border-right: 8px solid #f8f5f4;
	}

	td {
		height: 80px;
		width: 80px;
	}

	.mousepoint {
		cursor: pointer;
	}
</style>
