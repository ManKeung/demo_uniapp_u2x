module.exports = {
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended'
	],
	globals: {
		uni: true,
		wx: true,
		ROUTES: true,
	},
	rules: {
		'no-unused-vars': 'off',
		// 'no-mixed-spaces-and-tabs': ['error', 'smart-tabs']
		// 还有很多js规则去github上找项目vue-element-admin上搞一份
	},
	env: {
		es6: true,
		browser: true,
		node: true
	},
	// parserOptions: {
	// 	parser: 'babel-eslint',
	// 	ecmaVersion: 8,
	// 	sourceType: 'module'
	// }
}
