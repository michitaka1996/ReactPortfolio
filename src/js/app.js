import React from 'react';
import ReactDOM from 'react-dom';
import Top from './component/Top';
// import Sidebar from './component/Sidebar';
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
    
        };
        this.apprSidebar = this.apprSidebar.bind(this);
        this.setSidebar = this.setSidebar.bind(this);
    }
    apprSidebar() {
        this.setSidebar();
    }
    setSidebar() {
       
    }
    render() {
        return (
            <div>
                <Top apprSidebar={this.apprSidebar}/>,
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