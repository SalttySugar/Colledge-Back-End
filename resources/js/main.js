'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Posts = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinymce = require('tinymce/tinymce');

var _tinymce2 = _interopRequireDefault(_tinymce);

require('tinymce/themes/modern/theme');

require('tinymce/plugins/paste/plugin');

require('tinymce/plugins/link/plugin');

require('tinymce/plugins/autoresize/plugin');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var posts = [];

posts.push({
    'id': 1,
    'title': 'Как дела',
    'posted_at': '20.11.2018',
    'updated_at': null,
    'author': 'Onigiri',
    'author_url': '#',
    'published': false
});

posts.push({
    'id': 2,
    'title': 'Маша я тебя люблю',
    'posted_at': '20.11.2018',
    'updated_at': null,
    'author': 'Orihime',
    'author_url': '#',
    'published': false
});

posts.push({
    'id': 3,
    'title': 'This is your first post',
    'posted_at': '20.11.2018',
    'updated_at': null,
    'author': 'Orihime',
    'author_url': '#',
    'published': true
});

posts.push({
    'id': 4,
    'title': 'Как дела',
    'posted_at': '20.11.2018',
    'updated_at': null,
    'author': 'Onigiri',
    'author_url': '#',
    'published': false
});

posts.push({
    'id': 5,
    'title': 'Маша я тебя люблю',
    'posted_at': '20.11.2018',
    'updated_at': null,
    'author': 'Orihime',
    'author_url': '#',
    'published': false
});

posts.push({
    'id': 6,
    'title': 'This is your first post',
    'posted_at': '20.11.2018',
    'updated_at': null,
    'author': 'Orihime',
    'author_url': '#',
    'published': true
});

//*NOTIFICATIONS */

var notifications = [];

notifications.push({
    user_name: "Dany Rend",
    user_url: "User/12",
    action: "Создал запись",
    timespan: "5 минут назад"
});

notifications.push({
    user_name: "Natali",
    user_url: "User/2",
    action: "Опубликовал запись",
    timespan: "1 час назад"
});

var user = {
    name: 'Dima',
    url: '/Admin',
    image_url: ''

    //Categories

};var categories = ['Колледж', 'Спорт', 'Учеба', 'Английский'];

var Row = function (_React$Component) {
    _inherits(Row, _React$Component);

    function Row(props) {
        _classCallCheck(this, Row);

        var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, props));

        _this.props.class == undefined ? '' : '';
        return _this;
    }

    _createClass(Row, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: "row " + (this.props.class ? this.props.class : '') },
                this.props.children
            );
        }
    }]);

    return Row;
}(_react2.default.Component);

var Col = function (_React$Component2) {
    _inherits(Col, _React$Component2);

    function Col(props) {
        _classCallCheck(this, Col);

        var _this2 = _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).call(this, props));

        _this2.xs = _this2.props.xs ? 'col-xs-' + _this2.props.xs : '';
        _this2.sm = _this2.props.sm ? 'col-sm-' + _this2.props.sm : '';
        _this2.md = _this2.props.md ? 'col-md-' + _this2.props.md : '';
        _this2.lg = _this2.props.lg ? 'col-lg-' + _this2.props.lg : '';
        _this2.class = _this2.props.class ? _this2.props.class : '';
        return _this2;
    }

    _createClass(Col, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.xs + this.sm + this.md + this.lg + this.class },
                this.props.children
            );
        }
    }]);

    return Col;
}(_react2.default.Component);

var Aside = function (_Component) {
    _inherits(Aside, _Component);

    function Aside(props) {
        _classCallCheck(this, Aside);

        return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).call(this, props));
    }

    _createClass(Aside, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'aside',
                { className: this.props.class, id: 'aside', onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave },
                _react2.default.createElement(
                    'div',
                    { className: 'logo-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'wrapper' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'bold' },
                            'K'
                        )
                    )
                ),
                _react2.default.createElement(
                    'nav',
                    { className: 'main-nav' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Aside;
}(_react.Component);

var UIReveal = function (_Component2) {
    _inherits(UIReveal, _Component2);

    function UIReveal(props) {
        _classCallCheck(this, UIReveal);

        var _this4 = _possibleConstructorReturn(this, (UIReveal.__proto__ || Object.getPrototypeOf(UIReveal)).call(this, props));

        _this4.outsideClick = _this4.outsideClick.bind(_this4);
        _this4.setWrapperRef = _this4.setWrapperRef.bind(_this4);
        return _this4;
    }

    _createClass(UIReveal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mousedown', this.outsideClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousedown', this.outsideClick);
        }
    }, {
        key: 'setWrapperRef',
        value: function setWrapperRef(node) {
            this.wrapperRef = node;
        }
    }, {
        key: 'outsideClick',
        value: function outsideClick(event) {

            console.log('outside');
            console.log(!this.wrapperRef.contains(event.target));
            if (this.wrapperRef && !this.wrapperRef.contains(event.target) && event.target.classList.contains('ui-reveal-container')) {
                this.props.closeHandler();
            }
        }
    }]);

    return UIReveal;
}(_react.Component);

