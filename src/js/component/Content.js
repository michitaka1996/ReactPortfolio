import React from 'react';


export default class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
　 　　　//ここでクリックのデータによってcontentを格納した変数で格納していく

        return (
          <article class="p-container">
            <h1 class="p-container__title">ABOUT</h1>
            <section class="p-container__contents">
                <h2 class="">Me</h2>
                <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                </p>
            </section>
            <section class="p-container__contents">
                <h2 class="">Profile</h2>
                <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                </p>
            </section>
            <section class="p-container__contents">
                <h2 class="">Chronology</h2>
                <p>サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                    サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
                </p>
            </section>
          </article>  
        );
    }
}