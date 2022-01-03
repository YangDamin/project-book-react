import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav class="bg-white navbar navbar-expand-lg navbar-light py-lg-1 mb-lg-5">
            <div class="collapse navbar-collapse " id="navbarNavDropdown-3">
                <ul class="mx-auto navbar-nav">
                    <li className="nav-item"> <a class="nav-link px-lg-3 h2" href="#">소설</a>
                    </li>
                    <li className="nav-item"> <a class="nav-link px-lg-3 h2" href="#">시/에세이</a>
                    </li>
                    <li className="nav-item"> <a class="nav-link px-lg-3 h2" href="#">자기계발</a>
                    </li>
                    <li className="nav-item"> <a class="nav-link px-lg-3 h2" href="#">경제/경영</a>
                    </li>
                    <li className="nav-item"> <a class="nav-link px-lg-3 h2" href="#">컴퓨터/IT</a>
                    </li>
                    <li className="nav-item"> <a class="nav-link px-lg-3 h2" href="#">예술</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;