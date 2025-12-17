/* 首页 JS */
let $;
let tabs;
let dropdown;
let dropdownInst;
let element;
layui.use(function(){
	$ = layui.$;
	tabs = layui.tabs;
	dropdown = layui.dropdown;
	element = layui.element;

	/**
	 * 菜单数据生成
	 * 1. 调用后台接口获取菜单数据
	 */
	$.getJSON("data/menu.json",function(resp){
		$(".layui-menu").append(create_menu(resp.data));
	});


	//视口宽度
	let innerWidth = window.innerWidth;
	//选项卡宽度
	let tabWidth = innerWidth-210;
	//初始化选项卡宽度（不设置宽度，选项卡超过边界后会挤压整个视口的水平宽度）
	$("#nav-tabs").css({width:tabWidth})

	/*
	 * 初始化标签
	 */
	// 方法渲染
	tabs.render({
		elem: '#nav-tabs',
		header: [
			{
				title: '仪表盘',
				closable:false,
				id:999999999
			}
		],
		body: [
			{
				/* 默认页面,如果换新的页面,修改此页面 */
				content: '<iframe style="border: none;width: 100%;height: 100vh;" src="views/dashboard.html"></iframe>',
				id:999999999
			}
		],
		closable:true,
		index: 0
	});

	/**
	 * 标签右键进行标签管理
	 */
	dropdownInst = dropdown.render({
		elem: '#nav-tabs .layui-tabs-header>li',
		trigger: 'contextmenu',
		data: [{
			title: '关闭其他标签',
			action: 'close',
			mode: 'other'
		}, {
			title: '关闭右侧标签',
			action: 'close',
			mode: 'right'
		}, {
			title: '关闭所有标签',
			action: 'close',
			mode: 'all'
		}],
		click: function(data, othis, event) {
			let index = this.elem.index(); // 获取活动标签索引
			// 新增标签操作
			if(data.action === 'close') { // 关闭标签操作
				if (data.mode === 'this') {
					tabs.close('nav-tabs', index); // 关闭当前标签
				} else {
					tabs.closeMult('nav-tabs', data.mode, index); // 批量关闭标签
				}
			}
		}
	});

	/**
	 * 切换选项卡事件
	 */
	tabs.on('afterChange(nav-tabs)', function(data) {
		//根据选项卡ID定位左侧菜单
		//获取当前选项卡ID
		let $tabId = $(".layui-tabs-header>li[class='layui-this']").attr("lay-id");
		//获取左侧导航菜单
		let $menus = $(".layui-menu li");
		//去掉所有的样式
		$menus.removeClass("layui-menu-item-checked")
		//添加选项卡选中的样式
		$(".layui-menu li[ya-id='"+$tabId+"']").addClass("layui-menu-item-checked");
		//面包屑
		create_bread($tabId);
	})
	/**
	 * 关闭选项卡事件
	 */
	tabs.on('afterClose(nav-tabs)', function(data) {
		//获取当前选项卡ID
		let $tabId = $(".layui-tabs-header>li[class='layui-this']").attr("lay-id");
		//获取左侧导航菜单
		let $menus = $(".layui-menu li");
		//去掉所有的样式
		$menus.removeClass("layui-menu-item-checked")
		//添加选项卡选中的样式
		$(".layui-menu li[ya-id='"+$tabId+"']").addClass("layui-menu-item-checked");
	});


	/*
	 * 点击菜单 隐藏和显示左侧导航栏功能实现
	 */
	$(".ya-menu").click(function (){
		//获取导航对象
		const yaLeft = $(".ya-left");
		if(!yaLeft.hasClass("ya-hidden")){
			yaLeft.addClass("ya-hidden")
		}else {
			yaLeft.removeClass("ya-hidden")
		}
	});
});

/**
 * 生成面包屑导航
 */
