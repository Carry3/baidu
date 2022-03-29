import React from 'react';
import axios from 'axios';
import './App.css';

//引入组件
import SearchBox from "./components/SearchBox";
import News from "./components/News"
import Daohang from './components/Daohang.';
class App extends React.Component {
    constructor(props) {
        super(props);  //调用父类构造函数
        this.state = {
            mid_num: 2
        }
        //直接用state里的值 ： this.state
        //改变state里的值 : this.setState({ })
    }
    mid_num_change = (e) => {
        this.setState({ mid_num: e })
    }
    web =()=> {
        axios.get("/node").then((res) => {
            let str = res.data;
            console.log(str)
        })
    }
    render() {
        return (
            <div className="App">
                <header>
                    <div id="s-top-left" class="s-top-left-new s-isindex-wrap">
                        <a href="http://news.baidu.com" target="_blank" class="mnav">新闻</a>
                        <a href="https://www.hao123.com?src=from_pc_logon" target="_blank" class="mnav">hao123</a>
                        <a href="http://map.baidu.com" target="_blank" class="mnav">地图</a>
                        <a href="http://tieba.baidu.com/" target="_blank" class="mnav">贴吧</a>
                        <a href="https://haokan.baidu.com/?sfrom=baidu-top" target="_blank" class="mnav">视频</a>
                        <a href="http://image.baidu.com/" target="_blank" class="mnav"> 图片</a>
                        <a href="https://pan.baidu.com?from=1026962h" target="_blank" class="mnav">网盘</a>
                        <a href="http://www.baidu.com/more/" name="tj_briicon" class="mnav" target="_blank">更多</a>
                        <a href="" onClick={()=>this.web()} target="_blank">web测试</a>
                    </div>
                    <div class="s-top-mid"></div>
                </header>
                <div className="App_two"><SearchBox /></div>
                <div>
                    <div class="menus-wrapper">
                        <span class="s-menu-item" onClick={() => this.mid_num_change(1)} style={{ color: this.state.mid_num == 1 ? '#333' : '', borderBottom: this.state.mid_num == 1 ? '#315efb solid 2px' : ''}}>我的关注</span>
                        <span class="s-menu-item" onClick={() => this.mid_num_change(2)} style={{ color: this.state.mid_num == 2 ? '#333' : '', borderBottom: this.state.mid_num == 2 ? '#315efb solid 2px' : ''}}>推荐</span>
                        <span class="s-menu-item" onClick={() => this.mid_num_change(3)} style={{ color: this.state.mid_num == 3 ? '#333' : '', borderBottom: this.state.mid_num == 3 ? '#315efb solid 2px' : ''}}>导航</span>
                    </div>
                    <div style={{ display: this.state.mid_num == 3 ? 'block' : 'none' }}><Daohang /></div>
                    <div style={{ display: this.state.mid_num == 2 ? 'block' : 'none' }}><News /></div>
                </div>
            </div>
        );
    }

}

export default App;

