import React from 'react';
import { log } from 'util';



export default class Sidebar extends React.Component{
    // constructor() {
    //     super(props);
    //     this.state = {
    //         // isHide:this.props.hide
    //     };
    //     this.changeContent = this.changeContent.bind(this);
    // }
    // changeContent() {
        
    // }
    render() {
        // console.log('このisHide', this.state.isHide);
        // const hide = this.state.isHide;
        // if (hide) {
            return (
                <section className="p-sidebar">
                    <h1 className="p-sidebar__title">MichiTaka’s&nbsp;Portofolio</h1>
                    <ul className="p-sidebar__menu">
                        <li className="p-sidebar__link"><a onClick={this.changeContent} className="item p-sidebar__item" href="">About</a></li>
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
                </section>
            );
        // }
    }
}