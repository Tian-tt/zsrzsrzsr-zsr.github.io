import React from 'react'
import axios from 'axios'
import './showtopic.css'
import { Link } from 'react-router-dom'
class ShowTopic extends React.Component {
  state = {
    data:null,
  }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
      .then(res => {
        this.setState({
          data:res.data.data
        })
      })
      .catch( err => {
        alert(err)
      })
  }
  handleContent = e => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = () => {
    const data = {
      accesstoken:sessionStorage.token,
      content:this.state.content,
      reply_id:this.props.match.params.id
    }
    console.log(this.state.data)
    console.log(data)
    axios.post(`https://cnodejs.org/api/v1/topic/${this.state.data.id}/replies`,data)
    .then( res => {
      console.log(res)
      this.setState({
        content:''
      })
    })
    .catch( err => {
      alert (err)
    })
  }
  handleUpdate=()=>{
    console.log(this.props.title)
  }
  render () {
    const { data } = this.state
    const article = data ? (
      <div className='article'>
        <div className='pre'>
        <h2 className='article-title'>{data.title}</h2>
        <p className='article-info'> 作者:{data.author.loginname}
          <span> 浏览量:{data.visit_count} </span>
          <span> 发布于{data.create_at} </span>
        </p>
        <Link to='/topic/create'><button className='update' onClick={this.handleUpdate}>编辑</button></Link>
        <button className='delete' >删除</button>
        <div className="topic-content">
          <div dangerouslySetInnerHTML={ {__html: data.content} } />
        </div>
        </div>
        <div className='allback'>
        <h2>全部回复</h2>
        <div className="replies">
          {
            data.replies.map( item => {
              return (
                <div key={item.id} className='reply'>
                  <Link to={`/user/${item.author.loginname}`}>
                    <img src={item.author.avatar_url} alt="11"/>
                  </Link>
                  <span className='reply-author'>{item.author.loginname}</span>
                  <div dangerouslySetInnerHTML={ {__html: item.content} } />
                </div>
              )
            })
          }
        </div>
        </div>
      </div>
    ) : '请稍等'
    return (
      <div>
        {article}
        <div className='new-discuss'>
          <div className='discuss-title'>添加回复</div>
          <textarea cols="30" rows="10" value={this.state.content} onChange={this.handleContent}></textarea>
          <button onClick={this.handleSubmit}>回复</button>
        </div>
      </div>
    )
  }
}

export default ShowTopic
