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
                        <div className='splash-categories-item' tabindex='1'>Future</div>
                        <div className='splash-categories-item' tabindex='2'>Technology</div>
                        <div className='splash-categories-item' tabindex='3'>Business</div>
                        <div className='splash-categories-item' tabindex='4'>Work</div>
                    </span>
                    <span className='splash-categories-sub'>
                        <div className='splash-categories-item' tabindex='5'>Culture</div>
                        <div className='splash-categories-item' tabindex='6'>Design</div>
                        <div className='splash-categories-item' tabindex='7'>Programming</div>
                        <div className='splash-categories-item' tabindex='8'>
                            <i class="fas fa-car"></i>
                            Cars</div>
                    </span>
                    <span className='splash-categories-sub'>
                        <div className='splash-categories-item' tabindex='9'>Relationships</div>
                        <div className='splash-categories-item' tabindex='10'>Advice</div>
                        <div className='splash-categories-item' tabindex='11'>Health</div>
                        <div className='splash-categories-item' tabindex='12'>Comedy</div>
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
                        <li>World class publications</li>
                        <li>Undiscovered voices</li>
                        <li>Stories you love</li>
                        <li>All on Median, all for you.</li>
                    </ul>
                    
                </div>
            </div>
        );
    }
}

export default Splash;