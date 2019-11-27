var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  // Lúc chưa có babel-*
  // React.createElement(
  //   'a',
  //   {
  //     href: 'http://haodev.wordpress.vn'
  //   },
  //   'Hao vua change text'
  // ),
  <a href="http://haodev.wordpress.vn">Hao vua change text</a>
  ,
  document.getElementById('root')
);