var ContextMenu = function (_UIReveal) {
    _inherits(ContextMenu, _UIReveal);

    function ContextMenu(props) {
        _classCallCheck(this, ContextMenu);

        return _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, props));
    }

    _createClass(ContextMenu, [{
        key: 'outsideClick',
        value: function outsideClick() {
            if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
                this.props.closeHandler();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _React$createElement;

            return _react2.default.createElement(
                'ul',
                (_React$createElement = { ref: this.setWrapperRef, style: this.props.style }, _defineProperty(_React$createElement, 'ref', this.setWrapperRef), _defineProperty(_React$createElement, 'className', 'ui-context-menu'), _React$createElement),
                this.props.children
            );
        }
    }]);

    return ContextMenu;
}(UIReveal);

var ContextMenuItem = function (_Component3) {
    _inherits(ContextMenuItem, _Component3);

    function ContextMenuItem(props) {
        _classCallCheck(this, ContextMenuItem);

        return _possibleConstructorReturn(this, (ContextMenuItem.__proto__ || Object.getPrototypeOf(ContextMenuItem)).call(this, props));
    }

    _createClass(ContextMenuItem, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                { onClick: this.props.onClick, className: 'ui-context-menu-item usable' },
                this.props.children
            );
        }

        //TODO: CAST TO ANOTHER CLASS

    }]);

    return ContextMenuItem;
}(_react.Component);

var Filter = function (_UIReveal2) {
    _inherits(Filter, _UIReveal2);

    function Filter(props) {
        _classCallCheck(this, Filter);

        var _this7 = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

        _this7.setWrapperRef = _this7.setWrapperRef.bind(_this7);
        _this7.outsideClick = _this7.outsideClick.bind(_this7);
        return _this7;
    }

    _createClass(Filter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'ui-filtering-tool', ref: this.setWrapperRef },
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper' },
                    this.props.children
                )
            );
        }
    }]);

    return Filter;
}(UIReveal);

var Editor = function (_Component4) {
    _inherits(Editor, _Component4);

    function Editor(props) {
        _classCallCheck(this, Editor);

        return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));
    }

    _createClass(Editor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _tinymce2.default.init({
                selector: '#Editor',
                skins: false
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _tinymce2.default.remove("#Editor");
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'textarea',
                { name: 'this.props.name', id: 'Editor', onKeyUp: function onKeyUp() {
                        console.log('work!!');
                    }, onChange: this.props.onChange },
                this.props.children
            );
        }
    }]);

    return Editor;
}(_react.Component);
//TODO: change edtior from container to component*


var PostEditor = function (_UIReveal3) {
    _inherits(PostEditor, _UIReveal3);

    function PostEditor(props) {
        _classCallCheck(this, PostEditor);

        var _this9 = _possibleConstructorReturn(this, (PostEditor.__proto__ || Object.getPrototypeOf(PostEditor)).call(this, props));

        _this9.onChangeHandler = _this9.onChangeHandler.bind(_this9);
        _this9.SubmitEventHandler = _this9.SubmitEventHandler.bind(_this9);
        _this9.props.params.post = _this9.props.params.post ? _this9.props.params.post : {
            'title': '',
            'subtitle': '',
            'content': ''
        };

        return _this9;
    }

    _createClass(PostEditor, [{
        key: 'onChangeHandler',
        value: function onChangeHandler(event) {
            console.log(event.target);

            switch (event.target.getAttribute('name')) {
                case 'post-title':
                    this.props.params.post.title = event.target.value;break;
                case 'post-subtitle':
                    this.props.params.post.subtitle = event.target.value;break;
                case 'post-content':
                    this.props.params.post.subtitle = event.target.value;break;

            }
        }
    }, {
        key: 'SubmitEventHandler',
        value: function SubmitEventHandler() {
            switch (this.props.params.mode) {
                case "edit":
                    _axios2.default.post(document.location.origin + '/Admin/Post/' + this.props.params.post.id + '/Update', this.props.params.post).then(function (response) {
                        console.log(response);
                    }).catch(function (error) {
                        console.log(error);
                    });
                    break;

                case "create":
                    _axios2.default.post(document.location.origin + '/Admin/Post/Create', this.props.params.post).then(function (response) {
                        console.log(response);
                    }).catch(function (error) {
                        console.log(error);
                    });
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'ui-reveal-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-post-editor', ref: this.setWrapperRef },
                    _react2.default.createElement(
                        'div',
                        { className: 'wrapper' },
                        _react2.default.createElement(
                            Row,
                            null,
                            _react2.default.createElement(
                                Col,
                                { md: 6 },
                                _react2.default.createElement(TextInput, { title: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A', content: this.props.params.post.title, onChange: this.onChangeHandler, name: 'post-title' }),
                                _react2.default.createElement(TextInput, { title: '\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A', content: this.props.params.post.subtitle, onChange: this.onChangeHandler, name: 'post-subtitle' })
                            ),
                            _react2.default.createElement(
                                Col,
                                { md: 12 },
                                _react2.default.createElement(Editor, { onChange: this.onChangeHandler, name: 'post-content', content: this.props.params.post.subtitle })
                            ),
                            _react2.default.createElement(
                                Col,
                                { md: 12 },
                                _react2.default.createElement(
                                    SubmitButton,
                                    { onClick: this.SubmitEventHandler },
                                    this.props.params.mode == 'edit' ? 'Сохранить' : 'Создать',
                                    '\'}'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PostEditor;
}(UIReveal);
/**UI for Form ELEMENTS */

//FIXME: Button for default class extend

var SubmitButton = function (_Component5) {
    _inherits(SubmitButton, _Component5);

    function SubmitButton(props) {
        _classCallCheck(this, SubmitButton);

        return _possibleConstructorReturn(this, (SubmitButton.__proto__ || Object.getPrototypeOf(SubmitButton)).call(this, props));
    }

    _createClass(SubmitButton, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { className: 'btn btn-submit primary', onClick: this.props.onClick },
                this.props.children
            );
        }
    }]);

    return SubmitButton;
}(_react.Component);

var TextInput = function (_Component6) {
    _inherits(TextInput, _Component6);

    function TextInput(props) {
        _classCallCheck(this, TextInput);

        return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));
    }

    _createClass(TextInput, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'label',
                { className: "ui-input text " + this.props.class },
                this.props.title ? _react2.default.createElement(
                    'span',
                    null,
                    this.props.title
                ) : '',
                _react2.default.createElement('input', { id: this.props.id, name: this.props.name, onChange: this.props.onChange, type: 'text', placeholder: this.props.placeholder, defaultValue: this.props.content })
            );
        }
    }]);

    return TextInput;
}(_react.Component);

