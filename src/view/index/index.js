import React,{Component} from 'react';
import {Row,Col} from "antd";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import List from './List'
import {Switch,Route,Redirect} from "react-router-dom";
const subMenu = [
    {
        item: "全部",
        path: "/index/all"
    },
    {
        item: "精华",
        path: "/index/good"
    },
    {
        item: "问答",
        path: "/index/ask"
    },
    {
        item: "分享",
        path: "/index/share"
    },
    {
        item: "招聘",
        path: "/index/job"
    },
    {
        item: "测试",
        path: "/index/dev"
    }
];
class Index extends Component{

    render(){
      let tab=this.props.match.params.id;
        return(
            <Row className="mainWrap">
                  <Col md={6} xs={24}>
                    <nav className="subNav">
                        {subMenu.map((item,index)=>{
                            return <NavLink to={item.path} activeClassName="active" key={index}>{item.item}</NavLink>
                        })}
                    </nav>
                </Col>
                <Switch>
                <Route path="/index" exact render={()=>(<Redirect to="/index/all" />)}/>
                <Route path="/index/all" component={List}/>
                <Route path="/index/ask" component={List}/>
                <Route path="/index/share" component={List}/>
                <Route path="/index/job" component={List}/>
                <Route path="/index/dev" component={List}/>
                <Route path="/index/good" component={List}/>
            </Switch>
            </Row>
        )

    }
}


export default  connect((state)=>(state.topList))(Index);