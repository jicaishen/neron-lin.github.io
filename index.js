require('./public/css/style.css');

var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <header>
                <h1>林东方，吉才神前端开发设计师。
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/">首页</a>
                        </li>
                        <li>
                            <a href="./">关于我</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
});

var Ads = React.createClass({
    render: function () {
        return (
            <div className="ads">
                <h2>Categories</h2>
                <ul className="tag-box inline">
                    <li><a href="/">
                        <span className="cat-name">nodejs</span> <span className="cat-number">1</span>
                    </a></li>
                </ul>

                <Book />
                <We />
            </div>
        );
    }
});

var Book = React.createClass({
    render: function () {
        return (
            <div className="fusionads">
                <h2>我看的书</h2>
                <span className="fusionentire">
                <a href="/" title="Web工程师的自我修养">
                    <img src="./public/images/w-3.png" alt="Web工程师的自我修养"/>
                </a>
                 <span className="fusiontext">
                    全栈工程师的历史、所需技能、未来发展方向等话题。
                 </span>
                 </span>

                <p><a href="/" title="Web工程师的自我修养">介绍</a> | <a
                    href="http://item.jd.com/11754085.html" target="_blank">JD购买地址&gt;&gt;</a></p>
            </div>
        );
    }
});
var We = React.createClass({
    render: function () {
        return (
            <div className="fusionads">
                <h2>我的公众号：690115491</h2>
                <span className="fusionentire">
                     <img src="./public/images/w-4.png"/>
                </span>
            </div>
        );
    }
});

var Primary = React.createClass({
    render: function () {
        return (
            <div className="primary">
                <Header />
                <Ads />
            </div>
        );
    }
});
var Content = React.createClass({
    render: function(){
        return (
            <div className="content">
                <div className="yearly-archive archive-page">
                    <h2>2015</h2>

                    <p><a href="/">响应式设计的一点总结</a> <span
                        className='category-tag'>[总结]</span><span className='date'>09月 06日</span></p>
                    </div>
                </div>
        );
    }
});
var Container = React.createClass({
    render: function(){
        return (
            <section>
                <Primary />
                <Content />
            </section>
        );
    }
});
React.render(
    <Container />,
    document.getElementById('container')
);