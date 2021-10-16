import React from 'react'
import './footer.css';

const Footer = () => (
    <div>
        <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                <h2>OpenHackDay <br/> Sri Lanka</h2>
            </div>
            <div className="col-md-3">
            <h5>Docs</h5>
                <ul>
                    <a href="/"><li>Tutorial</li></a>
                </ul>
            </div>
            <div className="col-md-4">
            <h5>Community</h5>
                <ul>
                <a href="/"><li>Stack Overflow</li></a>
                <a href="/"><li>Discord</li></a>
                <a href="/"> <li>Twitter</li></a>
                </ul>
            </div>
          </div>
        </div>
        </div>
        <div className="text-center py-3">
        Copyright © 2021 OpenHackDay. Built with 🖤 in Sri Lanka.
        </div>
    </div>
)

export default Footer
