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
                        <div className='splash-categories-item' tabIndex='1'><img src={window.food} />Food</div>
                        <div className='splash-categories-item' tabIndex='2'><img src={window.technology} />Technology</div>
                        <div className='splash-categories-item' tabIndex='3'><img src={window.business} />Business</div>
                        <div className='splash-categories-item' tabIndex='4'><img src={window.medicine} />Medicine</div>
                    </span>
                    <span className='splash-categories-sub'>
                        <div className='splash-categories-item' tabIndex='5'><img src={window.culture} />Culture</div>
                        <div className='splash-categories-item' tabIndex='6'><i class="fas fa-hashtag"></i>Health</div>
                        <div className='splash-categories-item' tabIndex='7'><img src={window.programming} />Programming</div>
                        <div className='splash-categories-item' tabIndex='8'><img src={window.car} />Cars</div>
                    </span>
                    <span className='splash-categories-sub'>
                        <div className='splash-categories-item' tabIndex='9'><img src={window.relationships} />Relationships</div>
                        <div className='splash-categories-item' tabIndex='10'><img src={window.advice} />Advice</div>
                        <div className='splash-categories-item' tabIndex='11'><i class="fas fa-hashtag"></i>Comedy</div>
                        <div className='splash-categories-item' tabIndex='12'><img src={window.design} />Design</div>
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
                        className='login-option-text'>Have an account?{otherForm}
                    </span>
                    <div className='splash-footer'>
                        <a href='https://github.com/kxwzhang/Median'><i className="fab fa-github-square splash-github"></i></a>
                        <a href='https://www.linkedin.com/in/kevin-zhang-104623191/'><i className="fab fa-linkedin splash-linkedin"></i></a>
                        <div className='attribution'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;