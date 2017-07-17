import React from 'react' 

export default class Sub extends React.Component{
	constructor(props){
		// 第二位护法 props
		super(props)
		console.log(this);
		console.log(this.props.songs)
		this.state = {
			price:'0',
			count:0,

		}

		this.priceHandler = this.priceHandler.bind(this)
		this.countHandler = this.countHandler.bind(this)
	}

	priceHandler(a){
		// input表单里面 onChange事件 会通过代理的方式传入你想要的内容
		console.log(a.target.value);

		this.setState({
			price:a.target.value
		})
	}
	countHandler(a){
		this.setState({
			count:a.target.value
		})
	}

	// 父级往子级传值  1.要在子级中自定义属性  2.通过props获取到数值
	// input 表单 将value默认值 转化成 defaultValue
	render(){

		var arr = [];
		this.props.songs.forEach((ele,index)=>{
			
			arr.push(<li key={index+'song'}>{ele}</li>)
		})

		return(

			<div id='sub'>
				<h2>我是App组件的孩子</h2>

				<ul>
					{arr}
				</ul>
				<p>价格:</p>
				<input type="text" defaultValue={this.state.price} onChange={this.priceHandler}/>
				<p>数量:</p>
				<input type="text" defaultValue={this.state.count} onChange={this.countHandler}/>
					
				<p>总价格为:{this.state.price*this.state.count}元</p>
			</div>

			)
	}
}



