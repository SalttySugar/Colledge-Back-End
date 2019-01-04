import React , {Component} from "react";

require('./bootstrap');

// Core - these two are required :-)
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import 'tinymce/plugins/paste/plugin'
import 'tinymce/plugins/link/plugin'
import 'tinymce/plugins/autoresize/plugin'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

ReactDOM.render(
    <App/>,
    document.getElementById('page')
);
