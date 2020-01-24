import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';


class Mariana extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header 
                    setLanguage={this.props.setLanguage}
                    isLangSp={this.props.isLangSp}
                />
                <main className="main">
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        
        )
    }
}

export default Mariana
