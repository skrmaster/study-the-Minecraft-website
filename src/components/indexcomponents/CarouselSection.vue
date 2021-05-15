<template>
	<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ml-1 pt-5">
		<div class="row setbg">
			<div class="ml-2 mb-5" style="color:#000;width:100%">
				<div class="mt-5 text-center">
					<h2>探索 MINECRAFT 游戏</h2>
				</div>
			</div>
			<div class="container">
				<div class="position-relative boxset">
					<div class="prevset position-absolute">
						<a class="btn svgset position-relative">
							<b-icon icon='arrow-left-short' @click="prev()" class="imgset text-white"></b-icon>
						</a>
					</div>

					<div class="container overflow-hidden position-relative">
						<div class="carouse" ref="rowset" style="transform:translate3d(0, 0, 0)">
							<sectionpicwhile :data="pic.four" :id="'only'"></sectionpicwhile>
							<sectionpicwhile v-for="data in pic" @width="getwd" :id="data.ref" :key=data.pic :data=data>
							</sectionpicwhile>
							<sectionpicwhile v-for="data in pic" :ref="data.ref" :id="data.ref+'only'"
								:key="data.pic+'only'" :data=data></sectionpicwhile>
						</div>
					</div>

					<div class="nextset position-absolute">
						<a class="btn svgset position-relative">
							<b-icon icon='arrow-right-short' @click="next()" class="imgset text-white"></b-icon>
						</a>
					</div>
				</div>
				<div class="p-4"></div>
			</div>
		</div>
	</div>
</template>
<script>
	import sectionpicwhile from "@/components/indexcomponents/SectionPicWhile.vue"

	export default {
		name: 'sectionpicwhilecaro',
		components: {
			sectionpicwhile
		},
		data() {
			return {
				wd: '',
				timecontrol: true,
				pic: {
					one: {
						pic: require("@/assets/pic/nav_pic1.jpg"),
						title: 'minecraft',
						titleSmall: '探索自己独一无二的世界，挺过黑夜，并创建您能想象的一切！',
						status: true,
						ref: 'one',
						class: 'text-center pt-1 widthset float-left '
					},
					two: {
						pic: require("@/assets/pic/nav_pic2.jpg"),
						title: 'Minecraft Dungeons',
						titleSmall: '发现一款以经典地牢爬虫为灵感来源的全新动作冒险游戏！',
						status: true,
						ref: 'two',
						class: 'text-center pt-1 widthset float-left '
					},
					three: {
						pic: require("@/assets/pic/nav_pic3.jpg"),
						title: 'Minecraft Earth',
						titleSmall: '通过增强现实功能将 Minecraft 宇宙带入现实世界！',
						status: true,
						ref: 'three',
						class: 'text-center pt-1 widthset float-left'
					},
					four: {
						pic: require("@/assets/pic/nav_pic4.jpg"),
						title: 'Minecraft 教育版',
						titleSmall: '一个基于游戏的学习平台，支持来自 100 多个国家/地区的成千上万名教育工作者！',
						status: true,
						ref: 'four',
						class: 'text-center pt-1 widthset float-left'
					}
				}
			}
		},
		methods: {
			getwd(value) {
				this.wd = value
			},
			delayLoading3d(arr, x, time) {
				setTimeout(() => {
					this.$refs.rowset.removeAttribute(arr)
					this.$refs.rowset.setAttribute(arr, "transform:translate3d(" + x + "px, 0, 0);")
					this.timecontrol = true
				}, time)
			},
			prev() {
				if (!this.timecontrol) {
					return
				}

				this.timecontrol = false

				let wd = parseInt(this.wd)

				if (this.$refs.rowset.style.transform == 'translate3d(0px, 0px, 0px)') {
					this.$refs.rowset.style.transform = "translate3d(-" + wd + "px, 0, 0)"
					this.$refs.rowset.style.transition = 'all .9s ease-out'
					this.delayLoading3d('style', -wd, 901)
				} else if (this.$refs.rowset.style.transform == "translate3d(-" + wd + "px, 0px, 0px)") {
					this.$refs.rowset.style.transform = "translate3d(-" + 2 * wd + "px, 0, 0)"
					this.$refs.rowset.style.transition = 'all .9s ease-out'
					this.delayLoading3d('style', -2 * wd, 901)
				} else if (this.$refs.rowset.style.transform == "translate3d(-" + 2 * wd + "px, 0px, 0px)") {
					this.$refs.rowset.style.transform = "translate3d(-" + 3 * wd + "px, 0, 0)"
					this.$refs.rowset.style.transition = 'all .9s ease-out'
					this.delayLoading3d('style', -3 * wd, 901)
				} else if (this.$refs.rowset.style.transform == "translate3d(-" + 3 * wd + "px, 0px, 0px)") {
					this.$refs.rowset.style.transform = "translate3d(-" + 4 * wd + "px, 0px, 0px)"
					this.$refs.rowset.style.transition = 'all .9s ease-out'
					this.delayLoading3d('style', 0, 901)
				}
			},
			next() {
				if (!this.timecontrol) {
					return
				}

				this.timecontrol = false
				let wd = parseInt(this.wd)

				if (this.$refs.rowset.style.transform == "translate3d(0px, 0px, 0px)") {
					this.$refs.rowset.style.transform = "translate3d(" + wd + "px, 0, 0)"
					this.$refs.rowset.style.transition = 'all .9s ease-out'
					this.delayLoading3d('style', -3 * wd, 901)
				} else if (this.$refs.rowset.style.transform == "translate3d(-" + 3 * wd + "px, 0px, 0px)") {
					this.$refs.rowset.style.transform = "translate3d(-" + 2 * wd + "px, 0, 0)"
					this.$refs.rowset.style.transition = 'all .9s ease-out'
					this.delayLoading3d('style', -2 * wd, 901)
				} else if (this.$refs.rowset.style.transform == "translate3d(-" + 2 * wd + "px, 0px, 0px)") {
					this.$refs.rowset.style.transform = "translate3d(-" + wd + "px, 0, 0)"
					this.$refs.rowset.style.transition = 'all .9s ease-out'
					this.delayLoading3d('style', -wd, 901)
				} else if (this.$refs.rowset.style.transform == "translate3d(-" + wd + "px, 0px, 0px)") {
					this.$refs.rowset.style.transform = "translate3d(0, 0, 0)"
					this.$refs.rowset.style.transition = 'all .9s ease-out'
					this.delayLoading3d('style', 0, 901)
				}
			}
		}
	}
