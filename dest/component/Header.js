import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite';

export default class Header extends Component {
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
        const h = dt.getHours()
        let m = dt.getMinutes()
        if (m.toString().length !== 2) { m = '0' + dt.getMinutes() }
        this.setState({ date: h + ':' + m })
    }

    render() {
        const styles = StyleSheet.create({
            link: {
                color: 'rgb(0,0,0)',
                textDecoration: 'none',
                transition: '.3s',
                ':hover': {
                    color: 'rgba(255, 255, 255, 0.8)'
                }
            },
            sl0: {
                fontWeight: '2em',
                textAlign: 'left'
            },
            sl1: {
                fontWeight: '2em',
                textAlign: 'left'
            }
        })
        return (
            <div className="container">
                <div className="header">
                    <div className="left">
                        <div className="content_title">
                            <h3 className={css(styles.sl0)}>{this.state.title}</h3>
                        </div>
                    </div>
                    <div className="right">
                        <div className="content_date">
                            <span className={css(styles.sl1)}>{this.state.date}</span>
                        </div>
                    </div>
                </div>
                <div className="main_title">
                    <h2>シフト管理</h2>
                </div>
                <div className="main_menu">
                    <div className="nav_a item">
                        <Link to="/comfirm" className={css(styles.link)}>シフト確認画面</Link>
                    </div>
                    <div className="nav_b item">
                        <Link to="/prompt" className={css(styles.link)}>シフト投稿画面</Link>
                    </div>
                    <div className="nav_c item">
                        <Link to="/chat" className={css(styles.link)}>チャット画面</Link>
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