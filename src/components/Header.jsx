import React, {useState, useEffect} from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-router-dom"
import { Link as ScrollLink } from 'react-scroll';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        document.querySelector('.DroppedMenu').style.transform = 'translateX(100%)'
        document.querySelector('.DroppedMenu').style.opacity = '0'
        document.querySelector('.Close').style.display = 'none'
        document.querySelector('.Open').style.display = 'unset'
    }

    const openMenu = () => {
        document.querySelector('.DroppedMenu').style.transform = 'translateX(0)'
        document.querySelector('.DroppedMenu').style.opacity = '1'
        document.querySelector('.Open').style.display = 'none'
        document.querySelector('.Close').style.display = 'unset'
    }

    return (
        <header  className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="Container">
                <Link to='/' className="Logo">
                    <h1>Restroom</h1>
                    <h1 className="note">Finder</h1>
                    <a href="tel:0934190061"><p>Liên Hệ: <strong>0934 1900 61</strong></p></a>
                </Link>

                <div className="Menu">
                    <button><Link to='/GoogleMap'><h3>Bắt Đầu Nào</h3></Link></button>
                    <div className="TotalLine">
                        <div className="Line Open" onClick={openMenu}> 
                            <HiMenu/>
                        </div>

                        <div className="Line Close" onClick={closeMenu}> 
                            <IoMdClose/>
                        </div>
                    </div>
                </div>

                <div className="DroppedMenu">
                    <ul>
                        <li><Link to='/GoogleMap'><h3>Tìm Nhà Vệ Sinh</h3></Link></li>
                        <li><Link to='/MoreInfo'><h3>RestroomFinder</h3></Link></li>
                        <li><ScrollLink to="Section_2" smooth={true} duration={200}><h3>Tính Năng</h3></ScrollLink></li>
                        <li><ScrollLink to="Section_3" smooth={true} duration={200}><h3>Mục Tiêu</h3></ScrollLink></li>
                        <li><ScrollLink to="Section_4" smooth={true} duration={200}><h3>Trách Nhiệm</h3></ScrollLink></li>
                        <li><ScrollLink to="Section_6" smooth={true} duration={200}><h3>Lời Chia Sẻ</h3></ScrollLink></li>
                        <li><ScrollLink to="Section_7" smooth={true} duration={200}><h3>Liên Hệ</h3></ScrollLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;