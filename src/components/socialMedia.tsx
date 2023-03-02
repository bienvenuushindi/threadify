import {accounts} from '../data';
import {FaGithub, FaLinkedin, FaMedium, FaTwitter} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import {ReactNode} from 'react';


type Props = {
  customClasses: string,
  showIconText: boolean
}

type SocialIcons = {
  [key: string]: ReactNode
}

function SocialMedia({customClasses = '', showIconText = false}: Props) {
  const icons: SocialIcons = {
    twitter: <FaTwitter/>,
    linkedin: <FaLinkedin/>,
    medium: <FaMedium/>,
    github: <FaGithub/>,
    gmail: <GrMail/>,
  };
  return (
    <ul className={`${customClasses}`}>
      {accounts.map(item => {
        const key: string = `${item.key}`;
        return <li key={item.name} className="flex items-center font-bold"><a href={item.link}
                                                                              target="_blank"
                                                                              rel="noreferrer noopener"
                                                                              className="flex items-center"><span
          className="text-gray-800 text-2xl">{icons[key]}</span> {showIconText && item.name}
        </a></li>;
      })
      }
    </ul>
  );
}

export default SocialMedia;