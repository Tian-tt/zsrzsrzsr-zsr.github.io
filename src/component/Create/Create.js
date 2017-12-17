import React from 'react'
import axios from 'axios'
import './create.css'
class Create extends React.Component {
  state = {
    title:'',
    content:''
  }
  handleTitle = e => {
    this.setState({
      title: e.target.value
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
      title:this.state.title,
      content:this.state.content,
      tab:'dev'
    }
    console.log(data)
    axios.post('https://cnodejs.org/api/v1/topics',data)
    .then( res => {
      console.log(res)
      this.setState({
        title:'',
        content:''
      })
      this.props.history.push(`/topic/${res.data.topic_id}`)
    })
    .catch( err => {
      alert (err)
    })
  }
  render () {
    return(
      <div className='publish'>
        <input type="text" value={this.state.title} onChange={this.handleTitle} placeholder='标题字数十字以上' />
        <textarea value={this.state.content} onChange={this.handleContent} cols="30" rows="10"></textarea>
        <button onClick={this.handleSubmit}>提交</button>
      </div>
    )
  }
}

export default Create
