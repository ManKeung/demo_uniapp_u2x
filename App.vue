<script>
export default {
	async onLaunch(options) {
		console.log('options');
		console.log(options);
		console.log('options');
	},
	onShow() {
		console.log('App Show');
		this.$AppReady.then(() => {
			console.log(this.$Route);
		});
	},
	onHide: function() {}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uview-ui/index.scss';
@import '@/style/index.scss';
</style>
