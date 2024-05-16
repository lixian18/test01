import React from "react";
class Test extends React.Component{
    // 数据
    constructor() {
        super();
        this.state = {
            a: undefined,
            friend: {
                name: 'lisi'
            },
            age: 18
        }
    }

    // 方法

    // 定义一个函数
    getlist(){

    }
    // 渲染
    render() {
        return (
            <div>
                <h1>null:{this.state.a+''}</h1>
                <h1>friend:{this.state.friend.name}</h1>
                <h1>{Object.keys(this.state.friend)[0]}</h1>
                <hr />
                <h2>运算表达式{9+1}</h2>
                <h2>三元运算符{this.state.age>=18?'已经成年':'还没有成年'}</h2>
            </div>

        )
    }
}
export default Test
