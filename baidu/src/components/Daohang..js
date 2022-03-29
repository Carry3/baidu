import React from "react";
import axios from 'axios';
//引入css文件
import './Daohang.css'
import '../static/iconfont.css'

//创建一个类
class Daohang extends React.Component {
    constructor(props) {
        super(props);  //调用父类构造函数
        this.state = {


        }
        //直接用state里的值 ： this.state
        //改变state里的值 : this.setState({ })
    }

    render() {
        return (
            <div className="daohang">
                <div>
                    <a href="https://www.hao123.com/" title="hao123" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="0">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_hao123.png" />
                        </span>
                        <span class="daohang_txt">hao123</span>
                    </a>
                </div>
                <div>
                    <a href="https://union-click.jd.com/jdc?d=iEZf6v" title="京东" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="1">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_京东.png" />
                        </span>
                        <span class="daohang_txt">京东</span>
                    </a>
                </div>
                <div>
                    <a href="https://s.click.taobao.com/6fv54ku" title="爱淘宝" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="2">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/%E5%AF%BC%E8%88%AAList_%E7%88%B1%E6%B7%98%E5%AE%9D.png" />
                        </span>
                        <span class="daohang_txt">爱淘宝</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.suning.com/?utm_source=hao123&amp;utm_medium=mingzhan" title="苏宁易购" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="3">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_苏宁易购.png" />
                        </span>
                        <span class="daohang_txt">苏宁易购</span>
                    </a>
                </div>
                <div>
                    <a href="https://mos.m.taobao.com/union/jhsjx2020?pid=mm_43125636_4246598_109926450373" title="聚划算" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="4">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_聚划算.png" />
                        </span>
                        <span class="daohang_txt">聚划算</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.taobao.com/" title="淘宝" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="5">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_淘宝.png" />
                        </span>
                        <span class="daohang_txt">淘宝</span>
                    </a>
                </div>
                <div>
                    <a href="https://youjia.baidu.com/view/index?sa=baidu_pc" title="有驾" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="6">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_有驾.png" />
                        </span>
                        <span class="daohang_txt">有驾</span>
                    </a>
                </div>
                <div>
                    <a href="https://haokan.baidu.com/?sfrom=baidu-na" title="好看视频" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="7">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_好看视频.png" />
                        </span>
                        <span class="daohang_txt">好看视频</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.iqiyi.com/" title="爱奇艺" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="8">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_爱奇艺.png" />
                        </span>
                        <span class="daohang_txt">爱奇艺</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.bilibili.com/" title="哔哩哔哩" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="9">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_bilibili.png" />
                        </span>
                        <span class="daohang_txt">哔哩哔哩</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.youku.com/" title="优酷网" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="10">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_优酷.png" />
                        </span>
                        <span class="daohang_txt">优酷网</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.weibo.com/" title="微博" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="11">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_微博.png" />
                        </span>
                        <span class="daohang_txt">微博</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.qq.com/" title="腾讯网" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="12">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_腾讯.png" />
                        </span>
                        <span class="daohang_txt">腾讯网</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.sohu.com/" title="搜狐网" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="13">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_搜狐.png" />
                        </span>
                        <span class="daohang_txt">搜狐网</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.sina.com.cn/" title="新浪网" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="14">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_新浪.png" />
                        </span>
                        <span class="daohang_txt">新浪网</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.vip.com/" title="唯品会" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="15">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_唯品会.png" />
                        </span>
                        <span class="daohang_txt">唯品会</span>
                    </a>
                </div>
                <div>
                    <a href="http://game.baidu.com/home?idfrom=1033" title="百度游戏" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="16">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_百度游戏.png" />
                        </span>
                        <span class="daohang_txt">百度游戏</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.4399.com/" title="4399" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="17">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_4399.png" />
                        </span>
                        <span class="daohang_txt">4399</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.zhaopin.com/" title="智联招聘" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="18">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_智联招聘.png" />
                        </span>
                        <span class="daohang_txt">智联招聘</span>
                    </a>
                </div>
                <div>
                    <a href="http://www.163.com/" title="网易" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="19">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_网易.png" />
                        </span>
                        <span class="daohang_txt">网易</span>

                    </a>
                </div>
                <div class="nav-item nav-item7" data-rid="" data-log="stype:;pos:20;dir:hot;ncols:6;" data-extra="">
                    <a href="http://www.dianping.com/" title="大众点评" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="20">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_大众点评.png" />
                        </span>
                        <span class="daohang_txt">大众点评</span>
                    </a>
                </div>
                <div>
                    <a href="http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&amp;Allianceid=1630&amp;sid=1911&amp;OUID=&amp;jumpUrl=http://www.ctrip.com/" title="携程" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="21">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_携程.png" />
                        </span>
                        <span class="daohang_txt">携程</span>
                    </a>
                </div>
                <div>
                    <a href="https://pan.baidu.com/" title="百度网盘" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="22">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_百度网盘.png" />
                        </span>
                        <span class="daohang_txt">百度网盘</span>
                    </a>
                </div>
                <div class="nav-item nav-item8" data-rid="" data-log="stype:;pos:23;dir:hot;ncols:6;" data-extra="">
                    <a href="https://www.58.com/" title="58同城" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="23">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_58同城.png" />
                        </span>
                        <span class="daohang_txt">58同城</span>
                    </a>
                </div>
                <div>
                    <a href="https://fanyi.baidu.com/" title="百度翻译" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="24">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_百度翻译.png" />
                        </span>
                        <span class="daohang_txt">百度翻译</span>
                    </a>
                </div>
                <div>
                    <a href="https://aiqicha.baidu.com/?fr=bd_ds" title="爱企查" class="nav-block" target="_blank" data-click="LOG_LINK" data-pos="25">
                        <span class="daohang_img">
                            <img height="64" width="64" src="https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/%E5%AF%BC%E8%88%AAList_%E7%88%B1%E4%BC%81%E6%9F%A5.png" />
                        </span>
                        <span class="daohang_txt">爱企查</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Daohang;
