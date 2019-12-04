import React,{Component} from 'react';
import {Card,Avatar, Row, Col} from "antd";
import data from "./data";
import {Link} from "react-router-dom";
import UserList from "./userList";
import axios from "axios";
import { connect } from 'react-redux';
import { conditionalExpression } from '@babel/types';
class User extends Component{

    constructor(arg){
        super(arg);
       
        let {loading,data} = this.props;
        let loginname = this.props.match.params.id;
        this.state = {
            loading: loading,
            loginname,
            avatar: data.avatar_url,
            score: data.score,
            create_at: data.create_at,
            recent_topics: data.recent_topics,
            recent_replies: data.recent_replies
        };
        this.updata(loginname);
       

    }

    componentWillReceiveProps(nextProps){
        let loginname = nextProps.match.params.id;
        if(loginname !== this.state.loginname){
            this.setState({
                loginname
            });
            this.updata(loginname);
            return false;
        }
        let {loading,data} = nextProps;
        this.setState({
            loading: loading,
            avatar: data.avatar_url,
            score: data.score,
            create_at: data.create_at,
            recent_topics: data.recent_topics,
            recent_replies: data.recent_replies
        });
    }

    updata(loginname){
        this.props.dispatch(function(dispatch){
            dispatch({
                type: "USER_UPDATA"
            });
            axios.get('https://cnodejs.org/api/v1/user/'+loginname)
                .then(function(res){
                   
                    dispatch({
                        type:"USER_SUCC",
                        data: res
                    });
                })
                .catch(function (error) {
                    dispatch({
                        type:"USER_ERROR",
                        data: error
                    });
                })
        })
    }
    render(){
        //  console.log(this.state);
        //  console.log(this.props);
        
       
        let {loginname,avatar,score,create_at,recent_topics,recent_replies} = this.state;
        const Title = (<div>
            <Avatar
                src={avatar}
                className = "userAvatar"
            />
            <Row className="userInfo">
                <Col md={8} xs={24}>
                    {<span>用户名:<a>{loginname}</a></span>}
                </Col>
                <Col md={8} xs={24}>
                    {<span>积分:<a>{score}</a></span>}
                </Col>
                <Col md={8} xs={24}>
                    {<span>注册时间:<a>{create_at}</a></span>}
                </Col>
            </Row>
        </div>);
        return(
            <div className="mainWrap">
            <Card
               
            >
                {Title}
            </Card>
             <UserList
                loading = {false}
                title = "最近创建的话题"
                data = {recent_topics}
            />
            <UserList
                loading = {false}
                title = "最近回复的话题"
                data = {recent_replies}
            /> 
        </div>
        )

    }
}

export default connect((state)=>(state.user))(User);