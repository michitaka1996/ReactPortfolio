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
        this.aboutApear = this.aboutApear.bind(this);
        this.skillsApear = this.skillsApear.bind(this);
        this.workApear = this.workApear.bind(this);
        this.blogApear = this.blogApear.bind(this);
    }
    aboutApear(e) { //クリックされたら   -->topを上に移動->isTop,isSideをtrueに apearContent()を呼ぶ 　this.props.hideを設定(コンポーネントでtrueに sidebarは隠れる)
        console.log('aboutがクリックされました');
        e.preventDefault();
        console.log('stateのisTopをfalseにします');
        this.setState({ isTop: false });
        console.log('stateのisSideをtrueにします');
        this.setState({ isSide: true });
        $('#js-top').css({ transform: 'translateY(-1000px)' });
        // const top = $('#js-top');
        // $(top).attr('id', '#js-top__up');
        console.log('サイドバーを呼ぶためのメソッドapprSidebarを呼びます');
        this.props.apprSidebar(); 　　　//このapprsidebarで、sidebarコンポーネントに渡す
        this.props.apprAbout();
    }
    skillsApear(e) { //クリックされたら   -->topを上に移動->isTop,isSideをtrueに apearContent()を呼ぶ 　this.props.hideを設定(コンポーネントでtrueに sidebarは隠れる)
        console.log('skillsがクリックされました。');
        e.preventDefault();
        console.log('上に移動させます');
        console.log('stateのisTopをfalseにします');
        this.setState({ isTop: false });
        console.log('stateのisSideをtrueにします');
        this.setState({ isSide: true });
        $('#js-top').css({ transform: 'translateY(-1000px)' });
        console.log('サイドバーを呼ぶためのメソッドapprSidebarを呼びます');
        this.props.apprSidebar(); 　　　//このapprsidebarで、sidebarコンポーネントに渡す
        this.props.apprSkills();
    }
     workApear(e) { //クリックされたら   -->topを上に移動->isTop,isSideをtrueに apearContent()を呼ぶ 　this.props.hideを設定(コンポーネントでtrueに sidebarは隠れる)
        console.log('workがクリックされました');
        e.preventDefault();
        console.log('上に移動させます');
        console.log('stateのisTopをfalseにします');
        this.setState({ isTop: false });
        console.log('stateのisSideをtrueにします');
        this.setState({ isSide: true });
        $('#js-top').css({ transform: 'translateY(-1000px)' });
        console.log('サイドバーを呼ぶためのメソッドapprSidebarを呼びます');
        this.props.apprSidebar(); 　　　//このapprsidebarで、sidebarコンポーネントに渡す
        this.props.apprWork();
     }
    blogApear(e) { //クリックされたら   -->topを上に移動->isTop,isSideをtrueに apearContent()を呼ぶ 　this.props.hideを設定(コンポーネントでtrueに sidebarは隠れる)
        console.log('blogがクリックされましたs');
        e.preventDefault();
        console.log('上に移動させます');
        console.log('stateのisTopをfalseにします');
        this.setState({ isTop: false });
        console.log('stateのisSideをtrueにします');
        this.setState({ isSide: true });
        $('#js-top').css({ transform: 'translateY(-1000px)' });
        console.log('サイドバーを呼ぶためのメソッドapprSidebarを呼びます');
        this.props.apprSidebar(); 　　　//このapprsidebarで、sidebarコンポーネントに渡す
        this.props.apprBlog();
    }
    render() {
        console.log('この時のisTop', this.state.isTop); 
        console.log('この時のisSide', this.state.isSide); 
        return (
            <div>
             <section id="js-top" className="p-top">
                <h1 className="p-top__title">MichiTaka's &nbsp; Portfolio</h1>
                <div className="p-top__menuBox">
                    <ul className="p-top__menu">
                        <li className="item menu__item"><a onClick={this.aboutApear}  className="menu__link" href="">About</a ></li>
                        <li className="item menu__item"><a onClick={this.skillsApear} className="menu__link" href="">Skills</a ></li>
                        <li className="item menu__item"><a onClick={this.workApear}  className="menu__link" href="">Works</a ></li>
                        <li className="item menu__item"><a onClick={this.blogApear}  className="menu__link" href="">Blog</a ></li>
                    </ul>
                </div>
                <div className="p-top__icon">
                    <a  className="github-link" href="https://github.com/michitaka1996"><i className="fab fa-2x  fa-github"></i></a >
                </div>
                <footer className="footer">
                    <p>Since2019@Michitaka</p>
                </footer>
              </section>
            </div>
        );
    }
}