var DropdownSelection = function (_Component7) {
    _inherits(DropdownSelection, _Component7);

    function DropdownSelection(props) {
        _classCallCheck(this, DropdownSelection);

        var _this12 = _possibleConstructorReturn(this, (DropdownSelection.__proto__ || Object.getPrototypeOf(DropdownSelection)).call(this, props));

        _this12.options = _this12.props.options.map(function (option) {
            return _react2.default.createElement(
                'option',
                null,
                option
            );
        });
        return _this12;
    }

    _createClass(DropdownSelection, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'label',
                null,
                this.props.title ? _react2.default.createElement(
                    'span',
                    null,
                    this.props.title
                ) : null,
                _react2.default.createElement(
                    'select',
                    null,
                    this.props.placeholder ? _react2.default.createElement(
                        'option',
                        { disabled: true, selected: true },
                        this.props.placeholder
                    ) : null,
                    this.options
                )
            );
        }
    }]);

    return DropdownSelection;
}(_react.Component);

var DateInput = function (_Component8) {
    _inherits(DateInput, _Component8);

    //TODO:Optimize with DropdownSelection
    function DateInput(props) {
        _classCallCheck(this, DateInput);

        return _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));
    }

    _createClass(DateInput, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'label',
                null,
                this.props.title ? _react2.default.createElement(
                    'span',
                    null,
                    this.props.title
                ) : null,
                _react2.default.createElement(
                    'select',
                    null,
                    _react2.default.createElement(
                        'option',
                        { disabled: true, selected: true },
                        'DD'
                    )
                ),
                _react2.default.createElement(
                    'select',
                    null,
                    _react2.default.createElement(
                        'option',
                        { disabled: true, selected: true },
                        'MM'
                    )
                ),
                _react2.default.createElement(
                    'select',
                    null,
                    _react2.default.createElement(
                        'option',
                        { disabled: true, selected: true },
                        'YYYY'
                    )
                )
            );
        }
    }]);

    return DateInput;
}(_react.Component);

var Panel = function (_Component9) {
    _inherits(Panel, _Component9);

    function Panel(props) {
        _classCallCheck(this, Panel);

        //FIXME: use some REACT function to solve this
        var _this14 = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

        _this14.children = _this14.props.children.map(function (element, i) {
            return _react2.default.createElement(
                'li',
                { key: i },
                element
            );
        });
        return _this14;
    }

    _createClass(Panel, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                { className: 'panel' },
                _react2.default.createElement(
                    'li',
                    { className: 'section-title' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'bold' },
                        this.props.title
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        this.props.subtitle
                    )
                ),
                _react2.default.createElement('li', { className: 'search-container' }),
                _react2.default.createElement('li', { className: 'filter usable' }),
                this.children
            );
        }
    }]);

    return Panel;
}(_react.Component);

