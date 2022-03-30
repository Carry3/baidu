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
    web = () => {
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
                        <a href="" onClick={() => this.web()} target="_blank">web测试</a>
                    </div>
                    <div></div>
                    <div class="s-top-right">
                        <a href="//www.baidu.com/s?tn=baidutop10&rsv_idx=2&wd=%E6%9D%AD%E5%B7%9E%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5">
                            <div class="show-weather">
                                <span class="show-city">
                                    <span class="show-city-name" data-key="杭州">杭州</span>
                                </span>
                                <span class="show-icon">
                                    <img class="weather-icon" src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons/a7.png"/>
                                    <span class="show-icon-temp">15℃</span>
                                </span>
                                <span class="show-airParm">
                                    <span class="show-polution-name">良</span>
                                </span>
                            </div>
                        </a>
                        <span className='shezhi'>设置</span>
                        <a href="https://www.baidu.com/my/index" target="_blank" class="s-top-id">
                            <span class="s-top-id-img">
                                <img src="https://himg.bdimg.com/sys/portraitn/item/470d0b08"/>
                            </span>
                            <span class="user-name">132******51</span>
                        </a>
                    </div>
                </header>
                <div className="App_two"><SearchBox /></div>
                <div>
                    <div class="menus-wrapper">
                        <span class="s-menu-item" onClick={() => this.mid_num_change(1)} style={{ color: this.state.mid_num == 1 ? '#333' : '', borderBottom: this.state.mid_num == 1 ? '#315efb solid 2px' : '' }}>我的关注</span>
                        <span class="s-menu-item" onClick={() => this.mid_num_change(2)} style={{ color: this.state.mid_num == 2 ? '#333' : '', borderBottom: this.state.mid_num == 2 ? '#315efb solid 2px' : '' }}>推荐</span>
                        <span class="s-menu-item" onClick={() => this.mid_num_change(3)} style={{ color: this.state.mid_num == 3 ? '#333' : '', borderBottom: this.state.mid_num == 3 ? '#315efb solid 2px' : '' }}>导航</span>
                    </div>
                    <div style={{ display: this.state.mid_num == 3 ? 'block' : 'none' }}><Daohang /></div>
                    <div style={{ display: this.state.mid_num == 2 ? 'block' : 'none' }}><News /></div>
                </div>
                <div class="s-bottom-layer-content">
                    <p class="lh">
                        <a class="text-color" href="//home.baidu.com" target="_blank">关于百度</a>
                    </p>
                    <p class="lh">
                        <a class="text-color" href="http://ir.baidu.com" target="_blank">About Baidu</a>
                    </p>
                    <p class="lh">
                        <a class="text-color" href="//www.baidu.com/duty" target="_blank">使用百度前必读</a>
                    </p>
                    <p class="lh">
                        <a class="text-color" href="//help.baidu.com" target="_blank">帮助中心</a>
                    </p>
                    <p class="lh">
                        <a class="text-color" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001" target="_blank">京公网安备11000002000001号</a>
                    </p>
                    <p class="lh">
                        <a class="text-color" href="https://beian.miit.gov.cn" target="_blank">京ICP证030173号</a>
                    </p>
                    <p class="lh">
                        <span class="text-color">©2022&nbsp;Baidu&nbsp;</span>
                    </p>
                    <p class="lh">
                        <span class="text-color">互联网药品信息服务资格证书 (京)-经营性-2017-0020</span>
                    </p>
                    <p class="lh">
                        <a class="text-color" href="//www.baidu.com/licence/" target="_blank">信息网络传播视听节目许可证 0110516</a>
                    </p>
                    <p class="lh">
                        <img class="aria-img" src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/footer/aria-3006e33cce.png"/>
                        
                    </p>
                </div>
            </div>
        );
    }

}

export default App;

