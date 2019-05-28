import React from 'react';
import { log } from 'util';
// import Sidebar from './Sidebar';

//topページをクリックして、isHideをtrueに(デフォルトはfalse)
//sidebarでは、もし、isHideがtreuならば isSideをtrueに(デフォルトはfalse)



//大元のまとめのコンポーネント
export default class Top extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isTop: true, //top見せる
            isSide: false //side　隠す
        };
        this.fadeApear = this.fadeApear.bind(this);
    }
    fadeApear(e) { //クリックされたら   -->topを上に移動->isTop,isSideをtrueに apearContent()を呼ぶ 　this.props.hideを設定(コンポーネントでtrueに sidebarは隠れる)
        e.preventDefault();
        console.log('上に移動させます');
        console.log('stateのisTopをfalseにします');
        this.setState({ isTop: false });
        console.log('stateのisSideをtrueにします');
        this.setState({ isSide: true });
        $('#js-top').css({ transform: 'translateY(-1000px)' });
        //sidebarを出すpropsを呼ぶ
        this.props.top;
        this.props.side;
        console.log('サイドバーを呼ぶためのメソッドapprSidebarを呼びます');
        this.props.apprSidebar(); 　　　//このapprsidebarで、sidebarコンポーネントに渡す
    }
    render() {
        console.log('この時のisTop', this.state.isTop); 
        console.log('この時のisSide', this.state.isSide); 
        const sidebar = (this.state.isSide) ?
             <section id="js-sidebar" className="p-sidebar">
                <h1 className="p-sidebar__title">MichiTaka’s&nbsp;Portofolio</h1>
                <ul className="p-sidebar__menu">
                    <li className="p-sidebar__link"><a onClick={this.fadeApear} className="item p-sidebar__item" href="detailMoc.html">About</a></li>
                    <li className="p-sidebar__link"><a onClick={this.fadeApear} className="item p-sidebar__item" href="">Skills</a></li>
                    <li className="p-sidebar__link"><a onClick={this.fadeApear} className="item p-sidebar__item" href="">Works</a></li>
                    <li className="p-sidebar__link"><a onClick={this.fadeApear} className="item p-sidebar__item" href="">Blog</a></li>
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
             <section id="js-top" className="p-top">
                <h1 className="p-top__title">MichiTaka's &nbsp; Portfolio</h1>
                <div className="p-top__menuBox">
                    <ul className="p-top__menu">
                        <li className="item menu__item"><a id="js-menu-click" onClick={this.fadeApear}  className="menu__link" href="">About</a ></li>
                        <li className="item menu__item"><a onClick={this.fadeApear}  className="menu__link" href="">Skills</a ></li>
                        <li className="item menu__item"><a onClick={this.fadeApear}  className="menu__link" href="">Works</a ></li>
                        <li className="item menu__item"><a onClick={this.fadeApear}  className="menu__link" href="">Blog</a ></li>
                    </ul>
                </div>
                <div className="p-top__icon">
                    <a  className="github-link" href="https://github.com/michitaka1996"><i className="fab fa-2x  fa-github"></i></a >
                </div>
                <footer className="footer">
                    <p>Since2019@Michitaka</p>
                </footer>
              </section>
              {sidebar}
            </div>
        );
    }
}