var UserProfileUI = function (_Component10) {
    _inherits(UserProfileUI, _Component10);

    //TODO: Cast DropdownUI to separate class for extensions
    function UserProfileUI(props) {
        _classCallCheck(this, UserProfileUI);

        var _this15 = _possibleConstructorReturn(this, (UserProfileUI.__proto__ || Object.getPrototypeOf(UserProfileUI)).call(this, props));

        _this15.state = { active: false };
        return _this15;
    }

    _createClass(UserProfileUI, [{
        key: 'OnClickHandler',
        value: function OnClickHandler(e) {
            this.setState({ active: !this.state.active });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                { className: 'user-profile', onClick: this.OnClickHandler.bind(this) },
                _react2.default.createElement(
                    'div',
                    { className: 'user-photo' },
                    _react2.default.createElement('img', { src: 'source/images/male-user-profile.jpg', alt: '' })
                ),
                _react2.default.createElement(
                    'span',
                    { className: "bold ui-dropdown usable " + (this.state.active ? "active" : '') },
                    'Hugh Jackman',
                    _react2.default.createElement(
                        'ul',
                        { className: 'ui-dropdown-menu' },
                        _react2.default.createElement(
                            'li',
                            { className: 'ui-list-item' },
                            ' ',
                            _react2.default.createElement('i', { className: 'icon-home' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'ui-list-message' },
                                'home'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'ui-list-item' },
                            ' ',
                            _react2.default.createElement('i', { className: 'icon-chart' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'ui-list-message' },
                                'config'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return UserProfileUI;
}(_react.Component);

var Notification = function (_Component11) {
    _inherits(Notification, _Component11);

    function Notification() {
        _classCallCheck(this, Notification);

        return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
    }

    _createClass(Notification, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                { key: 'ui-list-item', className: 'ui-list-item' },
                _react2.default.createElement(
                    'div',
                    { key: 'ui-list-image', className: 'ui-list-image' },
                    '  ',
                    _react2.default.createElement('img', { src: this.props.user_image, alt: this.props.user_name })
                ),
                _react2.default.createElement(
                    'div',
                    { key: 'ui-list-message', className: 'ui-list-message' },
                    ' ',
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'bold' },
                            _react2.default.createElement('a', { href: this.props.user_url }),
                            this.props.user_name
                        ),
                        this.props.action
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.props.timespan
                    )
                )
            );
        }
    }]);

    return Notification;
}(_react.Component);

var NotificationsUI = function (_Component12) {
    _inherits(NotificationsUI, _Component12);

    function NotificationsUI(props) {
        _classCallCheck(this, NotificationsUI);

        var _this17 = _possibleConstructorReturn(this, (NotificationsUI.__proto__ || Object.getPrototypeOf(NotificationsUI)).call(this, props));

        _this17.state = { active: false };

        _this17.notifications = _this17.props.notifications.map(function (notification, i) {
            return _react2.default.createElement(Notification, { key: i,
                user_name: notification.user_name,
                user_image: notification.image,
                user_url: notification.url,
                timespan: notification.timespan,
                action: notification.action
            });
        });

        return _this17;
    }

    _createClass(NotificationsUI, [{
        key: 'OnClickHandler',
        value: function OnClickHandler(e) {
            this.setState({ active: !this.state.active });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                { className: "notifications ui-dropdown usable " + (this.state.active ? "active" : ''), onClick: this.OnClickHandler.bind(this) },
                _react2.default.createElement('i', { className: 'icon-notification' }),
                _react2.default.createElement(
                    'ul',
                    { className: 'ui-dropdown-list' },
                    this.notifications
                )
            );
        }
    }]);

    return NotificationsUI;
}(_react.Component);

var UIAddRecordButton = function (_Component13) {
    _inherits(UIAddRecordButton, _Component13);

    function UIAddRecordButton(props) {
        _classCallCheck(this, UIAddRecordButton);

        return _possibleConstructorReturn(this, (UIAddRecordButton.__proto__ || Object.getPrototypeOf(UIAddRecordButton)).call(this, props));
    }

    _createClass(UIAddRecordButton, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { onClick: this.props.onClick, className: 'btn danger-gradient rounded bold' },
                _react2.default.createElement('i', { className: 'icon-plus' }),
                this.props.content
            );
        }
    }]);

    return UIAddRecordButton;
}(_react.Component);

var UIImportButton = function (_Component14) {
    _inherits(UIImportButton, _Component14);

    function UIImportButton(props) {
        _classCallCheck(this, UIImportButton);

        return _possibleConstructorReturn(this, (UIImportButton.__proto__ || Object.getPrototypeOf(UIImportButton)).call(this, props));
    }

    _createClass(UIImportButton, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { className: 'btn rounded', onClick: this.props.onClick },
                _react2.default.createElement('i', { className: 'icon-download' }),
                this.props.content
            );
        }
    }]);

    return UIImportButton;
}(_react.Component);

var UIFilterButton = function (_Component15) {
    _inherits(UIFilterButton, _Component15);

    function UIFilterButton() {
        _classCallCheck(this, UIFilterButton);

        return _possibleConstructorReturn(this, (UIFilterButton.__proto__ || Object.getPrototypeOf(UIFilterButton)).apply(this, arguments));
    }

    _createClass(UIFilterButton, [{
        key: 'render',
        value: function render() {
            //FIXME:Normal Button for this
            return _react2.default.createElement('i', { className: 'icon-filter', onClick: this.props.onClick });
        }
    }]);

    return UIFilterButton;
}(_react.Component);

var UISearchInput = function (_Component16) {
    _inherits(UISearchInput, _Component16);

    function UISearchInput() {
        _classCallCheck(this, UISearchInput);

        return _possibleConstructorReturn(this, (UISearchInput.__proto__ || Object.getPrototypeOf(UISearchInput)).apply(this, arguments));
    }

    _createClass(UISearchInput, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'label',
                { className: 'submit-input-container' },
                _react2.default.createElement('input', { className: 'rounded input', type: 'text', role: 'search' }),
                _react2.default.createElement(
                    'button',
                    { className: 'btn rounded primary-gradient submit' },
                    _react2.default.createElement('i', { className: 'icon-plus' })
                )
            );
        }
    }]);

    return UISearchInput;
}(_react.Component);

//NEW UI/UX


