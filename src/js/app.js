import React from 'react';
import ReactDOM from 'react-dom';
import Top from './component/Top';
// import Sidebar from './component/Sidebar';
import _ from 'lodash';



class App extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     };
    //     // this.callBackRemoveTop = this.callBackRemoveTop.bind(this);
    // }

    // callBackRemoveTop() {
    //     console.log('削除させます'); //あとでpropsで呼ぶ
    //     $('#js-top').remove();
    // }
    render() {
        return (
            <Top/>
            // <Sidebar/>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);