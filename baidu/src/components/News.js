import React from "react";
import axios from 'axios';
//引入css文件
import './News.css'
import '../static/iconfont.css'

//创建一个类
class News extends React.Component {
    constructor(props) {
        super(props);  //调用父类构造函数
        this.state = {
            newslist: [],
            hotlist_1: [],
            hotlist_2: [],
            hotlist_3: [],
            hot1: "",
            hot1_url: "",
            hot1_tag: "",
            show_num: 1

        }
        //直接用state里的值 ： this.state
        //改变state里的值 : this.setState({ })
    }
    componentDidMount() {
        axios.get("/api2").then((res) => {
            let str = res.data;
            str = str.slice(8, str.length);
            str = eval(`(${str})`).BBM54PGAwangning;
            this.setState({
                newslist: str
            })
        })
        axios.get("/api3").then((res) => {
            let str = res.data.data[0].value;
            if(str[0].hotTag != 0) {
                this.setState({hot1_tag: str[0].hotTagImg})
            }
            this.setState({
                hotlist_1: str.slice(1, 10),
                hotlist_2: str.slice(10, 20),
                hotlist_3: str.slice(20, 30),
                hot1: str[0].wordQuery,
                hot1_url: str[0].rawUrl
            })
        })
    }
    open = (e) => {
        window.open(e);
    }
    change_hot = () => {
        let n = this.state.show_num;
        n++;
        if (n == 4) n = 1;
        this.setState({ show_num: n })
    }
    render() {
        return (
            <div className="end">
                <div className="left"></div>
                <div className="end_mid">
                    <div className="new">
                        <ul>
                            {
                                this.state.newslist.map((val, index) => {
                                    return <li key={index}>
                                        <div className="pic">
                                            <a href={val.url} title={val.title}><img src={val.imgsrc} className='new-img'></img></a>
                                        </div>
                                        <div className="pic_right">
                                            <div className="title">
                                                <a class="news-title" href={val.url} target="_blank" title={val.title}>{val.title}</a>
                                            </div>
                                            <div className="from-time">
                                                <a class="news-from" href={val.url} target="_blank" title={val.title}>{val.source}</a>
                                                <span class="news-time">{val.ptime}</span>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div></div>
                    <div className="hotsou">
                        <div class="hotsou_title">
                            <a href="https://top.baidu.com/board?platform=pc&amp;sa=pcindex_entry" target="_blank" class="hot-title">
                                <span className="hot-title1">百度热搜</span>
                                <i class="iconfont hot-title2">&#xe654;</i>
                            </a>
                            <a href="javascript:void(0)" onClick={() => this.change_hot()} class="huan">
                                <i class="iconfont">&#xe679;</i>
                                <span>换一换</span>
                            </a>
                        </div>
                        <div className='hot-list' style={{ display: this.state.show_num == 1 ? 'block' : 'none' }}>
                            <ul className="hotlist_one">
                                <li>
                                    <a href="javascript:void(0)" target="_blank" onClick={() => this.open(this.state.hot1_url)} title={this.state.hot1}>
                                        <i class="iconfont icon">&#xe665;</i>
                                        <span class="not-title" className="hot_word">{this.state.hot1}</span>
                                        <span><img style={{ display: this.state.hot1_tag == "" ? 'none' : 'block' }} src={this.state.hot1_tag}></img></span>
                                    </a>
                                </li>
                                {
                                    this.state.hotlist_1.map((val, index) => {
                                        return <li key={index}>
                                            <a href="javascript:void(0)" target="_blank" onClick={() => this.open(val.rawUrl)}>
                                                <span className="hot_id">{val.index+1}</span>
                                                <span className="hot_word">{val.wordQuery}</span>
                                                <img style={{ display: val.hotTag == 0 ? 'none' : 'block' }} src={val.hotTagImg}></img>
                                            </a>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='hot-list' style={{ display: this.state.show_num == 2 ? 'block' : 'none' }}>
                            <ul>
                                {
                                    this.state.hotlist_2.map((val, index) => {
                                        return <li key={index}>
                                            <a href="javascript:void(0)" target="_blank" onClick={() => this.open(val.rawUrl)}>
                                                <span className="hot_id">{val.index+1}</span>
                                                <span className="hot_word">{val.wordQuery}</span>
                                                <img style={{ display: val.hotTag == 0 ? 'none' : 'block' }} src={val.hotTagImg}></img>
                                            </a>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='hot-list' style={{ display: this.state.show_num == 3 ? 'block' : 'none' }}>
                            <ul>
                                {
                                    this.state.hotlist_3.map((val, index) => {
                                        return <li key={index}>
                                            <a href="javascript:void(0)" target="_blank" onClick={() => this.open(val.rawUrl)}>
                                                <span className="hot_id">{val.index+1}</span>
                                                <span className="hot_word">{val.wordQuery}</span>
                                                <img style={{ display: val.hotTag == 0 ? 'none' : 'block' }} src={val.hotTagImg}></img>
                                            </a>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        );
    }
}

export default News;
