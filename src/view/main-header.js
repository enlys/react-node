import React,{Component} from "react";
import {Layout,Row,Col,Divider,Menu,Icon ,Dropdown,Button} from "antd";
import {NavLink, Link} from "react-router-dom";

const navItem = [
    {
       icon: "home",
       path: "/index/all",
       content:"首页"
    },{
        icon: "book",
        path: "/book",
        content:"教程"
    },{
        icon: "info-circle-o",
        path: "/about",
        content:"关于"
    },
    {
        icon: "edit",
        path: "/write",
        content:"发布"
    }
];

const topMenu = (
    <Menu className="dropMenu">
        {navItem.map((item,index)=>{
            return (<Menu.Item key={index}>
                <Link to={item.path}><Icon type={item.icon} />{item.content}</Link>
            </Menu.Item>)
        })}
        <Menu.Divider/>
        <Menu.Item>
            <Link to="/"><Icon type="user"/>登陆</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="https://cnodejs.org/auth/github/new" target="_blank"><Icon type="flag"/>注册</Link>
        </Menu.Item>
    </Menu>
);


class MainHeader extends Component {
    render(){
       return( 
        <Layout.Header id="Header">
            <Row id="headerRow" className="mainWrap">
                <Col md={6} xs={24}  >
                <NavLink to="/index/all"><h1 id="logo">Node.js</h1></NavLink>
                    
                </Col>
                <Col md={18} xs={0} className="headerRight" >
                    <Divider type="vertical"  className="headerDivider"/>
                    <Menu className="nav" mode="horizontal">
                        <Menu.Item>
                            <NavLink to="/index/all"><Icon type="home" />首页</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to="/book"><Icon type="book" />教程</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to="/about"><Icon type="info-circle-o" />关于</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to="/write"><Icon type="edit" />发布</NavLink>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col md={0} xs={24} className="ssxiao">
                <Dropdown overlay={topMenu} placement="bottomRight" trigger={["click","touchend"]}>
                            <Button><Icon type="bars" /></Button>
                        </Dropdown>
                </Col>
            </Row>
        </Layout.Header>

       )

    }
}

export default MainHeader;