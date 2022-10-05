import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faMicrophone,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin,
	faInstagram,
	faYoutube,
	faGithub
} from '@fortawesome/free-brands-svg-icons';

const date = () => {
  const date = new Date();
  let year = date.getFullYear();
  return year;
};
const Footer = () => {

  return (
    <div className='footer'>
      <div className="footer_inner">
      <div>
      <p className="footer-body">
				Copyright &copy; <span>{date()} </span> Trant
			</p>
      </div>

      <div>
      <ul className="navbar-sm">
					<li>
						<a
							href="https://www.linkedin.com/in/blossom-babalola/"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/blossom-babs/"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
					<li>
						<a href="https://anchor.fm/trant" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faMicrophone} />
						</a>
					</li>
					<li>
						<a
							href="https://www.youtube.com/channel/UCWqoKQfyZTTLUd4t8yBT57g"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/b_tranting/"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</li>
					{/* footer */}
				</ul>
      </div>
      </div>
    </div>
  )
}

export default Footer