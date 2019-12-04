import React,{Component} from 'react';
import data from "./data";
import {Card} from "antd";
class Book extends Component{
    render(){
        const datas =data;
        return (<div>
            {datas.map(item =>{
                return (
                    <Card
                        key={item.title}
                        title={item.title}
                        type="inner"
                        className = {item.className}
                    >
                        <div dangerouslySetInnerHTML={
                            {
                                __html:item.content
                            }
                        }></div>
                    </Card>
                );
            })}
        </div>);

    }
}

export default Book;