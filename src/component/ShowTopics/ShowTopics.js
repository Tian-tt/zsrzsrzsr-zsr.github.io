import React from 'react'
import {Link} from 'react-router-dom'
import './showtopics.css'
class ShowTopics extends React.Component {
  render () {
    const {data} = this.props
    console.log(data)
    const ShowTopics = data.length?data.map((item)=>{
      return(
        <div key = {item.id} className='showtopic'>
          <Link to={`/user/${item.author.loginname}`}><img src={item.author.avatar_url} alt="11"/></Link>
          <span className='topic-info'><span className='topic-info1'>{item.reply_count}</span>/<span className='topic-info2'>{item.visit_count}</span></span>
          <span className={`topic-tab ${(item.top || item.good)&&'active'}`}>{item.top?'置顶':item.good?'精华':item.tab==='share'?'分享':'问答'}</span>
          <span className='topic-title'><Link to={`/topic/${item.id}`}>{item.title}</Link></span>
        </div>
      )
    }):<img src={`https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513243381409&di=6a4c04436d7b03f6fc36747d8c850f6a&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2603642376%2C976323263%26fm%3D214%26gp%3D0.jpg`} />
    return(<div>{ShowTopics}</div>)
  }
}

export default ShowTopics;
