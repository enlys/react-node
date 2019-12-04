import React,{Component} from "react";
import {Link} from "react-router-dom";
import {Card, List, Avatar} from "antd";
export default class UserList extends Component {
    render(){
        let {loading,data,title} = this.props;
        return(
           
            <Card 
            title={title}
            loading = {loading}
            type="inner"
            >
                 <List 
                 dataSource={data}
                 renderItem={item => (
                   <List.Item 
                 extra={<span>最后回复{item.last_reply_at.split("T")[0]}</span>}
                   key={item.id}>
                    <List.Item.Meta
                             style={{minWidth:"200px"}}
                             avatar={<Avatar src={item.author.avatar_url} />}
                             title={
                             <span>
                                 <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                 &nbsp; &nbsp;&nbsp;
                                 <Link to={"/details/"+item.id}>{item.title}</Link>
                                 </span>
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