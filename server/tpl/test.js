/**
 * Created by pengchaoyang on 2018/4/4
 */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    div.box:not(:last-child){\n        margin-bottom:10px\n    }\n'], ['\n    div.box:not(:last-child){\n        margin-bottom:10px\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\nline-height:25px;\nmin-height:50px;\n  img{\n    width:50px;\n    height:50px;\n  }\n'], ['\nline-height:25px;\nmin-height:50px;\n  img{\n    width:50px;\n    height:50px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n   list-style:none;\n   font-style:normal;\n   margin:10px 0;\n   padding:0;\n   background:#eee;\n   line-height:25px;\n   font-size:14px;\n   li{\n       padding:8px 30px;\n       text-align:justify;\n       display:block;\n   }\n   li:not(.more){\n        p:before{\n           content:\'\';\n           display:block;\n           clear:both;\n       }\n       p{   margin:0;padding:0;\n            span{\n                float:right;\n                i{\n                    font-style:normal;\n                }\n                img{\n                    display:inline-block;\n                    width:15px;\n                    vertical-align: initial;\n                }\n            }\n       }\n       p:after{\n            content:\'\';\n            clear:both;\n            display:block;\n       }\n   }\n   li:not(:first-child){\n        border-top:1px solid #d9d9d9\n   }\n   li.more{\n        text-align:center;\n        a{\n            margin:0;padding:0;\n            text-decoration:none;\n            color:#096dd9;\n        }\n   }\n   em{\n       font-style:normal;\n       color:#eb7350\n   }\n'], ['\n   list-style:none;\n   font-style:normal;\n   margin:10px 0;\n   padding:0;\n   background:#eee;\n   line-height:25px;\n   font-size:14px;\n   li{\n       padding:8px 30px;\n       text-align:justify;\n       display:block;\n   }\n   li:not(.more){\n        p:before{\n           content:\'\';\n           display:block;\n           clear:both;\n       }\n       p{   margin:0;padding:0;\n            span{\n                float:right;\n                i{\n                    font-style:normal;\n                }\n                img{\n                    display:inline-block;\n                    width:15px;\n                    vertical-align: initial;\n                }\n            }\n       }\n       p:after{\n            content:\'\';\n            clear:both;\n            display:block;\n       }\n   }\n   li:not(:first-child){\n        border-top:1px solid #d9d9d9\n   }\n   li.more{\n        text-align:center;\n        a{\n            margin:0;padding:0;\n            text-decoration:none;\n            color:#096dd9;\n        }\n   }\n   em{\n       font-style:normal;\n       color:#eb7350\n   }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  float:left\n'], ['\n  float:left\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n   margin-left:60px;\n   a{   \n       display:block;\n       font-size:14px;\n       font-weight:bold;\n       color:#000;\n       text-decoration:none;\n   }\n   p{\n       margin:0;\n       padding:0;\n       text-align:justify;\n   }\n'], ['\n   margin-left:60px;\n   a{   \n       display:block;\n       font-size:14px;\n       font-weight:bold;\n       color:#000;\n       text-decoration:none;\n   }\n   p{\n       margin:0;\n       padding:0;\n       text-align:justify;\n   }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var React = require('react');
var styled = require('styled-components').default;
var styles = {
    body: {
        background: '#444',
        padding: '10px'
    },
    box: {
        background: '#fff',
        padding: '20px 20px 5px'

    }
};
var Main = styled.div(_templateObject);
var Title = styled.div(_templateObject2);
var Comment = styled.ul(_templateObject3);
var Image = styled.div(_templateObject4);
var Detail = styled.div(_templateObject5);

var Xxx = function (_React$Component) {
    _inherits(Xxx, _React$Component);

    function Xxx(props) {
        _classCallCheck(this, Xxx);

        var _this = _possibleConstructorReturn(this, (Xxx.__proto__ || Object.getPrototypeOf(Xxx)).call(this, props));

        _this.state = {
            commentState: []
        };
        _this.count = 5;
        return _this;
    }

    _createClass(Xxx, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                data = _props.data,
                config = _props.config,
                label = _props.label;

            return React.createElement(
                Main,
                { style: styles.body },
                data.map(function (item, index) {
                    _this2.state.commentState.push({ state: false, count: 5, text: '查看更多', icon: 'down' });
                    return React.createElement(
                        'div',
                        { className: 'box', style: styles.box, key: index },
                        React.createElement(
                            Title,
                            null,
                            React.createElement(
                                Image,
                                null,
                                React.createElement('img', {
                                    onError: function onError(e) {
                                        e.target.src = "http://dlweb.sogoucdn.com/vr/images/7575.png";
                                    },
                                    src: item.avatar })
                            ),
                            React.createElement(
                                Detail,
                                null,
                                React.createElement(
                                    'a',
                                    { href: 'javascript:void(0)' },
                                    item.name
                                ),
                                React.createElement(
                                    'small',
                                    null,
                                    item.time
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    item.text
                                )
                            )
                        ),
                        item.comments && !!item.comments.length && React.createElement(
                        Comment,
                        null,
                        item.comments.map(function (comment, subindex) {
                            if (subindex < _this2.state.commentState[index].count) {
                                return React.createElement(
                                    'li',
                                    { key: subindex },
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(
                                            'em',
                                            null,
                                            comment.name
                                        ),
                                        ':',
                                        !!comment.prefixs && '回复',
                                        !!comment.prefixs && React.createElement(
                                        'em',
                                        null,
                                        comment.prefixs
                                        ),
                                        comment.text,
                                        React.createElement(
                                            'span',
                                            null,
                                            React.createElement('img', { src: 'https://dlweb.sogoucdn.com/vr/images/icon_lvff/like_1.png' }),
                                            React.createElement(
                                                'i',
                                                null,
                                                comment.liked != 0 ? comment.liked : ''
                                            )
                                        )
                                    )
                                );
                            }
                        }),
                        item.comments && item.comments.length > _this2.count && React.createElement(
                        'li',
                        { className: 'more', ref: function ref(sef) {
                                _this2.more = sef;
                            } },
                        React.createElement(
                            'a',
                            { href: 'javascript:void(0)',
                                onClick: _this2.loadMore.bind(_this2, index) },
                            _this2.state.commentState[index].text
                        )
                        )
                        )
                    );
                })
            );
        }
    }, {
        key: 'loadMore',
        value: function loadMore(clickIndex) {
            var _props2 = this.props,
                data = _props2.data,
                config = _props2.config;

            var commentState = this.state.commentState;
            commentState[clickIndex].state = !commentState[clickIndex].state;
            commentState[clickIndex].text = '查看更多';
            commentState[clickIndex].count = this.count;
            commentState[clickIndex].icon = 'down';
            if (commentState[clickIndex].state) {
                commentState[clickIndex].text = '收起';
                commentState[clickIndex].icon = 'up';
                commentState[clickIndex].count = data[clickIndex].comments.length;
                // commentState[clickIndex].count=get(data[clickIndex],config.commentName,'','array').length;
            }

            this.setState({
                commentState: commentState
            });
        }
    }]);

    return Xxx;
}(React.Component);

