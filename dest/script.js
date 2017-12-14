import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './component/Header'
import { StyleSheet, css } from 'aphrodite';


/*  Props_init  */
class FrontTitle extends Header { }
class ConfirmTitle extends Header { }
class PromptTitle extends Header { }
class ChatTitle extends Header { }

FrontTitle.defaultProps = { title: "ホーム" }
ConfirmTitle.defaultProps = { title: "シフト予定確認画面" };
PromptTitle.defaultProps = { title: "シフト予定投稿画面" }
ChatTitle.defaultProps = { title: "チャット画面" }

class Front extends Component {
    constructor(props) {
        super(props)
        this.state = { data: '', title: props.title }
    }
    render() {
        return (
            <div>
                <FrontTitle />
                <h1>ふろんと</h1>
            </div>
        )
    }
}

class Confirm extends Component {
    constructor(props) {
        super(props)
        /*  init_state  */
        this.state = { date: '', title: props.title }
    }
    render() {
        return (
            <div>
                <ConfirmTitle />
                <h1>ここではデータが表示されます</h1>
            </div>
        )
    }
}

class Prompt extends Component {
    constructor(props) {
        super(props)
        /*  init_state  */
        this.state = { date: '', title: props.title }
    }
    render() {
        return (
            <div>
                <PromptTitle />
                <h1>ここには入力画面が入ります。</h1>
            </div>
        )
    }
}

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = { data: '', title: props.title }
    }
    render() {
        return (
            <div>
                <ChatTitle />
                <h1>ここではチャット画面を表示します</h1>
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Front} />
            <Route path="/comfirm" component={Confirm} />
            <Route path="/prompt" component={Prompt} />
            <Route path="/chat" component={Chat} />
        </Switch>
    </Router>
), document.querySelector('#root'));