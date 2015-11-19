webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	var React = __webpack_require__(5);

	var Header = React.createClass({displayName: "Header",
	    render: function () {
	        return (
	            React.createElement("header", null, 
	                React.createElement("h1", null, "林东方，吉才神前端开发设计师。"
	                ), 
	                React.createElement("nav", null, 
	                    React.createElement("ul", null, 
	                        React.createElement("li", null, 
	                            React.createElement("a", {href: "/"}, "首页")
	                        ), 
	                        React.createElement("li", null, 
	                            React.createElement("a", {href: "./"}, "关于我")
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var Ads = React.createClass({displayName: "Ads",
	    render: function () {
	        return (
	            React.createElement("div", {className: "ads"}, 
	                React.createElement("h2", null, "Categories"), 
	                React.createElement("ul", {className: "tag-box inline"}, 
	                    React.createElement("li", null, React.createElement("a", {href: "/"}, 
	                        React.createElement("span", {className: "cat-name"}, "nodejs"), " ", React.createElement("span", {className: "cat-number"}, "1")
	                    ))
	                ), 

	                React.createElement(Book, null), 
	                React.createElement(We, null)
	            )
	        );
	    }
	});

	var Book = React.createClass({displayName: "Book",
	    render: function () {
	        return (
	            React.createElement("div", {className: "fusionads"}, 
	                React.createElement("h2", null, "我看的书"), 
	                React.createElement("span", {className: "fusionentire"}, 
	                React.createElement("a", {href: "/", title: "Web工程师的自我修养"}, 
	                    React.createElement("img", {src: "./public/images/w-3.png", alt: "Web工程师的自我修养"})
	                ), 
	                 React.createElement("span", {className: "fusiontext"}, 
	                    "全栈工程师的历史、所需技能、未来发展方向等话题。"
	                 )
	                 ), 

	                React.createElement("p", null, React.createElement("a", {href: "/", title: "Web工程师的自我修养"}, "介绍"), " | ", React.createElement("a", {
	                    href: "http://item.jd.com/11754085.html", target: "_blank"}, "JD购买地址>>"))
	            )
	        );
	    }
	});
	var We = React.createClass({displayName: "We",
	    render: function () {
	        return (
	            React.createElement("div", {className: "fusionads"}, 
	                React.createElement("h2", null, "我的公众号：690115491"), 
	                React.createElement("span", {className: "fusionentire"}, 
	                     React.createElement("img", {src: "./public/images/w-4.png"})
	                )
	            )
	        );
	    }
	});

	var Primary = React.createClass({displayName: "Primary",
	    render: function () {
	        return (
	            React.createElement("div", {className: "primary"}, 
	                React.createElement(Header, null), 
	                React.createElement(Ads, null)
	            )
	        );
	    }
	});
	var Content = React.createClass({displayName: "Content",
	    render: function(){
	        return (
	            React.createElement("div", {className: "content"}, 
	                React.createElement("div", {className: "yearly-archive archive-page"}, 
	                    React.createElement("h2", null, "2015"), 

	                    React.createElement("p", null, React.createElement("a", {href: "/"}, "响应式设计的一点总结"), " ", React.createElement("span", {
	                        className: "category-tag"}, "[总结]"), React.createElement("span", {className: "date"}, "09月 06日"))
	                    )
	                )
	        );
	    }
	});
	var Container = React.createClass({displayName: "Container",
	    render: function(){
	        return (
	            React.createElement("section", null, 
	                React.createElement(Primary, null), 
	                React.createElement(Content, null)
	            )
	        );
	    }
	});
	React.render(
	    React.createElement(Container, null),
	    document.getElementById('container')
	);

/***/ }
]);