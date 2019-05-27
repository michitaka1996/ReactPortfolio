import React from 'react';
import { log } from 'util';


//大元のまとめのコンポーネント
export default class Top extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isHide : false
        };
        this.fadeApear = this.fadeApear.bind(this);
    }
    fadeApear(e) {
        e.preventDefault();
        console.log('フェードアウトさせます');
        this.setState({ isHide: true });
        $('#js-top').css({ transform: 'translateY(-1000px)' });
    }
    render() {
        return (
          <section id="js-top" className="p-top">
            <h1 className="p-top__title">MichiTaka's &nbsp; Portfolio</h1>
            <div className="p-top__menuBox">
                <ul className="p-top__menu">
                    <li className="item menu__item"><a onClick={this.fadeApear}  className="menu__link" href="">About</a ></li>
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
        );
    }
}

