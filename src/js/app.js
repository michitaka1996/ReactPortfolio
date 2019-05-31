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
            isBlog: false,

            isContent: false
        };
        this.prevTop = this.prevTop.bind(this);
        this.overState = this.overState.bind(this);

        this.apprSidebar = this.apprSidebar.bind(this);
        this.apprAbout = this.apprAbout.bind(this);
        this.apprSkills = this.apprSkills.bind(this);
        this.apprWork = this.apprWork.bind(this);
        this.apprBlog = this.apprBlog.bind(this);

        this.changeAbout = this.changeAbout.bind(this);
        this.changeSkills = this.changeSkills.bind(this);
        this.changeWork = this.changeWork.bind(this);
        this.changeBlog = this.changeBlog.bind(this);

    }
    prevTop() { //sidebarの非表示  sidebarでタイトル部分をおした時
        console.log('prevTop:サイドバーのタイトルをクリックしたのでtopを表示させ戻ります');

        $('#js-top').css({ transform: 'translateY(0)' });

        const sidebar  = $('.p-sidebar__title').parent();   //サイドバー
        $(sidebar).attr('class', 'p-sidebar__hide');
        $(sidebar).delay(500).queue(function(){
            $(this).hide();
        });
        
        const content = $('.p-container'); 　//コンテンツ
        $(content).attr('class', 'p-container__hide');  //idに変更させること
        $(content).delay(500).queue(function(){
            $(this).hide();
        });

        this.overState();

        console.log('prevTop: 現在のisTop', this.state.isTop);
        console.log('prevTop: 現在のisSide', this.state.isSide);
        console.log('prevTop: 現在のisContent', this.state.isContent);
    }
    overState() {
        this.setState({ isTop: true, isSide: false, isAbout: false, isSkills: false, isWork: false, isBlog: false}); 
    }
    apprSidebar() {
        console.log('sidebarを呼びます');
        this.setState({ isTop: false });
        this.setState({isContent: true});
        this.setState({ isSide: true });
        $('#js-sidebar').css({ display: 'block' });
    }
    apprAbout() {
        console.log('aboutを呼びます');
        this.setState({ isTop: false });
        this.setState({isContent: true});
        this.setState({ isAbout: true });
    }
    apprSkills() {
        console.log('skillsを呼びます');
        this.setState({ isTop: false }); 
        this.setState({isContent: true});
        this.setState({ isSkills: true });
    }
    apprWork() {
        console.log('workを呼びます');
        this.setState({ isTop: false });
        this.setState({isContent: true});
        this.setState({ isWork: true });
    }
    apprBlog() {
        console.log('blogを呼びます');
        this.setState({ isTop: false });
        this.setState({isContent: true});
        this.setState({ isBlog: true });
    }

    
    changeAbout(e) {
        e.preventDefault();
        console.log('aboutにチェンジします');
        this.setState({ isTop: false,  isAbout: true, isSkills: false, isWork: false, isBlog: false});  
    }
    changeSkills(e) {
        e.preventDefault();
        console.log('skillsにチェンジします');
        this.setState({ isTop: false, isAbout: false, isSkills: true, isWork: false, isBlog: false });
    }
    changeWork(e) {
        e.preventDefault();
        console.log('workにチェンジします');
        this.setState({ isTop: false, isAbout: false, isSkills: false, isWork: true, isBlog: false });
    }
    changeBlog(e) {
        e.preventDefault();
        console.log('blogにチェンジします');
        this.setState({ isTop: false, isAbout: false, isSkills: false, isWork: false, isBlog: true });
    }

    render() {
        console.log('render: 現在のisTop', this.state.isTop);
        console.log('render: 現在のisSide', this.state.isSide);
        console.log('render: 現在のisContent', this.state.isContent);
        console.log('render: 現在のisAbout', this.state.isAbout);
        console.log('render: 現在のisSkills', this.state.isSkills);
        console.log('render: 現在のisWork', this.state.isWork);
        console.log('render: 現在のisBlog', this.state.isBlog);


        const sidebar = (this.state.isContent && this.state.isSide) ?
            <section id="js-sidebar" className="p-sidebar">
                <h1 onClick={this.prevTop} className="p-sidebar__title">MichiTaka’s&nbsp;Portfolio</h1>
                <ul className="p-sidebar__menu">
                    <li className="p-sidebar__link"><a onClick={this.changeAbout} className="item p-sidebar__item" href="">About</a></li>
                    <li className="p-sidebar__link"><a onClick={this.changeSkills} className="item p-sidebar__item" href="">Skills</a></li>
                    <li className="p-sidebar__link"><a onClick={this.changeWork} className="item p-sidebar__item" href="">Works</a></li>
                    <li className="p-sidebar__link"><a onClick={this.changeBlog} className="item p-sidebar__item" href="">Blog</a></li>
                </ul>
                <div className="p-top__icon">
                    <a className="github-link" href="https://github.com/michitaka1996"><i className="fab fa-2x  fa-github"></i></a>
                </div>
                <footer className="p-sidebar__footer">
                    <p>Since2019@Michitaka</p>
                </footer>
            </section> : null;

        const about = (this.state.isContent && this.state.isAbout) ?
           <div className="p-container__wrap">
            <article id="js-article__about" className="p-container">
                <h1 className="p-container__title">ABOUT</h1>
                <section className="p-container__contents">
                    <h2 className="">Me</h2>
                    <p>Name : Michitaka Inoue</p>
                    <p>Age: 22</p>
                </section>
                <section className="p-container__contents">
                    <h2 className="">Profile</h2>
                    <p>2018年12月より初めてHTML,CSSを触り、2019年1月よりその他のWebプログラミングを学んでいます。</p>
                    <p>趣味は筋トレと陸上競技(短距離)です。</p>
                </section>
            </article>
           </div>  : null;
        
        const skills = (this.state.isContent && this.state.isSkills) ?
          <div className="p-container__wrap">
            <article id="js-article__skills" className="p-container">
                <h1 className="p-container__title">SKILLS(学習しているもの)</h1>
                <section className="p-container__contents">
                    <h2 className="">Backend</h2>
                    <p>PHP/FuelPHP/WordPress</p>
                </section>
                <section className="p-container__contents">
                    <h2 className="">Frontend</h2>
                    <p>HTML</p>
                    <p>CSS/Sass</p>
                    <p>jQuery/React.js</p>
                    
                </section>
                <section className="p-container__contents">
                    <h2 className="">なりたいエンジニア像</h2>
                    <p>全体的なビジネスの流れを経験したエンジニアになりたいと思っています。</p>
                    <p>スピード感を大事にしていきたいです。</p>
                </section>
            </article>
           </div> : null;
        
        const works = (this.state.isContent && this.state.isWork) ?
           <div className="p-container__wrap">
            <article id="js-article__work" className="p-container p-work">
                <h1 className="p-container__title">Works</h1>
                <section className="p-container__contents">
                    <h2 className="workImg-title">フリマサービスのようなもの</h2>
                    <p className="workImg-comment">Sessionを用いた通常のログインの他に、簡易なゲームでログインできるようにしました。</p>
                    <div className="workImgs-container">
                      <img  className="work-img" src="/images/shop.png"/>
                    </div>
                    <div className="workImgs-container">
                      <img  className="work-img" src="/images/login.png"/>
                    </div>
                    <div className="workImgs-container">
                      <img  className="work-img" src="/images/kanri.png"/>
                    </div>
                </section>

                 <section className="p-container__contents">
                    <h2 className="workImg-title">ポートフォリオまとめ第１弾(レスポンシブ)</h2>
                    <p className="workImg-comment">レスポンシブデザインの練習として作りました。</p>
                    <div   className="workImgs-container">
                      <img className="work-img" src="/images/port1.png"/>
                    </div>
                </section>
                 <section className="p-container__contents">
                    <h2 className="workImg-title">ToDo管理ツール(jquery)</h2>
                    <p className="workImg-comment">Ajax通信を用いて、画面遷移をせずにDBにタスク情報を保存、編集、削除を行えるようにしました。</p>
                    <p className="workImg-comment">Backbone.jsでも作りました。</p>
                    <div className="workImgs-container">
                      <img className="work-img" src="/images/jquery_todo.png"/>
                    </div>
                </section>
                <section className="p-container__contents">
                    <h2 className="workImg-title">WordPress自作テンプレート</h2>
                    <div className="workImgs-container">
                      <img className="work-img" src="/images/wp.png"/>
                    </div>
                </section> 
             </article>
            </div>: null;
           
        const blog = (this.state.isContent && this.state.isBlog) ?
           <div className="p-container__wrap">
            <article id="js-article__blog" className="p-container">
                <h1 className="p-container__title">BLOG</h1>
                <section className="p-container__contents">
                    <h2 className="">Backend</h2>
                    <h2><a href="https://webmichi.hatenadiary.jp/">たかブログ</a></h2>
                    <p>日々の勉強で疑問に思ったことを噛み砕いて書いてます。</p>
                    <p>WordPressの自作ブログを作っていく予定です</p>
                </section>
            </article> 
           </div> : null;
        
        


        
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