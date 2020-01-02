$(function()
	{
	var a=function(a,b)
		{
		if(b)try
			{
			a()
		}
		catch(l)
			{
			window.console&&window.console.error&&window.console.error(l)
		}
	}
	,d=function()
		{
		"shrink"==Cookies.get("grid_view")&&$((enableShrinkingForAll?"":"#blog_posts ")+".post_content").each(function()
			{
			var a=$(this).siblings(".post_thumbnail");
			a.attr("data-uk-tooltip","title: "+a.data("title")+";
			 pos: bottom")
		}
		)
	}
	,e=function()
		{
		Cookies.set("grid_view","shrink",
			{
			expires:99999
		}
		);
		$((enableShrinkingForAll?"":"#blog_posts ")+".post_content").each(function()
			{
			var a=$(this).siblings(".post_thumbnail");
			a.attr("data-uk-tooltip","title: "+a.data("title")+";
			 pos: bottom");
			0<a.length&&$(this).slideUp(400,function()
				{
				UIkit.update(element=$("#post_body")[0],type="update");
				0==$("#view-skin-1").length&&$("head").append("<style id='view-skin-1' type='text/css'>"+(enableShrinkingForAll?"":"#blog_posts ")+".post_thumbnail + .post_content
					{
					display:none
				}
				</style>")
			}
			)
		}
		)
	}
	,f=function()
		{
		Cookies.set("grid_view","expand",
			{
			expires:99999
		}
		);
		$((enableShrinkingForAll?"":"#blog_posts ")+".post_content").each(function()
			{
			$(this).siblings(".post_thumbnail").removeAttr("data-uk-tooltip");
			$("#view-skin-1").remove();
			$(this).slideDown(400,function()
				{
				UIkit.update(element=$("#post_body")[0],type="update")
			}
			)
		}
		)
	}
	,g=function()
		{
		$("#blog_posts .post.hentry").each(function()
			{
			var a=$(this),b=a.data("id");
			eval("filterTags_"+b).map(function(a,c)
				{
				return filterTags.indexOf(a)
			}
			).forEach(function(l,c)
				{
				a.addClass("filter_"+l)
			}
			)
		}
		)
	}
	,h=_WidgetManager._GetAllData();
	a(function()
		{
		$(".sidenav").after("\x3c!-- .sidemenu --\x3e<div class='sidemenu"+(enableLightStyle?"":" uk-light")+"' data-uk-offcanvas='overlay:true' id='sidemenu'><div class='uk-offcanvas-bar uk-padding-remove"+(enableLightStyle?"":" uk-background-secondary")+"'><button class='uk-icon-button uk-offcanvas-close' data-uk-close=''/></div></div>\x3c!-- .modal --\x3e<div class='uk-modal-full uk-modal' data-uk-modal='' id='search_modal'><div class='uk-modal-dialog uk-flex uk-flex-center uk-flex-middle' data-uk-height-viewport=''><button class='uk-modal-close-full' data-uk-close=''/><form action='/search' class='uk-search uk-search-large uk-padding-small-left uk-padding-small-right'><div class='uk-width-1-1 uk-inline'><button class='uk-form-icon uk-form-icon-flip' data-uk-icon='icon:search;
		ratio:2' type='submit'/><input autocomplete='off' autofocus='' class='uk-search-input' placeholder='"+textSearch+"' value='"+(void 0!=h.blog.searchQuery?h.blog.searchQuery:"")+"' name='q' type='search'/></div></form></div></div>\x3c!-- .totop --\x3e<a class='uk-icon-button uk-position-fixed uk-position-medium uk-position-bottom-right hide' data-uk-scroll='' data-uk-tooltip='pos:left' data-uk-totop='' title='"+textBackToTop+"' href='#!'/>")
	}
	,!0);
	a(function()
		{
		$(".mainnav_menu > ul").each(function()
			{
			var a=$(this),b=a.clone();
			a.find("ul ul").each(function(a)
				{
				var c=$(this);
				c.siblings("a").addClass("sd_"+a).append("<span class='uk-margin-left' data-uk-icon='icon:chevron-right;
				ratio:.75'></span>");
				c.addClass("uk-nav uk-navbar-dropdown-nav uk-list-divider").wrap("<div class='uk-navbar-dropdown' data-uk-drop='mode:hover;
				delay-hide:100;
				toggle:.sd_"+a+"'></div>")
			}
			);
			a.find("ul:not(.uk-nav)").each(function()
				{
				var a=$(this);
				a.siblings("a").append("<span class='uk-margin-xsmall-left' data-uk-icon='icon:chevron-down;
				ratio:.75'></span>");
				a.addClass("uk-nav uk-navbar-dropdown-nav uk-list-divider").wrap("<div class='uk-navbar-dropdown'></div>")
			}
			);
			a.find(".mega").each(function()
				{
				var a=$(this);
				a.parent("li");
				!a.parent("li").hasClass("has_mega")&&a.siblings("a").append("<span class='uk-margin-xsmall-left' data-uk-icon='icon:triangle-down;
				ratio:.75'></span>");
				a.addClass("uk-text-center").append("<div data-uk-spinner=''></div>").parent("li").addClass("has_mega")
			}
			);
			a.find(".has_mega").each(function()
				{
				var a=$(this),c=a.children("a"),b=a.find(".mega");
				if(1<b.length)
					{
					var k=[],e=Math.random().toString().split(".").join("");
					b.each(function()
						{
						var a=$(this);
						a.wrap("<li><li>");
						k.push("<li><a href='#'><span class='uk-margin-x-right' data-uk-icon='tag'></span>"+(""==a.attr("data-label")?"Label Name Not Found":a.attr("data-label")).toString()+"</a></li>")
					}
					);
					a.find("li").wrapAll("<div class='uk-width-3-4 uk-position-relative'><ul id='component-tab-left-"+e+"' class='uk-switcher'></ul></div>");
					c.after("<div class='uk-width-1-4'><ul class='uk-tab-left' data-uk-tab='connect:#component-tab-left-"+e+";
					animation:uk-animation-slide-left-medium,uk-animation-slide-right-medium'>"+k.join("")+"</ul></div>");
					a.find("div[class*='uk-width']").wrapAll("<div class='mega_menu uk-navbar-dropdown'><div class='uk-grid uk-grid-small'></div></div>");
					c.on("click",function()
						{
						c.hasClass("mega_loaded")?c.off():(b.first().arThemes(
							{
							type:"mega",count:3,onComplete:function()
								{
								d()
							}
						}
						),c.addClass("mega_loaded"),a.find(".uk-tab-left li").first().addClass("mega_loaded"))
					}
					);
					a.find(".uk-tab-left li").each(function(a)
						{
						var c=$(this);
						c.children("a").on("click",function()
							{
							c.hasClass("mega_loaded")?c.off():($("#component-tab-left-"+e+" li:nth-child("+(a+1).toString()+") .mega").arThemes(
								{
								type:"mega",count:3,onComplete:function()
									{
									d()
								}
							}
							),c.addClass("mega_loaded"))
						}
						)
					}
					)
				}
				else a.addClass("has_single_mega"),b.wrap("<div class='mega_menu uk-navbar-dropdown'></div>"),c.on("click",function(a)
					{
					a.preventDefault();
					c.hasClass("mega_loaded")?c.off():(b.arThemes(
						{
						type:"mega",count:4,onComplete:function()
							{
							d()
						}
					}
					),c.addClass("mega_loaded"))
				}
				)
			}
			);
			$(".haeder-menu").on("click",function()
				{
				UIkit.tooltip(".haeder-menu").hide()
			}
			);
			$(".sidemenu > div").each(function()
				{
				var a=$(this);
				a.append(b.removeClass("uk-navbar-nav").addClass("sidemenu_list"));
				a.find(".sidemenu_list > li:last-child").remove();
				a.find(".mega").each(function()
					{
					$(this).parent("li").addClass("has_mega")
				}
				);
				a.find("ul,.mega").each(function()
					{
					var a=$(this),b=a.siblings("a");
					a.addClass("drop_content");
					!b.hasClass("drop_title")&&b.addClass("drop_title").append("<span data-uk-icon='icon:plus;
					ratio:.75'/>");
					a.parent("li").addClass("has_drop").attr("data-uk-accordion","multiple:true;
					content:>.drop_content;
					toggle:>.drop_title").wrapInner("<div></div>")
				}
				);
				a.on("click",".drop_title",function()
					{
					var a=$(this);
					"icon:plus;
					ratio:.75"==a.find("[data-uk-icon]").attr("data-uk-icon")?a.find("[data-uk-icon]").attr("data-uk-icon","icon:minus;
					ratio:.75"):a.find("[data-uk-icon]").attr("data-uk-icon","icon:plus;
					ratio:.75");
					a.siblings("div").hasClass("drop_content")||a.siblings("div").addClass("drop_content")
				}
				);
				a.find(".has_mega").each(function()
					{
					var a=$(this),b=a.find(".mega"),k=a.children("div").children("a");
					b.addClass("uk-text-center");
					b.append("<div data-uk-spinner=''></div>");
					1<b.length?(a.addClass("has_multi_mega"),b.wrapAll("<ul class='drop_content'></ul>"),b.wrap("<li class='has_drop' data-uk-accordion='multiple:true;
					content:>.drop_content;
					toggle:>.drop_title'><div></div></li>"),b.each(function()
						{
						var a=$(this);
						a.before("<a class='drop_title' href='#!'>"+(""==a.attr("data-label")?"Label Name Not Found":a.attr("data-label")).toString()+"<span data-uk-icon='icon:plus;
						ratio:.75'/></a>");
						var b=a.siblings("a"),k=a.parent("li");
						b.on("click",function(c)
							{
							c.preventDefault();
							k.hasClass("mega_loaded")?b.off():(a.arThemes(
								{
								type:"mega",count:4,onComplete:function()
									{
									d();
									a.siblings("ul").addClass("drop_content")
								}
							}
							),k.addClass("mega_loaded"))
						}
						)
					}
					)):(a.addClass("has_single_mega"),k.on("click",function(c)
						{
						c.preventDefault();
						a.hasClass("mega_loaded")?k.off():(b.arThemes(
							{
							type:"mega",count:4,onComplete:function()
								{
								d();
								b.siblings("ul").addClass("drop_content")
							}
						}
						),a.addClass("mega_loaded"))
					}
					))
				}
				)
			}
			)
		}
		)
	}
	,!0);
	a(function()
		{
		var a=[window.location.href.replace("&m=1","").replace("?m=1",""),window.location.pathname+window.location.search.replace("&m=1","").replace("?m=1","")];
		$(".mainnav li a,.sidemenu li a").each(function()
			{
			-1<$.inArray($(this).attr("href"),a)&&$(this).parents("li").addClass("current")
		}
		);
		$(".sidemenu li.current[data-uk-accordion] > div").each(function()
			{
			var a=$(this);
			a.addClass("uk-open");
			a.children(".drop_title").find("[data-uk-icon]").attr("data-uk-icon","icon:minus;
			ratio:.75");
			a.children(".drop_content").removeAttr("hidden").attr("aria-hidden",!1)
		}
		);
		d()
	}
	,!0);
	a(function()
		{
		$(".blog_posts").on("click",".post_meta .post_share .action",function()
			{
			$(this).toggleClass("uk-active");
			$(this).parent(".post_share").parent(".post_meta").siblings(".post_snippet").toggleClass("open")
		}
		);
		$(".post_share_buttons").on("click",'[role="button"]',function()
			{
			window.open($(this).data("href"),"_blank","width=640,height=430")
		}
		)
	}
	,!0);
	a(function()
		{
		g();
		$("main .main").attr("data-uk-filter","target:#blog_posts");
		$(".select_label").on("click","a",function()
			{
			$(".select_label select").val($(this).attr("data-uk-filter-control"))
		}
		).on("change","select",function()
			{
			UIkit.filter(".main[data-uk-filter]",
				{
				target:"#blog_posts"
			}
			).apply($("option[data-uk-filter-control='"+$(this).val()+"']")[0])
		}
		);
		UIkit.util.on("[data-uk-filter]","beforeFilter",function()
			{
			$("#blog_posts").removeClass("no_matching_results")
		}
		);
		UIkit.util.on("[data-uk-filter]","afterFilter",function()
			{
			0==$("#blog_posts > *:visible").length&&$("#blog_posts").addClass("no_matching_results")
		}
		)
	}
	,h.view.isHomepage);
	a(function()
		{
		$(".select_view").each(function()
			{
			var a=$(this);
			a.on("click","a",function(a)
				{
				var b=$(this),c=b.parent("li");
				a.preventDefault();
				c.hasClass("uk-active")||($(".select_view .uk-active").removeClass("uk-active"),c.addClass("uk-active"),"shrink"==b.attr("data-uk-icon")?(e(),$(".select_view select").val("shrink")):(f(),$(".select_view select").val("expand")))
			}
			).on("change","select",function()
				{
				var b=$(this);
				"shrink"!=b.val()&&"expand"!=b.val()||a.find(".uk-active").removeClass("uk-active");
				"shrink"==b.val()?(e(),a.find("#view_s").parent("li").addClass("uk-active")):(f(),a.find("#view_e").parent("li").addClass("uk-active"))
			}
			)
		}
		)
	}
	,!0);
	a(function()
		{
		$(".sidebar .widget:last-child .widget-content").attr("data-uk-sticky","bottom:.main_content;
		offset:80;
		media:992")
	}
	,enableStickySidebar);
	a(function()
		{
		$(".blog_pager").on("click","a",function(a)
			{
			var b=$(this),k=b.attr("href");
			a.preventDefault();
			b.hasClass("loading")||(b.addClass("loading"),b.removeAttr("data-uk-icon"),b.html("<div data-uk-spinner=''></div>"),$.ajax(
				{
				url:k,type:"get",dataType:"html",success:function(a)
					{
					var c=$(a).find(".blog_pager a").attr("href");
					void 0!=c?b.attr("href",c):b.parent(".blog_pager").hide();
					$(a).find(".blog_posts article").each(function()
						{
						$(this).appendTo("#blog_posts");
						d();
						g()
					}
					)
				}
				,complete:function()
					{
					b.html("<span class='uk-margin-small-right'>"+b.attr("title")+"</span>");
					b.attr("data-uk-icon","more");
					b.removeClass("loading");
					$(".blog_posts .post_thumbnail a img").on("load",function()
						{
						var a=$(".sidebar .widget:last-child .widget-content");
						enableStickySidebar&&0<a.length&&UIkit.update(element=a[0],type="update")
					}
					)
				}
			}
			))
		}
		)
	}
	,enableInfiniteScroll);
	a(function()
		{
		h.widgets.Blog1.lightboxEnabled&&$(".post_body").attr("data-uk-lightbox","toggle:a[imageanchor]");
		$(".post_related").arThemes(
			{
			type:"related",tags:labelsName,onComplete:function()
				{
				d()
			}
		}
		)
	}
	,h.view.isPost);
	a(function()
		{
		var a=[$(".comments_emotions"),"1f600","1f601","1f602","1f923","1f603","1f604","1f605","1f606","1f609","1f60a","1f60b","1f60e","1f60d","1f618","1f617","1f619","1f61a","263a","1f642","1f917","1f929","1f914","1f928","1f610","1f611","1f636","1f644","1f60f","1f623","1f625","1f62e","1f910","1f62f","1f62a","1f62b","1f634","1f60c","1f61b","1f61c","1f61d","1f924","1f612","1f613","1f614","1f615","1f643","1f911","1f632","2639","1f641","1f616","1f61e","1f61f","1f624","1f622","1f62d","1f626","1f627","1f628","1f629","1f92f","1f62c","1f630","1f631","1f633","1f92a","1f635","1f621","1f620","1f92c","1f637","1f912","1f915","1f922","1f92e","1f927","1f607","1f920","1f921","1f925","1f92b","1f92d","1f9d0","1f913","1f608","1f47f","1f4a9","1f63a","1f638","1f639","1f63b","1f63c","1f63d","1f640","1f63f","1f63e","1f932","1f64c","1f44f","1f91d","1f44d","1f44e","1f44a","270a","1f91b","1f91c","1f91e","270c","1f91f","1f918","1f44c","1f448","1f449","1f446","1f447","261d","270b","1f91a","1f590","1f596","1f44b","1f919","1f4aa","1f64f","2714","274c"];
		a[0].append("<div class='comments_emotions_button uk-button uk-margin-top'><span class='uk-margin-small-right' data-uk-icon='happy'></span><span>"+textEmotions+"</span></div><div class='comments_emotions_content_wrapper'><div class='comments_emotions_content'></div></div>");
		a[0].find(".comments_emotions_content").append("<div class='emoji_note'>"+textEmotionsInfo+"</div>");
		a.forEach(function(b,d)
			{
			0<d&&a[0].find(".comments_emotions_content").append("<span class='emoji_"+d+"'><input value='&#x"+a[d]+"' readonly=''/></span>")
		}
		);
		a[0].on("click","input",function(b)
			{
			b.preventDefault();
			a[0].find("input").blur();
			$(this).select().focus()
		}
		);
		a[0].find(".comments_emotions_button").on("click",function()
			{
			a[0].find(".comments_emotions_content_wrapper").stop().slideToggle()
		}
		)
	}
	,h.view.isSingleItem);
	a(function()
		{
		$(".post_related").arThemes(
			{
			type:"random",onComplete:function()
				{
				d()
			}
		}
		)
	}
	,h.view.isError);
	a(function()
		{
		var a=$("[data-uk-totop]");
		$(window).scrollTop()&&a.removeClass("hide");
		$(window).scroll(function()
			{
			$(window).scrollTop()?a.removeClass("hide"):a.addClass("hide")
		}
		)
	}
	,!0)
}
);
$(window).on("load",function()
	{
	var a=$(".sidebar .widget:last-child .widget-content");
	enableStickySidebar&&0<a.length&&setTimeout(function()
		{
		UIkit.update(element=a[0],type="update")
	}
	,1E3);
	$(".js").remove()
}
);
