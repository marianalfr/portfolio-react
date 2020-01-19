import React from 'react';
import '../styles/App.scss';
import HeaderSp from './HeaderSp';
import Footer from './Footer';


class MarianaSp extends React.Component{

    render(){
        return(
            <React.Fragment>
                <HeaderSp />
                <main className="main">
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        
        )
    }
}

export default MarianaSp
