import React from 'react'

export default class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			account:null,
			password:null

		}
		this.accountHandler =this.accountHandler.bind(this);
		this.passwordHandler=this.accountHandler.bind(this);
		}
	accountHandler(a){
		this.setState({
			account:a.target.value
		})
	}
	passwordHandler(a){
		this.setState({
			password:a.target.value
		})
	}
	say(){
		$.ajax({
			
		})
	}
	render(){
		return(
			  <div className="modal-body">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">账号</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="account"  placeholder="请输入账号" defaultValue={this.state.account} onChange={this.accountHandler}/>
                                <b>以字母开头，长度在6-18之间,包含字符、数字和下划线</b>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">密码</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="password"  placeholder="请输入密码" defaultValue={this.state.password} onChange={this.passwordHandler}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/> 记住账号
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="modal-footer footer-Change">
                    <button type="button" className="btn btn-default" id="register" onclick={this.register}>注册</button>
                    <button type="button" className="btn btn-primary" id="login">登录</button>
                </div>
                </div>
                
			)
	}
}