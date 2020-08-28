import React from 'react';

class Splash extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { openModal, otherForm } = this.props;
        return (
            <div className='splash-container'>
                <h1 className='splash-head-title'>Dive deeper on stories that matter to you.</h1>
                <h2 className='splash-head-subtitle'>We'll help you find great things to read.</h2>
                <div className='splash-categories-container'>
                    <span className='splash-categories-sub'>
                        <div className='splash-categories-item' tabIndex='1'>Future</div>
                        <div className='splash-categories-item' tabIndex='2'>Technology</div>
                        <div className='splash-categories-item' tabIndex='3'>Business</div>
                        <div className='splash-categories-item' tabIndex='4'>Work</div>
                    </span>
                    <span className='splash-categories-sub'>
                        <div className='splash-categories-item' tabIndex='5'>Culture</div>
                        <div className='splash-categories-item' tabIndex='6'>Design</div>
                        <div className='splash-categories-item' tabIndex='7'>Programming</div>
                        <div className='splash-categories-item' tabIndex='8'>
                            <i className="fas fa-car"></i>
                            Cars</div>
                    </span>
                    <span className='splash-categories-sub'>
                        <div className='splash-categories-item' tabIndex='9'>Relationships</div>
                        <div className='splash-categories-item' tabIndex='10'>Advice</div>
                        <div className='splash-categories-item' tabIndex='11'>Health</div>
                        <div className='splash-categories-item' tabIndex='12'>Comedy</div>
                    </span>
                </div>
                <div className='splash-signup-login-container'>
                    <button
                        className='splash-signup-btn'
                        onClick={() => openModal('signup')}>Get Started
                    </button>
                    <span
                        className='login-option-text'>Already have an account?{otherForm}
                    </span>
                </div>
                <div className='splash-context-container'>
                    <ul className='splash-context-list'>
                        <li className='splash-context-item'>
                            <i className="fas fa-check"></i>
                            World class publications</li>
                        <li className='splash-context-item'>
                            <i className="fas fa-check"></i>
                            Undiscovered voices</li>
                        <li className='splash-context-item'>
                            <i className="fas fa-check"></i>
                            Stories you love</li>
                        <li className='splash-context-item'>All on Median, all for you.</li>
                    </ul>
                    
                </div>
                <div className='splash-footer-container'>
                    <span
                        className='login-option-text'>Already have an account?{otherForm}
                    </span>
                    <div className='splash-footer'>
                        <a href='https://github.com/kxwzhang/Median'><i className="fab fa-github-square splash-github"></i></a>
                        <a href='https://www.linkedin.com/in/kevin-zhang-104623191/'><i className="fab fa-linkedin splash-linkedin"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;