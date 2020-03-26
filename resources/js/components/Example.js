import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    const a = [1,2,3,4];
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {
                        a.map(item => (
                            <div className="card">
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
