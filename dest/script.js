import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    /*  bind_props  */
    constructor(props) {
        super(props)
        /*  init_state  */
        this.state = { date: '', title: props.title }
        setInterval(() => this.update(), 1000)
    }
    /*  Global_function  */
    update() {
        const dt = new Date()
        const h = dt.getHours();
        const m = dt.getMinutes();
        this.setState({ date: h + ':' + m })
    }

    render() {
        const sl0 = {
            fontWeight: '2em',
            textAlign: 'left'
        }
        const sl1 = {
            fontWeight: '2em',
            textAlign: 'left'
        }
        return (
            <div className="container">
                <div className="header">
                    <div className="left">
                        <div className="content_title">
                            <h3 style={sl1}>{this.state.title}</h3>
                        </div>
                    </div>
                    <div className="right">
                        <div className="content_date">
                            <span style={sl0}>{this.state.date}</span>
                        </div>
                    </div>
                </div>
                <div className="main_title">
                    <h2>シフト管理</h2>
                </div>
                <div className="main_menu">
                    <div className="nav_a item">
                        <a className="innerHTML">シフト確認画面</a>
                    </div>
                    <div className="nav_b item">
                        <a className="innerHTML">シフト投稿画面</a>
                    </div>
                    <div className="nav_c item">
                        <a className="innerHTML">チャット画面</a>
                    </div>
                </div>
                <div className="main_content"></div>
                <div className="footer">
                    <div className="owner"></div>
                </div>
            </div>
        );
    }
}

App.defaultProps = { title: "シフト予定確認画面" };

ReactDOM.render((
    <Router history={history}>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
), document.querySelector('#root'));