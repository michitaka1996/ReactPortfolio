import React from 'react';
import ReactDOM from 'react-dom';
import Top from './component/Top';
// import Sidebar from './component/Sidebar';
// import Content from './component/Content';
import _ from 'lodash';
import { log } from 'util';

//topを表示をした状態からスタート
//top->isHide: false            　sidebar->isSide: fasle
//メニュークリック-> (top)isHide: false　   (sidebar)isSide:trueにしたい  topのメニューをクリックしたらisHideをfalseにする
   //クリック->isSideをtrueに(top側)      isHideをfalseにする(sidebar側)
     //(sidebar側)isHideをfalseにするにはthis.props.hideをfalseにする必要がある
　 //メニュークリック->props.hideをtrue(trueでサイドバーが隠れている状態) ->sidebarを非表示にする(app側でprops.hideをfalseにする)
//


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isTop: true,
            isSide: false,
            isAbout: false,
            isSkills: false
        };
        this.apprSidebar = this.apprSidebar.bind(this);
        this.setSidebar = this.setSidebar.bind(this);
    }
    apprSidebar() {
        this.setSidebar();
        if ($('#js-about-click').click()) {
            console.log('aboutがクリックされました');
            this.setState({ isAbout: true });
        } else if ($('#js-skills-click').data("skills")) {
            console.log('skillsがクリックされました');
            this.setState({isSkills: true});
        }
    }
    setSidebar() {
        this.setState({ isSide: true });
    }
    render() {
        const sidebar = (this.state.isSide) ?
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
        
        const about = (this.state.isAbout) ?
            <article className="p-container">
                <h1 className="p-container__title">ABOUT</h1>
                <section className="p-container__contents">
                    <h2 className="">Me</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                </p>
                </section>
                <section className="p-container__contents">
                    <h2 className="">Profile</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                </p>
                </section>
                <section className="p-container__contents">
                    <h2 className="">Chronology</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                </p>
                </section>
            </article> : null;
        
        const skills = (this.state.isSkills) ?
            <article class="p-container">
                <h1 class="p-container__title">SKILLS</h1>
                <section class="p-container__contents">
                    <h2 class="">Backend</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    </p>
                </section>
                <section class="p-container__contents">
                    <h2 class="">Frontend</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    </p>
                </section>
                <section class="p-container__contents">
                    <h2 class="">なりたいエンジニア像</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    </p>
                </section>
            </article> : null;
        
        return (
            <div>
                <Top apprSidebar={this.apprSidebar} />,
                {sidebar},
                {about},
                {skills}
                {/* <Sidebar side={false}/> */}
                {/* <Sidebar side={this.setSidebar}/> */}
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);