var Header = function (_React$Component3) {
    _inherits(Header, _React$Component3);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row justify-space-between' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav-left' },
                            _react2.default.createElement(
                                'li',
                                { className: 'sidebar-trigger' },
                                ' ',
                                _react2.default.createElement(
                                    'i',
                                    { className: 'icon-menu' },
                                    ' '
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'search-form' },
                                _react2.default.createElement('div', { className: 'icon-search' })
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav-right gray-color' },
                            _react2.default.createElement(
                                'li',
                                { className: 'email usable' },
                                _react2.default.createElement('i', { className: 'icon-mail' })
                            ),
                            _react2.default.createElement(NotificationsUI, { notifications: notifications }),
                            _react2.default.createElement(UserProfileUI, null)
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

var TableRow = function (_Component17) {
    _inherits(TableRow, _Component17);

    function TableRow(props) {
        _classCallCheck(this, TableRow);

        return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props));
    }

    _createClass(TableRow, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'tr',
                null,
                this.props.children
            );
        }
    }]);

    return TableRow;
}(_react.Component);

var Table = function (_Component18) {
    _inherits(Table, _Component18);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this24 = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this24.state = {
            data: null,
            editor: {
                active: false,
                mode: null,
                post: null
            },
            menu: {
                active: false,
                position: null,
                post: null
            }
        };

        _this24.Editor = null;
        _this24.Pagination = null;
        _this24.closeHandler = _this24.closeHandler.bind(_this24);
        _this24.rowClicked = _this24.rowClicked.bind(_this24);
        _this24.createDataHandler = _this24.createDataHandler.bind(_this24);
        _this24.rowRightClicked = _this24.rowRightClicked.bind(_this24);
        _this24.DeletePost = _this24.DeletePost.bind(_this24);
        _this24.CopyLink = _this24.CopyLink.bind(_this24);
        _this24.ViewOnWebsite = _this24.ViewOnWebsite.bind(_this24);

        return _this24;
    }

    _createClass(Table, [{
        key: 'rowClicked',
        value: function rowClicked(post) {
            this.setState({
                editor: {
                    active: true,
                    mode: 'edit',
                    post: post
                }
            });
        }
    }, {
        key: 'rowRightClicked',
        value: function rowRightClicked(post, position) {
            console.log('click');
            this.setState({
                menu: {
                    active: true,
                    position: position,
                    post: post
                }
            });
        }
    }, {
        key: 'closeHandler',
        value: function closeHandler() {
            this.setState({
                editor: {
                    active: false,
                    mode: null,
                    post: null
                },

                menu: {
                    active: false,
                    position: null,
                    post: null
                }
            });

            console.log('close');
        }
    }, {
        key: 'createDataHandler',
        value: function createDataHandler() {
            this.setState({
                editor: {
                    active: true,
                    mode: 'create',
                    post: null
                },

                page: {
                    current: null,
                    total_data: null,
                    from_data: null,
                    to_data: null,
                    total_pages: null
                }

            });
        }
    }, {
        key: 'DeletePost',
        value: function DeletePost() {
            var _this25 = this;

            _axios2.default.get(document.location.origin + '/Admin/Post/' + this.state.menu.post.id + '/Delete').then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
                return;
            });

            //TODO:Make this cleaner.
            //TODO: Still need to ask data from the server. Naaaa

            var index = this.state.data.findIndex(function (obj) {
                return obj.props.post.id == _this25.state.menu.post.id;
            });
            var dummy = this.state.data.slice();

            dummy.splice(index, 1);
            this.setState({
                data: dummy,
                menu: {
                    active: false,
                    post: null,
                    position: null
                }
            });
        }
    }, {
        key: 'CopyLink',
        value: function CopyLink() {}
    }, {
        key: 'ViewOnWebsite',
        value: function ViewOnWebsite() {}
    }, {
        key: 'render',
        value: function render() {
            //TODO: Migrate @Panel@ to field for extension

            return _react2.default.createElement(
                'div',
                { className: 'table-container' },
                _react2.default.createElement(
                    Panel,
                    null,
                    _react2.default.createElement(UISearchInput, null),
                    _react2.default.createElement(UIImportButton, { content: '\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C' }),
                    _react2.default.createElement(UIAddRecordButton, { onClick: this.createDataHandler, content: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0417\u0430\u043F\u0438\u0441\u044C' })
                ),
                this.state.menu.active ? _react2.default.createElement(
                    ContextMenu,
                    { style: { left: this.state.menu.position.X, top: this.state.menu.position.Y }, closeHandler: this.closeHandler },
                    _react2.default.createElement(
                        ContextMenuItem,
                        { onClick: this.DeletePost },
                        '\u0423\u0434\u0430\u043B\u0438\u0442\u044C'
                    ),
                    _react2.default.createElement(
                        ContextMenuItem,
                        { onClick: this.CopyLink },
                        '\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C C\u044B\u043B\u043A\u0443'
                    ),
                    _react2.default.createElement(
                        ContextMenuItem,
                        { onClick: this.ViewOnWebsite },
                        '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C'
                    )
                ) : '',
                this.state.editor.active ? this.Editor : '',
                _react2.default.createElement(
                    'table',
                    { className: 'data-table' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            { className: 'table-header' },
                            this.props.children
                        ),
                        this.state.data
                    )
                ),
                this.Pagination
            );
        }
    }]);

    return Table;
}(_react.Component);

