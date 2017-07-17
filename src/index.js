// 首先引入两位带头大哥 (这两个模块非常重要)

import React from 'react';
import ReactDOM from 'react-dom';

// import Ul from './components/Ul'

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';


//自定义组件  名字第一个字母要大写 为了跟原生标签区分


// 有一位神秘的卧底 jsx  可以将xml标签使用jsx工具转化成纯js代码

// 第一个参数一定是闭合标签  必须包装在一个封闭的标签
// 插值 {}  有点特别 基本上在任何地方都能插值

// 在react中 index.js都是入口文件.这里面不做大量的操作
// 有一个坑  在react要想设置类名 class 必须改成className 驼峰标识
ReactDOM.render(
     < App />,document.getElementById('root')
	);