function create_bread(id) {
	//如果是用户设置选项卡需要单独处理
	if(id==='888888888'){
		$(".layui-breadcrumb").html(`<a style="cursor: pointer"><cite>用户设置</cite></a>`);
		element.render('breadcrumb', "ya-breadcrumb");
	}else {
		//获取整个左侧导航菜单
		let $menus = $(".layui-menu");
		if($menus){
			//获取当前属性ya-id=id的DOM对象
			let find = $menus.find("li[ya-id='"+id+"']");
			//初始化一个集合，并且将菜单内容设置进去
			let arr = [$.trim(find.text())];
			//查询当前find节点是否存在li标签的祖宗节点
			let ps = find.parents("li");
			if(ps && ps.length>0){
				//存在,获取祖宗节点的内容
				for (let i = 0; i < ps.length; i++) {
					let $title = $(ps[i]).children(".layui-menu-body-title");
					let title = $.trim($title.text());
					arr.push(title);
				}
			}
			let str=[];
			if(arr && arr.length>0){
				if(arr.length===1){
					str.push(`<a style="cursor: pointer"><cite>${arr[0]}</cite></a>`);
				}else {
					for (let i = 0; i < arr.length; i++) {
						if(i===0){
							str.push(`<a style="cursor: pointer"><cite>${arr[i]}</cite></a>`);
						}else {
							str.push(`<a style="cursor: pointer">${arr[i]}</a>`);
						}
					}
				}
				let s = str.reverse().toString();
				$(".layui-breadcrumb").html(s);
				element.render('breadcrumb', "ya-breadcrumb");
			}
		}
	}

}


/**
 * 添加标签的方法
 */
function add_ya(id,title,url) {
	// 判断标签是否已经添加，如果未添加，添加标签，如果已经添加，切到点击的标签
	let list = $(".layui-tabs .layui-tabs-header li[lay-id]");
	//声明存在标志位 默认不存在
	let isExist = false;
	$.each(list,function (){
		let lay_id = $(this).attr("lay-id");
		if(lay_id===id){
			isExist = true;
		}
	})
	//不存在创建
	if(!isExist){
		tabs.add('nav-tabs', {
			title: title,
			id:id,
			content: '<iframe style="border: none;width: 100%;height: 100vh;" src="'+url+'"></iframe>',
			done: function(data) {
				dropdown.render($.extend({}, dropdownInst.config, {
					elem: data.headerItem // 新标签头元素
				}));
			}
		});
	}else {
		//切换
		tabs.change('nav-tabs', id, true)
	}
}
/**
 * 生成导航菜单的函数
 * @param list
 */
function create_menu(list){
	let str = '';
	if(list && list.length>0){
		for (let i = 0; i < list.length; i++) {
			//获取单个对象
			let menu =  list[i];
			if(menu){ //菜单存在
				/**
				 * 单独处理一级菜单
				 * 因为一级菜单分两种情况
				 * 	第一种: 只有一级菜单,并且一级菜单可以进行跳转
				 * 	第二种: 一级菜单不具备跳转功能,只负责对子菜单进行管理(折叠和打开)
				 */
				if(menu.level===1 && menu.type===2){
					str+=`
						<li ya-id="${menu.id}" onclick="add_ya('${menu.id}','${menu.title}','${menu.url}')">
							<div class="layui-menu-body-title">
								<a href="javascript:"><i class="${menu.icon}"></i>  ${menu.title}</a>
							</div>
						</li>
					`;
				}else{
					let mcs = menu.children;
					if(mcs && mcs.length>0){
						//存在子节点,添加外层标签
						str+=`
							<li ya-id="${menu.id}" class="layui-menu-item-group layui-menu-item-up">
								<div class="layui-menu-body-title">
									<span><i class="${menu.icon}"></i></span> ${menu.title}<i class="layui-icon layui-icon-up"></i>
								</div>`
						str+=`<ul>`

						for (let j = 0; j < mcs.length; j++) {
							let mc =  mcs[j];
							let mcls = mc.children;
							if(mcls && mcls.length>0){
								str+=`
												<li ya-id="${mc.id}" class="layui-menu-item-group layui-menu-item-up">
													<div class="layui-menu-body-title">
														<span><i class="${mc.icon}"></i></span> ${mc.title}<i class="layui-icon layui-icon-up"></i>
													</div>`
								str+=`<ul>`
								str+=create_menu(mcls);
								str+=`</ul>`
								str+=`</li>`
							}else{
								str+=`<li ya-id="${mc.id}" onclick="add_ya('${mc.id}','${mc.title}','${mc.url}')">${mc.title}</li>`;
							}
						}
						str+=`</ul>`
						str+=`</li>`
					}else{
						//不存在子节点,说明当前数据是最后一层节点数据，不能包外层标签
						str+=`<li ya-id="${menu.id}" onclick="add_ya('${menu.id}','${menu.title}','${menu.url}')">${menu.title}</li>`;
					}
				}
			}
		}
	}
	return str;
}