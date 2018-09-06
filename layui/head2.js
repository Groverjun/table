// JavaScript Document
var head = '<div id="head">'+
    '<dl class="w1200 clearfix">'+
        '<dt class="slide-bar">youshang</dt>'+
        '<dd>'+
            '<div class="topBar">'+             
                '<div class="user">'+
                    '<a href="#">修改密码</a>'+
                    '<a href="#">重新登录</a>'+
                    '<a href="#">退出系统</a>'+
                '</div>'+
                '<div class="zoom"><span class="pr20">公司：北京</span><span class="pr20">当前用户：admin</span><span class="pr20">角色：管理员</span>登录时间：<span id="time">2015年1月26日</span></div>'+
            '</div>'+
            '<div id="nav" class="nav">'+
                '<ul>'+
                     '<!--<li>'+
                        '<a href="bendizhanguanli/bannerSetup.html">本地站管理</a>'+
                         '<ol class="nav-box0" style="display:none;">'+    
                            '<li><a href="bendizhanguanli/bannerSetup.html">banner设置</a></li>'+
                            '<li><a href="bendizhanguanli/hangyeSetup.html">行业设置</a></li>'+
                            '<li><a href="bendizhanguanli/chanpintuijian.html">产品推荐</a></li>'+
                            '<li><a href="bendizhanguanli/huiyuantuijian.html">会员推荐</a></li>'+
                            '<li><a href="bendizhanguanli/staticpage.html">静态页</a></li>'+
                            '<li><a href="kehuguanli/kehuxinxi.html">客户信息管理</a></li>'+
                            '<li><a href="kehuguanli/sybhygl.html">生意帮会员管理</a></li>'+
                            '<li><a href="kehuguanli/chanpin.html">产品管理</a></li>'+                            
                            '<li><a href="kehuguanli/huodong.html">活动管理</a></li>'+
                            '<li><a href="qudaoxinxiguanli/jibenxinxi.html">基本信息管理</a></li>'+
                        '</ol>'+
                    '</li>-->'+
                     '<li>'+
                        '<a href="qudaoxinxiguanli/jibenxinxi.html">渠道信息管理</a>'+
                        '<ol class="nav-box">'+
                            '<li style="display:none"><a href="qudaoxinxiguanli/yuangong.html">公司信息查看</a></li>'+
                            '<li><a href="qudaoxinxiguanli/yuangong.html">员工管理</a></li>'+
                            '<li><a href="qudaoxinxiguanli/recharge.html">充值管理</a></li>'+
                        '</ol>'+
                    '</li>'+
                    '<li >'+
                        '<a href="kehuguanli/signClient.html">客户管理</a>'+
                        '<ol class="nav-box">'+
                            '<li><a href="kehuguanli/signClient.html">签单客户管理</a></li>'+
                            '<li><a href="kehuguanli/youCare.html">客户关怀管理</a></li>'+
                            '<li><a href="kehuguanli/productOverWarning.html">产品到期预警</a></li>'+
                        '</ol>'+
                    '</li>'+       
                    '<li>'+
                        '<a href="contractOrder/contractEnter.html">合同订单管理</a>'+
                        '<ol class="nav-box">'+                         
                            '<li><a href="contractOrder/contractEnter.html">合同订单录入</a></li>'+ 
                            '<li><a href="contractOrder/websiteMage.html">网站单管理</a></li>'+                            
                            '<li><a href="contractOrder/domainOrderMage.html">域名下单管理</a></li>'+ 
                            '<li><a href="contractOrder/ztcYsbOrderMage.html">直通车/云商宝下单管理</a></li>'+  
                            '<li><a href="contractOrder/weiOrderMage.html">微商宝/分销下单管理</a></li>'+ 
                            '<li><a href="contractOrder/wdjOrderMage.html">微点金管理</a></li>'+                
                        '</ol>'+
                    '</li>'+
                     '<li>'+
                        '<a href="productOrder/productOrder.html">产品下单管理</a>'+
                        '<ol class="nav-box">'+                                             
                            '<li><a href="weidianjinguanli/weidianjin.html">微点金基本信息管理</a></li>'+                
                             '<li><a href="weidianjinguanli/promote.html">微点金升级</a></li>'+    
                             '<li><a href="wangzhan/yunshangbao.html">云商宝优化查询</a></li>'+      
                             '<li><a href="wangzhan/wsbDecorate.html">微商宝装饰</a></li>'+                 
                            '<!--<li><a href="wangzhan/serialNumber.html">序列号查询</a></li>'+                
                            '<!--<li><a href="wangzhan/zhiyunguanli.html">直通车|云商宝下单管理</a></li> -->'+
                            '<li><a href="productOrder/productOrder.html">产品下单管理</a></li>'+  
                            '<li><a href="wangzhan/yunenter.html">网站产品录入</a></li>'+                   
                            '<li><a href="productOrder/memberEnter.html">会员站产品录入</a></li>'+
                            '<li><a href="wangzhan/domainEnter.html">备案解析管理</a></li>'+         
                       '</ol>'+
                    '</li>'+
                   '<li class="move_bg"></li>'+
                '</ul>'+ 
            '</div>'+
        '</dd>'+
    '</dl>'+
'</div>';



var page = '<div class="clearfix">'+
            '<div id="page">'+
                '<a href="#">首页</a>'+
                '<a href="#">&lt;上一页</a>'+
                '<a class="active" href="#">1</a>'+
                '<a href="#">2</a>'+
                '<a href="#">3</a>'+
                '<a href="#">4</a>'+
                '<a href="#">5</a>'+
                '<a href="#">6</a>'+
                '<a href="#">7</a>'+
                '<a href="#">8</a>'+
                '<a href="#">下一页&gt;</a>'+
                '<a href="#">末页</a>'+
                '<span class="text">到</span>'+
                '<input class="textbox" type="text">'+
                '<span class="text">页</span>'+
                '<input class="ok-btn" type="button" value="确定">'+
            '</div>'+
        '</div>';
        
$(function(){
    var navLi = $("#navLi").val()-1;
    var subLi = $("#navSub").val()-1;
        
    $("body").prepend(head);    
    $("#content").append(page);
    
    $("#nav ul > li").eq(navLi).attr("class", "cur");
    $("#nav ul > li").eq(navLi).find("a").eq(subLi).attr("class", "active");
    
});