var PostsTableRow = function (_Component19) {
    _inherits(PostsTableRow, _Component19);

    function PostsTableRow(props) {
        _classCallCheck(this, PostsTableRow);

        var _this26 = _possibleConstructorReturn(this, (PostsTableRow.__proto__ || Object.getPrototypeOf(PostsTableRow)).call(this, props));

        _this26.state = {
            post: _this26.props.post
        };

        _this26.rowClickHandler = _this26.rowClickHandler.bind(_this26);
        _this26.rowRightClickHandler = _this26.rowRightClickHandler.bind(_this26);
        return _this26;
    }

    _createClass(PostsTableRow, [{
        key: 'rowClickHandler',
        value: function rowClickHandler(event) {
            event.preventDefault();

            if (event.target.nodeName != "TD") return;
            this.props.onClick(this.props.post);
        }
    }, {
        key: 'rowRightClickHandler',
        value: function rowRightClickHandler(event) {
            event.preventDefault();

            this.props.onContextMenu(this.props.post, {
                X: event.clientX,
                Y: event.clientY
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'tr',
                { className: 'usable', onClick: this.rowClickHandler, onContextMenu: this.rowRightClickHandler },
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'label',
                        { className: 'ui-input primary rounded row-selector' },
                        _react2.default.createElement('input', { type: 'checkbox', name: 'check' }),
                        _react2.default.createElement('span', null)
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.post.id
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    this.state.post.title
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    this.state.post.created_at
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    '\u041D\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u043B\u043E\u0441\u044C'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'a',
                        { className: 'link-primary', href: document.location.origin + '/Admin/Users/' + this.state.post.author },
                        this.state.post.author
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'danger-badge' },
                        '\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u043E'
                    ),
                    _react2.default.createElement(
                        'label',
                        { className: 'ui-input state' },
                        _react2.default.createElement('input', { defaultValue: this.state.post.published, type: 'checkbox' }),
                        _react2.default.createElement('span', { className: 'input' })
                    )
                )
            );
        }
    }]);

    return PostsTableRow;
}(_react.Component);

var PostsTable = function (_Table) {
    _inherits(PostsTable, _Table);

    function PostsTable(props) {
        _classCallCheck(this, PostsTable);

        var _this27 = _possibleConstructorReturn(this, (PostsTable.__proto__ || Object.getPrototypeOf(PostsTable)).call(this, props));

        _this27.Next = _this27.Next.bind(_this27);
        _this27.Previous = _this27.Previous.bind(_this27);
        return _this27;
    }

    _createClass(PostsTable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this28 = this;

            _axios2.default.get(document.location.origin + '/Admin/Posts?page=1').then(function (response) {
                var posts = [];
                response.data.data.forEach(function (post, i) {
                    posts.push(_react2.default.createElement(PostsTableRow, { key: i, post: post, onClick: _this28.rowClicked, onContextMenu: _this28.rowRightClicked }));
                });

                var nav = [];
                nav.push(_react2.default.createElement(
                    'a',
                    { key: 'back', onClick: _this28.Previous, className: 'pagination-button' },
                    '\u041D\u0430\u0437\u0430\u0434'
                ));
                for (var i = 1; i <= response.data.last_page; i++) {
                    nav.push(_react2.default.createElement(
                        'a',
                        { key: i, className: 'pagination-link' },
                        i
                    ));
                }
                nav.push(_react2.default.createElement(
                    'a',
                    { key: 'next', onClick: _this28.Next, className: 'pagination-button' },
                    '\u0432\u043F\u0435\u0440\u0435\u0434'
                ));

                _this28.Pagination = _react2.default.createElement(
                    'div',
                    { className: 'table-meta' },
                    _react2.default.createElement(
                        'span',
                        null,
                        response.data.from,
                        ' from ',
                        response.data.to,
                        ' total ',
                        response.data.total
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'data-table-pagination' },
                        nav
                    )
                );

                _this28.setState({ data: posts,
                    page: {
                        current: 1,
                        total: response.data.total,
                        from_data: response.data.form,
                        to_data: response.data.to,
                        total_pages: response.data.last_page,
                        per_page: response.data.per_page
                    }
                });
            }, {}).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'Next',
        value: function Next() {
            var _this29 = this;

            _axios2.default.get(document.location.origin + '/Admin/Posts?page=' + (this.state.page.current + 1)).then(function (response) {
                var posts = [];
                response.data.data.forEach(function (post, i) {
                    posts.push(_react2.default.createElement(PostsTableRow, { key: i, post: post, onClick: _this29.rowClicked }));
                });
                console.log(response);
                var nav = [];
                nav.push(_react2.default.createElement(
                    'a',
                    { key: 'back', onClick: _this29.Previous, className: 'pagination-button' },
                    '\u041D\u0430\u0437\u0430\u0434'
                ));
                for (var i = 1; i <= response.data.last_page; i++) {
                    nav.push(_react2.default.createElement(
                        'a',
                        { key: i, className: 'pagination-link' },
                        i
                    ));
                }
                nav.push(_react2.default.createElement(
                    'a',
                    { key: 'next', onClick: _this29.Next, className: 'pagination-button' },
                    '\u0432\u043F\u0435\u0440\u0435\u0434'
                ));

                _this29.Pagination = _react2.default.createElement(
                    'div',
                    { className: 'table-meta' },
                    _react2.default.createElement(
                        'span',
                        null,
                        response.data.per_page,
                        ' from ',
                        response.data.total
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'data-table-pagination' },
                        nav
                    )
                );

                _this29.setState({ data: posts,
                    page: {
                        current: response.data.current_page,
                        total: response.data.total,
                        from_data: response.data.form,
                        to_data: response.data.to,
                        total_pages: response.data.last_page,
                        per_page: response.data.per_page
                    }
                });

                console.log(_this29.state);
            }, {}).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'Previous',
        value: function Previous() {}
    }, {
        key: 'render',
        value: function render() {
            this.Editor = _react2.default.createElement(PostEditor, { closeHandler: this.closeHandler, params: this.state.editor });
            console.log(this.state);
            return _get(PostsTable.prototype.__proto__ || Object.getPrototypeOf(PostsTable.prototype), 'render', this).call(this);
        }
    }]);

    return PostsTable;
}(Table);

