import React from 'react';

class CTA extends React.Component {
    render() {
        return(
            <div className="cta">
                <a className="btn" href="https://drive.google.com/file/d/13bxbNfERefNbI6d_Ojzt4cVZz1BNHERb/view" target="_blank">Download Resume</a>
                <a className="btn btn-primary" href="#contact">Let's Talk</a>
            </div>
        );
    }
}

export default CTA