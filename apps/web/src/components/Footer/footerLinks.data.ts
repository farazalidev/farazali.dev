import { type IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface FooterData {
    label: string;
    location: string;
    Icon: IconType;
}

export const footerData: FooterData[] = [
    { label: 'LinkedIn', Icon: FaLinkedin, location: 'https://linkedin.com/in/farazalide' },
    { label: 'GitHub', Icon: FaGithub, location: 'https://github.com/farazlidev' },
];