var Posts = function (_Component20) {
    _inherits(Posts, _Component20);

    function Posts(props) {
        _classCallCheck(this, Posts);

        return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));
    }

    _createClass(Posts, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    PostsTable,
                    null,
                    _react2.default.createElement(
                        'th',
                        { className: 'bold' },
                        _react2.default.createElement(
                            'label',
                            { className: 'ui-input primary rounded row-selector' },
                            _react2.default.createElement('input', { type: 'checkbox' }),
                            _react2.default.createElement('span', null)
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            'id'
                        )
                    ),
                    _react2.default.createElement(
                        'th',
                        { className: 'bold' },
                        ' \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A'
                    ),
                    _react2.default.createElement(
                        'th',
                        { className: 'bold' },
                        ' \u0414\u0430\u0442\u0430 \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F'
                    ),
                    _react2.default.createElement(
                        'th',
                        { className: 'bold' },
                        ' \u0414\u0430\u0442\u0430 \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F'
                    ),
                    _react2.default.createElement(
                        'th',
                        { className: 'bold' },
                        ' \u0410\u0432\u0442\u043E\u0440'
                    ),
                    _react2.default.createElement(
                        'th',
                        { className: 'bold' },
                        ' \u0421\u0442\u0430\u0442\u0443\u0441'
                    )
                )
            );
        }
    }]);

    return Posts;
}(_react.Component);

exports.Posts = Posts;

var Pages = function (_Component21) {
    _inherits(Pages, _Component21);

    function Pages(props) {
        _classCallCheck(this, Pages);

        return _possibleConstructorReturn(this, (Pages.__proto__ || Object.getPrototypeOf(Pages)).call(this, props));
    }

    _createClass(Pages, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                this.state.editor.active ? _react2.default.createElement(PostEditor, { closeHandler: this.closeHandler, params: this.state.editor }) : null,
                _react2.default.createElement(
                    Panel,
                    null,
                    _react2.default.createElement(UISearchInput, null),
                    _react2.default.createElement(UIImportButton, { content: '\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C' }),
                    _react2.default.createElement(UIAddRecordButton, { onClick: this.createButtonHandler, content: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0417\u0430\u043F\u0438\u0441\u044C' })
                )
            );
        }
    }]);

    return Pages;
}(_react.Component);

var MediaItem = function (_Component22) {
    _inherits(MediaItem, _Component22);

    function MediaItem(props) {
        _classCallCheck(this, MediaItem);

        var _this32 = _possibleConstructorReturn(this, (MediaItem.__proto__ || Object.getPrototypeOf(MediaItem)).call(this, props));

        _this32.RightClickHandler = _this32.RightClickHandler.bind(_this32);
        return _this32;
    }

    _createClass(MediaItem, [{
        key: 'RightClickHandler',
        value: function RightClickHandler(e) {
            e.preventDefault();
            this.props.onContextMenu(this.props.media, {
                x: e.clientX,
                y: e.clientY
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { onContextMenu: this.RightClickHandler, className: 'media-item usable' },
                _react2.default.createElement(
                    'div',
                    { className: 'media-item-icon' },
                    _react2.default.createElement('img', { src: this.props.media.url.toString() })
                )
            );
        }
    }]);

    return MediaItem;
}(_react.Component);

var Media = function (_Component23) {
    _inherits(Media, _Component23);

    function Media(props) {
        _classCallCheck(this, Media);

        var _this33 = _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).call(this, props));

        _this33.state = {
            data: null,
            menu: {
                active: false,
                position: null,
                media: null
            }
        };

        _this33.fileUplaodHandler = _this33.fileUplaodHandler.bind(_this33);
        _this33.contextMenu = _this33.contextMenu.bind(_this33);
        return _this33;
    }

    _createClass(Media, [{
        key: 'closeMenu',
        value: function closeMenu() {
            this.setState({
                menu: {
                    active: false,
                    position: null,
                    media: null
                }
            });
        }
    }, {
        key: 'contextMenu',
        value: function contextMenu(media, position) {
            this.setState({
                menu: {
                    active: true,
                    position: position,
                    media: media
                }
            });
        }
    }, {
        key: 'DeleteMedia',
        value: function DeleteMedia() {
            _axios2.default.get(document.location.origin + '/Admin/Media/' + this.state.menu.media.id + '/delete').then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
                return;
            });

            this.handleMedia();
        }
    }, {
        key: 'CopyLink',
        value: function CopyLink(e) {
            var link = this.state.menu.media.url;
            var input = document.createElement('INPUT');
            input.type = "text";
            input.value = link;
            input.visible = false;
            document.body.append(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
        }
    }, {
        key: 'handleMedia',
        value: function handleMedia() {
            var _this34 = this;

            _axios2.default.get(document.location.origin + '/Admin/Media').then(function (response) {
                var data = [];
                response.data.forEach(function (media, i) {
                    data.push(_react2.default.createElement(
                        Col,
                        { key: i.toString(), md: 2 },
                        _react2.default.createElement(MediaItem, { onContextMenu: _this34.contextMenu, media: media })
                    ));
                });

                _this34.setState({
                    data: data
                });
            }).catch(function (error) {
                console.log(error);
            });

            this.CopyLink = this.CopyLink.bind(this);
            this.DeleteMedia = this.DeleteMedia.bind(this);
            this.closeMenu = this.closeMenu.bind(this);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleMedia();
        }
    }, {
        key: 'fileUplaodHandler',
        value: function fileUplaodHandler(event) {
            var _this35 = this;

            var data = new FormData();
            var settings = { headers: { 'content-type': 'multipart/form-data' } };
            data.append('image', event.target.files[0]);

            _axios2.default.post(document.location.origin + '/Admin/Media/Upload', data, settings).then(function (response) {
                //TODO:Think about returning all data in response.
                _this35.handleMedia();
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    Panel,
                    null,
                    _react2.default.createElement(UISearchInput, null),
                    _react2.default.createElement(UIImportButton, { content: '\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C' }),
                    _react2.default.createElement('input', { name: 'image', type: 'file', onChange: this.fileUplaodHandler })
                ),
                this.state.menu.active ? _react2.default.createElement(
                    ContextMenu,
                    { closeHandler: this.closeMenu, style: { left: this.state.menu.position.x, top: this.state.menu.position.y } },
                    _react2.default.createElement(
                        ContextMenuItem,
                        { onClick: this.DeleteMedia },
                        '\u0423\u0434\u0430\u043B\u0438\u0442\u044C'
                    ),
                    _react2.default.createElement(
                        ContextMenuItem,
                        { onClick: this.CopyLink },
                        '\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443'
                    )
                ) : '',
                _react2.default.createElement(
                    'div',
                    { className: 'media-gallery' },
                    _react2.default.createElement(
                        Row,
                        null,
                        this.state.data
                    )
                )
            );
        }
    }]);

    return Media;
}(_react.Component);

