import React from 'react';
import { log } from 'util';


//apearConetntでthis.props.hideをfasleにする必要がある

export default class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isHide: this.props.top, //この状態ならtrue this.props.hideはtrue
            isSide: this.props.side  //ここをtrueにすることでsidebarが表示される-> appのside propsを反転させる処理
        };
       
    }
    render() {
        console.log('このisHide(sidebarで確認)', this.state.isHide);
        const sidebar = (this.state.isSide) ?  //isHideをtrueにしたら表示-->topのメニューをクリックしたらisHideをfalseにする
            <section id="js-sidebar" className="p-sidebar">
                <h1 className="p-sidebar__title">MichiTaka’s&nbsp;Portofolio</h1>
                <ul className="p-sidebar__menu">
                    <li className="p-sidebar__link"><a onClick={this.ApearContent} className="item p-sidebar__item" href="">About</a></li>
                    <li className="p-sidebar__link"><a className="item p-sidebar__item" href="">Skills</a></li>
                    <li className="p-sidebar__link"><a className="item p-sidebar__item" href="">Works</a></li>
                    <li className="p-sidebar__link"><a className="item p-sidebar__item" href="">Blog</a></li>
                </ul>
                <div className="p-top__icon">
                    <a className="github-link" href="https://github.com/michitaka1996"><i className="fab fa-2x  fa-github"></i></a>
                </div>
                <footer className="p-sidebar__footer">
                    <p>Since2019@Michitaka</p>
                </footer>
            </section> : null;
        
        return (
            <div>
             {sidebar}
            </div>
        );
    }
}