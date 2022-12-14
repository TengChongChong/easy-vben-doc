module.exports = [
	'/back-end/',
	'setting',
	{
		title: '工具类',
		children: [
			{
				title: '文件',
				children: [
					'utils/file/file-util',
					'utils/file/image-util',
				]
			},
			'utils/hu-tool',
			'utils/redis-util',
			'utils/shiro-util',
			'utils/sys-config',
		]
	},
	'redis',
	'annotation',
	'add-module',
	'faq',
	{
		title: '规范',
		children: [
			'standard/前言.md',
			{
				title: '一、编程规约',
				children: [
					// - [（一）命名风格](编程规约/命名风格.md)
					// - [（二）常量定义](编程规约/常量定义.md)
					// - [（三）代码格式](编程规约/代码格式.md)
					// - [（四）OOP规范](编程规约/OOP规范.md)
					// - [（五）集合处理](编程规约/集合处理.md)
					// - [（六）并发处理](编程规约/并发处理.md)
					// - [（七）控制语句](编程规约/控制语句.md)
					// - [（八）注释规约](编程规约/注释规约.md)
					'standard/编程规约/命名风格.md',
					'standard/编程规约/常量定义.md',
					'standard/编程规约/代码格式.md',
					'standard/编程规约/OOP规范.md',
					'standard/编程规约/集合处理.md',
					'standard/编程规约/并发处理.md',
					'standard/编程规约/控制语句.md',
					'standard/编程规约/注释规约.md',
				]
			},
			{
				title: '二、异常日志',
				children: [
					// - [（一）异常处理](异常日志/异常处理.md)
					// - [（二）日志规范](异常日志/日志规约.md)
					// - [（三）其他](异常日志/其他.md)
					'standard/异常日志/异常处理.md',
					'standard/异常日志/日志规约.md',
					'standard/异常日志/其他.md'
				]
			},
			'standard/单元测试.md',
			'standard/安全规约.md',
			{
				title: '五、MySQL数据库',
				children: [
					// - [（一）建表规约](MySQL数据库/建表规约.md)
					// - [（二）索引规约](MySQL数据库/索引规约.md)
					// - [（三）SQL语句](MySQL数据库/SQL语句.md)
					// - [（四）ORM映射](MySQL数据库/ORM映射.md)
					'standard/MySQL数据库/建表规约.md',
					'standard/MySQL数据库/索引规约.md',
					'standard/MySQL数据库/SQL语句.md',
					'standard/MySQL数据库/ORM映射.md',
				]
			},
			{
				title: '六、工程结构',
				children: [
					// - [（一）应用分层](工程结构/应用分层.md)
					// - [（二）二方库依赖](工程结构/二方库依赖.md)
					// - [（三）服务器](工程结构/服务器.md)
					'standard/工程结构/应用分层.md',
					'standard/工程结构/二方库依赖.md',
					'standard/工程结构/服务器.md',
				]
			},
			'standard/本手册专有名词.md',
		]
	},
];
