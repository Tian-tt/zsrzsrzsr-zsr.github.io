import React from 'react'
import './header.css'
import { Link,withRouter } from 'react-router-dom'
import axios from 'axios'
class Header extends React.Component {
  state = {
    login:false,
    token:'',
    userInfo:null
  }
  componentDidMount() {
    if(sessionStorage.token === 'b5cfc54d-b9d6-4bc3-a735-a9939a6f0d4b' ) {
      axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:sessionStorage.token})
      .then(res=>{
        this.setState({
          login: true,
          userInfo: res.data
        })
      })
      .catch(err=>{
        alert(err)
      })
    }
  }
  handleChange = e => {
    console.log(this.state.token)
    this.setState({
      token: e.target.value
    })
  }
  handleLogin = () => {
    const { token } = this.state
    axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:token})
    .then(res=>{
      sessionStorage.token = token
      this.setState({
        login: true,
        userInfo: res.data
      })
    })
    .catch(err=>{
      alert(err)
    })
  }
  handleLogout = () => {
    sessionStorage.clear('token')
    this.setState({
      login: false,
      userInfo: null,
      token:''
    })
  }
  render () {
    const { token, login, userInfo } = this.state
    return (
      <header>
        <Link to='/'>
          <img style={{width:'140px'}} src='https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg' alt="111" />
        </Link>
        {
          login ? (<div className='logout'>
            <Link to='/topic/create'>发布文章</Link>
            <Link to={`/user/${userInfo.loginname}`}><img className='author-pic' src={userInfo.avatar_url} alt="111"/></Link>
            <button onClick={this.handleLogout}>退出</button>
          </div>) : (<div className='login'>
            <input  type="text" value={token} onChange={this.handleChange}/>
            <button onClick={this.handleLogin}>登录</button>
          </div>)
        }
      </header>
    )
  }
}

export default withRouter(Header)
