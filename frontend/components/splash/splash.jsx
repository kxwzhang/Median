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
                    <span className='splash-catories-sub'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </span>
                    <span className='splash-catories-sub'>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                    </span>
                    <span className='splash-catories-sub'>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                    </span>
                    <span className='splash-catories-sub'>
                        <div>13</div>
                        <div>14</div>
                        <div>15</div>
                        <div>16</div>
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
                <div>
                    <ul>
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