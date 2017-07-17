import React from 'react'

// import Sub from './components/Sub'

import Login from './components/Login'

import $ from 'jquery'

// import logo from './logo.svg'
export default class App extends React.Component{
	constructor(){
		super()
		this.state = {
			// count:0,
			// isPlay:true,
			// menu:['宫保鸡丁','鱼香肉丝','烧乳鸭','蒸熊掌'],
			// songs:['认真的雪','演员','动物世界','暧昧'],
			user:null,
			password:null
		};
		
// 事件绑定
		// this.countHandler = this.countHandler.bind(this);
		// this.playHandler = this.playHandler.bind(this);

	}
	// countHandler(){

	// 	console.log(this);
	// 	this.setState({
	// 		count:++this.state.count
	// 	})
	// }

	// playHandler(){
	// 	this.setState({
	// 		isPlay:!this.state.isPlay
	// 	})
	// }
	
	render(){
		
		// var lists = [];
		// this.state.menu.forEach((ele,index)=>{
		// 	lists.push(<li key={index+"menu"}>{ele}</li>)
		// })

		return (
			<div id='app'>{
							// <h2>我是第一个react的app</h2>
							// <p>{this.state.count}</p>
							// <button className='btn btn-danger' onClick={this.countHandler}>点我+1</button>
							// <button className='btn btn-default' onClick={this.playHandler}>{this.state.isPlay?'播放':'暂停'}</button>
							// <ul>
							// 	{lists}
							// </ul>
			
							// <Sub songs={this.state.songs}/>
							// <img src={logo} alt="logo"/>
							}
                <Login />
			</div>

			)
	}


}
