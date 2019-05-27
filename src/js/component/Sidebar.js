import React from 'react';



export default class Sidebar extends React.Component{
    constructor() {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
          <section class="p-sidebar">
            <h1 class="p-sidebar__title">MichiTaka’s&nbsp;Portofolio</h1>
            <ul class="p-sidebar__menu">
                <li class="p-sidebar__link"><a class="item p-sidebar__item" href="">About</a></li>
                <li class="p-sidebar__link"><a class="item p-sidebar__item" href="">Skills</a></li>
                <li class="p-sidebar__link"><a class="item p-sidebar__item" href="">Works</a></li>
                <li class="p-sidebar__link"><a class="item p-sidebar__item" href="">Blog</a></li>
            </ul>
            <div class="p-top__icon">
                <a class="github-link" href="https://github.com/michitaka1996"><i class="fab fa-2x  fa-github"></i></a>
            </div>
            <footer class="p-sidebar__footer">
                <p>Since2019@Michitaka</p>
            </footer>
          </section>
        );
    }
}