var Home = function (_Component24) {
    _inherits(Home, _Component24);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                'Home'
            );
        }
    }]);

    return Home;
}(_react.Component);

var Users = function (_Component25) {
    _inherits(Users, _Component25);

    function Users() {
        _classCallCheck(this, Users);

        return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
    }

    _createClass(Users, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Table,
                { Editor: _react2.default.createElement(PostEditor, null) },
                _react2.default.createElement(
                    'th',
                    null,
                    '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    '\u0412\u0440\u0435\u043C\u044F'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    '\u0415\u0449\u0435 \u0447\u0442\u043E \u0442\u043E'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    '\u0418 \u0442\u0430\u043A \u0434\u0430\u043B\u0435\u0435'
                )
            );
        }
    }]);

    return Users;
}(_react.Component);

var App = function (_React$Component4) {
    _inherits(App, _React$Component4);

    function App(props) {
        _classCallCheck(this, App);

        var _this38 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this38.state = {
            'aside': false
        };

        _this38.onMouseEnter = _this38.onMouseEnter.bind(_this38);
        _this38.onMouseLeave = _this38.onMouseLeave.bind(_this38);
        return _this38;
    }

    _createClass(App, [{
        key: 'onMouseEnter',
        value: function onMouseEnter() {
            this.setState({
                'aside': true
            });
        }
    }, {
        key: 'onMouseLeave',
        value: function onMouseLeave() {
            this.setState({
                'aside': false
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Aside,
                        { 'class': this.state.aside ? "active" : '', onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave },
                        _react2.default.createElement(
                            'li',
                            { className: 'primary-color' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Admin/', replace: true },
                                _react2.default.createElement('i', { className: 'fa fa-home' }),
                                ' ',
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Home'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'info-color' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Admin/Media', replace: true },
                                _react2.default.createElement('i', { className: 'fa fa-picture-o', 'aria-hidden': 'true' }),
                                ' ',
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Media'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'success-color' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Admin/Posts', replace: true },
                                _react2.default.createElement('i', { className: 'fa fa-thumb-tack' }),
                                ' ',
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Posts'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'danger-color' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Admin/Pages', replace: true },
                                _react2.default.createElement('i', { className: 'fa fa-clone' }),
                                ' ',
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Pages'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'purple-color' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Admin/Users', replace: true },
                                _react2.default.createElement('i', { className: 'fa fa-users' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Users'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: "content " + (this.state.aside ? "aside-active" : '') },
                        _react2.default.createElement(Header, null),
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/Admin', component: Home }),
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/Admin/Media', component: Media }),
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/Admin/Posts', component: Posts }),
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/Admin/Pages', component: Pages }),
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/Admin/Users', component: Users })
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

require('./bootstrap');

// Core - these two are required :-)

// import 'tinymce/skins/lightgray/content.min.css'
// import 'tinymce/skins/lightgray/skin.min.css'


//@prepros-prepend data/data.js
//@prepros-prepend components/grid.js
//@prepros-prepend components/ui.js
//@prepros-prepend components/header.js
//@prepros-prepend components/table.js

//PAGES

//@prepros-prepend pages/home.js
//@prepros-prepend pages/posts.js
//@prepros-prepend pages/pages.js
//@prepros-prepend pages/media.js
//@prepros-prepend App.js

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('page'));