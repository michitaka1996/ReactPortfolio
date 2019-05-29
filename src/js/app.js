import React from 'react';
import ReactDOM from 'react-dom';
import Top from './component/Top';
// import Sidebar from './component/Sidebar';
// import Content from './component/Content';
import _ from 'lodash';
import { log } from 'util';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isTop: true,
            isSide: false,
            isAbout: false,
            isSkills: false,
            isWork: false,
            isBlog: false
        };
        this.prevTop = this.prevTop.bind(this);

        this.apprSidebar = this.apprSidebar.bind(this);
        this.apprAbout = this.apprAbout.bind(this);
        this.apprSkills = this.apprSkills.bind(this);
        this.apprWork = this.apprWork.bind(this);
        this.apprBlog = this.apprBlog.bind(this);
    }
    prevTop() {
        console.log('じj');
    }
    apprSidebar() {
        this.setState({ isSide: true });
    }
    apprAbout() {
        this.setState({ isAbout: true });
    }
    apprSkills() {
        this.setState({ isSkills: true });
    }
    apprWork() {
        this.setState({ isWork: true });
    }
    apprBlog() {
        this.setState({ isBlog: true });
    }
    render() {
        const sidebar = (this.state.isSide) ?
            <section id="js-sidebar" className="p-sidebar">
                <h1 onClick={this.prevTop} className="p-sidebar__title">MichiTaka’s&nbsp;Portofolio</h1>
                <ul className="p-sidebar__menu">
                    <li className="p-sidebar__link"><a className="item p-sidebar__item" href="">About</a></li>
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
            <article className="p-container">
                <h1 className="p-container__title">SKILLS</h1>
                <section className="p-container__contents">
                    <h2 className="">Backend</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    </p>
                </section>
                <section className="p-container__contents">
                    <h2 className="">Frontend</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    </p>
                </section>
                <section className="p-container__contents">
                    <h2 className="">なりたいエンジニア像</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    </p>
                </section>
            </article> : null;
        
        const works = (this.state.isWork) ?
            <article class="p-container">
                <h1 class="p-container__title">Works</h1>
                 {/* <section class="p-container__contents">
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
                </section>  */}
            </article> : null;
        
        const blog = (this.state.isBlog) ?
            <article className="p-container">
                <h1 className="p-container__title">BLOG</h1>
                <section className="p-container__contents">
                    <h2 className="">Backend</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    </p>
                </section>
                <section className="p-container__contents">
                    <h2 className="">Frontend</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    </p>
                </section>
                <section className="p-container__contents">
                    <h2 className="">なりたいエンジニア像</h2>
                    <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    </p>
                </section>
            </article> : null;
        
        return (
            <div>
                <Top apprSidebar={this.apprSidebar} apprAbout={this.apprAbout} apprSkills={this.apprSkills} apprWork={this.apprWork} apprBlog={this.apprBlog} />,
                {sidebar},
                {about},
                {skills},
                {works},
                {blog}
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);