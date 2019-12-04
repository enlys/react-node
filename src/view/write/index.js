import React,{Component} from 'react';
import {Card, Row, Col,Select,Input,Button  } from "antd";
import Editor from 'for-editor';
import ReactMarkdown from 'react-markdown/with-html';
const { Option } = Select;

class Write extends Component{
    constructor(arg){
        super(arg);
       
       
        this.state = {
            tab: '',
            title: '',
            content: ''
        };
       
       

    }
    handleChange(value) {
        // console.log(`selected ${value}`);
        this.setState({
            tab:value
        });
      }
    handleChangetitle(value){
        // console.log(value.target.value);
        this.setState({
            title:value.target.value
        });
    }
    handleChangeedit(value) {
        // console.log(value)
      this.setState({
        content:value
      })
    }
    submit(){
        console.log(this.state);
    }
    render(){
        return(
            <div className="mainWrapss">
               <Row gutter={ 16 }>
                <Col md={18} xs={24}>
                <Card type="inner" title="发布主题" >
                    <div>选择模块： <Select defaultValue="请选择" style={{ width: 120 }} onChange={(value)=>{this.handleChange(value)}}>
                    <Option value="分享">分享</Option>
                    <Option value="问答">问答</Option>
                    <Option value="招聘" >
                     招聘
                    </Option>
                    <Option value="客户端测试">客户端测试</Option>
                    </Select>
                    </div>
                    <div><br/>
                    <Input placeholder="请输入标题" value={this.state.title}   onChange={(value)=>{this.handleChangetitle(value)}} />
                    </div>
                    <br/>
                    <Editor value={this.state.content} onChange={(e) => this.handleChangeedit(e)} />
                    {/* <ReactMarkdown source={this.state.content} /> */}
                    <br/>
                    <Button type="primary" onClick={()=>{
                        this.submit()
                    }}>提交</Button>


                </Card>
                </Col>
                <Col md={6} xs={0}>
                <Card type="inner" title="Markdown 语法参考" >
                <div>
      <ol>
        <li><tt>### 单行的标题</tt></li>
        <li><tt>**粗体**</tt></li>
        <li><tt>`console.log('行内代码')`</tt></li>
        <li><tt>```js\n code \n```</tt> 标记代码块</li>
        <li><tt>[内容](链接)</tt></li>
        <li><tt>![文字说明](图片链接)</tt></li>
      </ol>
      <span><a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a></span>
    </div>
               </Card>
                </Col>
                
            </Row>
            </div>
        )
    }
}

export default Write;