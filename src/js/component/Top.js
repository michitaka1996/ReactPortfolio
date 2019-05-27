import Reat from 'react';

export default class Top extends React.Component{
    constructor() {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
          <section id="" className="p-top">
            <h1 className="p-top__title">MichiTaka's &nbsp; Portfolio</h1>
            <div className="p-top__menuBox">
                <ul className="p-top__menu">
                    <li className="item menu__item"><a onClick={}  className="menu__link" href="">About</a ></li>
                    <li className="item menu__item"><a onClick={}  className="menu__link" href="">Skills</a ></li>
                    <li className="item menu__item"><a onClick={}  className="menu__link" href="">Works</a ></li>
                    <li className="item menu__item"><a onClick={}  className="menu__link" href="">Blog</a ></li>
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