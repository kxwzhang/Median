import React from 'react';

class Splash extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='splash-container'>
                <h1 className='splash-head'>Dive deeper on stories that matter to you.</h1>
                <h2>We'll help you find great things to read.</h2>
            </div>
        );
    }
}

export default Splash;