</script>
<style lang='scss' scoped>
	.boxset {
		padding: 0 125px 0 125px;
		overflow: hidden;
		height: 550px;
	}

	.carouse {
		height: 100%;
		position: relative;
		left: -300px;
		top: 0;
		width: 400%;
		z-index: 1;
	}

	.setbg {
		width: 1105px;
		background-color: #fff
	}

	h2 {
		font-family: "Noto Sans";
		font-weight: 700;
		font-size: 28px;
		line-height: 34px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.btn-default {
		color: white;
		background-color: #34aa2f !important;
		z-index: -1;
		box-shadow: 0 -4px rgba(21, 108, 0, .5) inset, 0 4px rgba(100, 253, 31, .99) inset, -4px 0 rgba(100, 253, 31, .5) inset, 4px 0 rgba(21, 108, 0, .5) inset;
	}

	.imgset {
		width: 48px;
		height: 48px;
		background-color: #008542;
		box-shadow: 0 -4px rgba(21, 108, 0, .5) inset, 0 4px rgba(100, 253, 31, .99) inset, -4px 0 rgba(100, 253, 31, .5) inset, 4px 0 rgba(21, 108, 0, .5) inset;
		z-index: -1;
	}

	.imgset {
		transition: all .2s;
	}

	.imgset:hover {
		transform: scale(1.1);
		box-shadow: 0 -4px rgba(0, 0, 0, .5) inset, 0 4px rgba(255, 255, 255, .2) inset, -4px 0 rgba(255, 255, 255, .2) inset, 4px 0 rgba(0, 0, 0, .5) inset;
	}

	.btnset .btn {
		box-shadow: none;
	}

	.prevset {
		top: 148px;
		left: 25px;
		z-index: 500;
	}

	.nextset {
		top: 148px;
		right: 25px;
		z-index: 500;
	}

	.imgset2 {
		width: 216px;
		height: 334px;
		text-decoration: none;
		border: 2px #fff solid;
		transition: all .4s;

		&:hover {
			transform: scale(1.02);
			border: 2px #288123 solid;
		}
	}

	.aset {
		text-decoration: none;
		color: #196d17 !important;
	}

	.settext {
		font-size: 14px;
		font-family: 'Noto Sans';
		line-height: 20px;
		font-weight: 400;
		text-transform: none;
	}
</style>
