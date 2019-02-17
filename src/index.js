import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);


ReactDOM.render(<div>Hello</div>, document.getElementById('app'));