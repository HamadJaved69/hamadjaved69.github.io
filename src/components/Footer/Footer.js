import React from 'react';

const footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start text-light">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-light">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-light">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-light">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Copyright:
                <a className="text-light" href="#">@hamadjaved69</a>
            </div>
        </footer>
    );
}

export default footer;