Xxx.defaultProps = {
    data: [{
        text: '建设银行深圳分行校招待遇到底怎样啊，收到的offer没提。↵求问各位前辈，求详解。[微笑][微笑][微笑]',
        name: '曲灵风',
        author: '匿名发布:曲灵风',
        avatar: 'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png',
        time: '17-12-21',
        comments: [{ name: '文聘', prefix: '', text: '开始你的表演建设银行深圳分行校招待遇到底怎样啊，收到的offer没提。↵求问各位前辈，求详解。[微笑][微笑][微笑]建设银行深圳分行校招待遇到底怎样啊，收到的offer没提。↵求问各位前辈，求详解。[微笑][微笑][微笑]建设银行深圳分行校招待遇到底怎样啊，收到的offer没提。↵求问各位前辈，求详解。[微笑][微笑][微笑]', avatar: 'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png', liked: 64568451 }, { name: '萧让', prefix: '', text: 'm', avatar: 'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png', liked: 45456462 }, { name: '曲灵风', prefix: '文聘:', text: '求详解[可怜]', liked: 3 }, { name: '曲灵风', prefix: '萧让:', text: '求详解', liked: 5 }]
    }, {
        text: '应届生第一年年终奖发吗？发多少？',
        name: '法正',
        author: '匿名发布:法正',
        avatar: 'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png',
        time: '1天内'
    }, {
        text: '应届生第一年年终奖发吗？发多少？',
        name: '法正',
        author: '匿名发布:法正',
        avatar: 'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png',
        time: '1天内',
        comments: [{ name: '元始天尊', prefix: '', text: '所以?', liked: 1 }, { name: '萧让', prefix: '', text: 'm', avatar: 'http://i9.taou.com/maimai/p/aurl/v3/avatar_xuesheng.png', liked: 2 }, { name: '曲灵风', prefix: '文聘:', text: '求详解[可怜]', liked: 3 }, { name: '萧让', prefix: '', text: 'm', liked: 4 }, { name: '曲灵风', prefix: '文聘:', text: '求详解[可怜]', liked: 5 }, { name: '萧让', prefix: '', text: 'm', liked: 6 }, { name: '曲灵风', prefix: '文聘:', text: '求详解+1[可怜]', liked: 7 }]
    }],
    config: {}
};

module.exports = Xxx;
