/* eslint-disable no-unreachable */
import CODE from '@/common/code.js'

/**
 * @Author: Mankeung
 * @description: js加载
 * @param {string} url js地址
 * @return {Promise}
 */
export default (url = '') => {
	return new Promise(resolve => {

		// 环境判断
		// #ifndef H5
		return resolve({
			code: CODE.ERR,
			msg: '当前环境不是h5~',
			data: ''
		})
		// #endif

		// 判断地址
		if (!url) return resolve({
			code: CODE.ERR,
			msg: 'url地址不能为非空~',
			data: ''
		})

		// 生成script标签
		const script = document.createElement('script')
		script.type = 'text/javascript'
		script.src = url
		document.body.appendChild(script)

		// 加载成功
		script.onload = data => {
			resolve({
				code: CODE.OK,
				msg: '成功~',
				data
			})
		}

		// 加载失败
		script.onerror = err => {
			resolve({
				code: CODE.ERR,
				msg: err.message ?? err,
				data: err
			})
		}
	})
}
