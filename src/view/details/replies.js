import React,{Component} from "react";
import {Link} from "react-router-dom";
import {Card, List, Avatar} from "antd";
export default class ReplyList extends Component{
    render(){
        let {loading,reply_count,replies} = this.props;
        return(
            <Card 
            title={reply_count+"条回复"}
            loading = {loading}
            type="inner"
            >
             <List 
                 dataSource={replies}
                 renderItem={item => (
                   <List.Item 
                   extra={item.ups.length>0?(<span>有{item.ups.length}个人赞了这条回复</span>):""}
                   key={item.id}>
                    <List.Item.Meta
                             style={{minWidth:"200px"}}
                             avatar={<Avatar src={item.author.avatar_url} />}
                             title={<span><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>发表于:{item.create_at.split("T")[0]}</span>}
                             description={
                                <div dangerouslySetInnerHTML={
                                    {__html:item.content}
                                }></div>
                             }
                         />
                   </List.Item>
                 )}
                 >
 
 
                 

             </List>
        </Card>
        )
    }
}