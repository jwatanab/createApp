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
ConfirmTitle.defaultProps = { title: "シフト予定確認画面" }
PromptTitle.defaultProps = { title: "シフト予定投稿画面" }
ChatTitle.defaultProps = { title: "チャット画面" }

/*  Styles  */


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
    formClick(e) {
        /*  再起処理  */
        const that = e.target
    }
    /*  イベントハンドラ登録  */
    doClose(e) {
        const tg = e.target.parentElement
        while (tg.firstChild) {
            tg.removeChild(tg.firstChild);
        }
    }
    doPass(e) {
        // imageを選択
        //imageInput.click();
    }
    doFileChange(e) {
        for (let i = 0; i < imageInput.files.length; i++) {
            const fr = new FileReader();
            const PromiseReader = new Promise((resolve, reject) => {
                resolve(fr.readAsArrayBuffer(imageInput.files[i]));
            });
            PromiseReader.then(() => {
                fr.onload = () => {
                    const u8 = new Uint8Array(fr.result)
                    const blob = new Blob([u8], { type: "image/jpeg" })
                    const url = URL.createObjectURL(blob);
                    Global.images += url
                }
            })
        }
    }
    doStringChange(e) {
        Global.text = e.target.value;
    }
    doSubmit(e) {
        const tg = Global;
        if (!tg.text && !tg.images) return false;
        if (tg.text) {
            var doc = document.createElement('div');
            doc.className = 'insert';
            doc.innerHTML += tg.name + ':' + tg.text;
            body.insertBefore(doc, insert);
        }
        if (tg.images) {
            var img = document.createElement('img');
            var span = document.createElement('span');
            span.className = 'insert';
            span.innerHTML = tg.name + ':';
            img.src = tg.images;
            img.className = 'image';
            body.insertBefore(span, insert);
            body.insertBefore(img, insert);
        }

        /*  Global_init  */
        tg.images = '';
        tg.text = '';
        textInput.value = "";
    }
    render() {
        const styles = StyleSheet.create({
            bar: {
                position: 'fixed',
                bottom: '0',
                right: '0',
                height: '180px',
                width: '360px',
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: '5px',
                transition: '1s'
            },
            close: {
                fontSize: '2em',
                position: 'fixed',
                margin: '5px',
                color: 'white',
                right: '0'
            },
            file: {
                display: 'none'
            },
            i: {
                fontSize: "3em",
                position: 'fixed',
                bottom: '0',
                right: '115px',
                margin: '5px'
            },
            textInput: {
                position: 'fixed',
                bottom: '0',
                height: '18px',
                opacity: '0.6',
                color: 'black',
                cols: '70',
                padding: '5px',
                margin: '7px'
            },
            submitBtn: {
                position: 'fixed',
                bottom: '0',
                right: '0',
                backgroundColor: '#dee7ec',
                fontSize: '1.2em',
                padding: '4.5px 18px',
                margin: '7px'
            },
            people: {
                margin: '14px'
            }
        })
        return (
            <div>
                <ChatTitle />
                <div id='chat_bar' className={css(styles.bar)} onClick={(e) => doClick(e)}>
                    <span className={css(styles.close)}>&times;</span>
                    <h3 className={css(styles.people)}>氏名:</h3>
                    <input className={css(styles.file)} type='file' multiple />
                    <input className={css(styles.textInput)} />
                    <button className={css(styles.submitBtn)}>送信</button>
                    <i className={css(styles.i)}>
                        <i className="fa fa-picture-o"></i>
                    </i>
                </div>
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