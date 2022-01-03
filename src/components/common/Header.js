import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav class="bg-white navbar navbar-expand-lg navbar-light py-lg-1">
        <div className="container"><a class="navbar-brand" href="/" target="_pg_blank">HANBOOK</a>
          <ul class="flex-row ms-auto navbar-nav order-lg-1 ps-2 pe-2">
            <li class="nav-item"> <a class="nav-link p-2 pb-3 ps-2 pe-2 pt-3" href="#" title="Search"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </g>
            </svg>  검색</a>
            </li>
            <li class="nav-item"> <a class="nav-link p-2 pb-3 ps-2 pe-2 pt-3" href="#" title="View Cart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
              </g>
            </svg> <span class="small">(0)</span> 장바구니</a>
            </li>
            <li class="nav-item"> <a class="nav-link pb-3 ps-2 pe-2 pt-3" href="/mypage" title="Account"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
              </g>
            </svg>  마이페이지</a>
            </li>
          </ul>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown-3" aria-controls="navbarNavDropdown-3" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;