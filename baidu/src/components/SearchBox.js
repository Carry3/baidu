import React from "react";
import axios from 'axios';
//引入css文件
import './SearchBox.css'

//创建一个类
class SearchBox extends React.Component {
    constructor(props) {
        super(props);  //调用父类构造函数

        this.state = {
            history: [],//存储历史
            history_num: 0,//搜索历史的数量
            show: [],
            num: -1,
            isShow: false,  //框的显示隐藏
            selectIndex: 0, //被选中的下标 改变颜色
            text: ''//input里的value值
        }
        //直接用state里的值 ： this.state
        //改变state里的值 : this.setState({ })
    }
    change = (n) => {
        if (n == -1) {
            this.refs['x'].value = this.state.text;
            return;
        }
        this.refs['x'].value = this.state.show[n];
    }
    start_search = () => {
        var n = this.arr(this.state.history);
        let o;
        if (this.state.num === -1 || this.state.num >= this.state.show.length) {
            o = this.state.text;
        }
        else o = this.state.show[this.state.num];
        if (n != -1) {
            const data = [...this.state.history];
            data.splice(n, 1);
            data.unshift(o);
            this.setState({ history: data })
            window.open('https://www.baidu.com/s?wd=' + o)
            return;
        }
        else {
            if (this.state.history_num == 10) {
                this.setState({ history_num: this.state.history_num + 1 });
                const data = [...this.state.history];
                data.unshift(o);
                data.pop();
                this.setState({ history: data })
            }
            else {
                this.setState({ history_num: this.state.history_num + 1 });
                const data = [...this.state.history];
                data.unshift(o);
                this.setState({ history: data })
            }
            window.open('https://www.baidu.com/s?wd=' + o)
            return;
        }
    }

    move = (e) => {
        if (e.key == "ArrowDown") {
            if (this.state.num == this.state.show.length - 1) {
                this.change(-1)
                this.setState({ num: -1 });
                return;
            }
            this.change(this.state.num + 1)
            this.setState({ num: this.state.num + 1 })
            return;
        }
        if (e.key == "ArrowUp") {
            if (this.state.num == -1) {
                this.change(this.state.show.length - 1)
                this.setState({ num: this.state.show.length - 1 });
                return;
            }
            this.change(this.state.num - 1)
            this.setState({ num: this.state.num - 1 })
            return;
        }
    }
    mouse = (n) => {
        this.setState({
            num: n
        })
        this.change(n);
    }
    arr = (a) => {
        for (var i = 0; i < a.length; i++) {
            if (a[i] == this.state.text) return i;
        }
        return -1;
    }
    add = (e) => {
        if (e.key == "ArrowDown" || e.key == "ArrowUp") return;
        this.setState({ num: -1 });
        if (e.key == "Enter") {
            this.start_search()
            return;
        }

        this.setState({ text: e.target.value })
        if (this.state.text.length == 1) {
            this.setState({
                show: this.state.history
            })
            return;
        }
        axios.get(`/api1${e.target.value}`).then((res) => {
            let str = res.data;
            let str2 = str.slice(16, str.length - 1);
            this.setState({
                show: [...eval(`(${str2})`).s]
            })
        })
    }
    dian = () => {
        if (this.state.text == '') {
            this.setState({
                show: this.state.history,
                isShow: true
            })
            return;
        }
        axios.get(`/api1${this.state.text}`).then((res) => {
            let str = res.data;
            let str2 = str.slice(16, str.length - 1);
            this.setState({
                show: [...eval(`(${str2})`).s],
                isShow: true
            })
        })
    }
    quxiao = () => {
        setTimeout(() => {
            this.setState({isShow: false})
        }, 250)
    }
    render() {
        return (
            <div className="mid">
                <div className="left_blank"></div>
                <div className="sousuo">
                    <div class="thing">
                        <div class="search-top">
                            <a href="https://www.baidu.com/">
                                <img id="s_lg_img" class="s_lg_img_gold_show" src="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" width="270" height="129" onerror="this.src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1-66368c33f8.png';this.onerror=null;" usemap="#mp"></img>
                            </a>
                        </div>

                        <div class="Search">
                            <div class="Search_box">
                                <a className="soutu" href="https://graph.baidu.com/pcpage/index?tpl_from=pc" target="_blank"></a>
                                <input type="text" ref='x' onKeyDown={(e) => this.move(e)} onKeyUp={(e) => this.add(e)} onFocus={() => this.dian()} onBlur={() => this.quxiao()} className={this.state.show.length != 0 && this.state.isShow ? 'kuang1' + ' kuang' : 'kuang2' + ' kuang'}></input>
                                <input type="submit" value="百度一下" class="anniu" onClick={this.start_search}></input>
                            </div>
                            <div className='one' style={{ display: this.state.show.length != 0 && this.state.isShow ? 'block' : 'none' }}>
                                <ul>
                                    {
                                        this.state.show.map((val, index) => {
                                            return <li key={index} className={this.state.num == index ? 'active' : ''} onClick={this.start_search} onMouseMove={() => this.mouse(index)}>{val}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className="right_blank"></div>
            </div>

        );
    }
}

export default SearchBox;
