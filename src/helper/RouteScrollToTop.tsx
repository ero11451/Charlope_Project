"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const HeaderTwo: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const mobileMenuListRef = useRef<HTMLDivElement | null>(null);

  const handleMobileMenu = () => setMobileMenu(!mobileMenu);

  // Scroll state
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.pageYOffset > 150);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Copy desktop menu into mobile menu and setup dropdown toggles
  useEffect(() => {
    const desktopMenu = document.querySelector<HTMLUListElement>(".navbar__menu ul");

    if (desktopMenu && mobileMenuListRef.current) {
      mobileMenuListRef.current.innerHTML = desktopMenu.innerHTML;

      const setupDropdownToggles = (container: HTMLDivElement) => {
        const dropdownLabels = container.querySelectorAll<HTMLAnchorElement>(
          ".navbar__dropdown-label"
        );

        dropdownLabels.forEach((label) => {
          label.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const subMenu = this.nextElementSibling as HTMLElement | null;
            if (!subMenu) return;

            // Close sibling submenus
            const siblingLabels = Array.from(
              this.closest("ul")?.querySelectorAll(":scope > li > .navbar__dropdown-label") || []
            ) as HTMLElement[];

            siblingLabels.forEach((sibling) => {
              const siblingSubMenu = sibling.nextElementSibling as HTMLElement | null;
              if (sibling !== this && siblingSubMenu?.classList.contains("navbar__sub-menu")) {
                siblingSubMenu.style.maxHeight = "0px";
                siblingSubMenu.classList.remove("show");
                sibling.classList.remove("navbar__item-active");
              }
            });

            // Toggle current submenu
            if (subMenu.classList.contains("show")) {
              subMenu.style.maxHeight = "0px";
              subMenu.classList.remove("show");
              this.classList.remove("navbar__item-active");
            } else {
              subMenu.classList.add("show");
              subMenu.style.maxHeight = subMenu.scrollHeight + "px";
              this.classList.add("navbar__item-active");
            }
          });
        });
      };

      setupDropdownToggles(mobileMenuListRef.current);
    }
  }, []);

  return (
    <>
      <header className={`header header-primary ${scroll ? "sticky-header" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-header__menu-box">
                <nav className="navbar p-0">
                  <div className="navbar-logo">
                    <Link href="/">
                      <Image src="/assets/images/logo.png" width={150} height={50} alt="Logo" />
                    </Link>
                  </div>

                  {/* Desktop Menu */}
                  <div className="navbar__menu d-none d-xl-block">
                    <ul className="navbar__list">
                      <li className={`navbar__item nav-fade ${pathname === "/" ? "active" : ""}`}>
                        <Link href="/">Home</Link>
                      </li>
                      <li
                        className={`navbar__item nav-fade ${
                          ["/about-us"].includes(pathname) ? "active" : ""
                        }`}
                      >
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li
                        className={`navbar__item nav-fade ${
                          ["/our-causes", "/cause-details"].includes(pathname) ? "active" : ""
                        }`}
                      >
                        <Link href="/our-causes">Causes</Link>
                      </li>
                      <li
                        className={`navbar__item nav-fade ${
                          ["/contact-us"].includes(pathname) ? "active" : ""
                        }`}
                      >
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Mobile Menu Toggle & Options */}
                  <div className="navbar__options">
                    <div className="navbar__mobile-options ">
                      <div className="contact-btn d-none d-xxl-flex">
                        <div className="contact-icon">
                          <i className="fa-solid fa-phone-volume" />
                        </div>
                        <div className="contact-content">
                          <p>Call Us Now</p>
                          <a href="tel:01-793-7938">(+01)-793-7938</a>
                        </div>
                      </div>
                      <Link href="/donate-us" className="btn--primary d-none d-md-flex">
                        Donate Now <i className="icon-circle-arrow" />
                      </Link>
                    </div>
                    <button
                      onClick={handleMobileMenu}
                      className="open-offcanvas-nav d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                    >
                      <span className="icon-bar top-bar" />
                      <span className="icon-bar middle-bar" />
                      <span className="icon-bar bottom-bar" />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu mobile-menu--primary d-block d-xxl-none ${
          mobileMenu ? "show-menu" : ""
        }`}
      >
        <nav className="mobile-menu__wrapper">
          <div className="mobile-menu__header nav-fade">
            <div className="logo">
              <Link href="/" aria-label="home page" title="logo">
                <Image
                  src="https://nextjs.charifund.wowtheme7.com/assets/images/logo.png"
                  width={150}
                  height={50}
                  alt="Logo"
                />
              </Link>
            </div>
            <button
              onClick={handleMobileMenu}
              aria-label="close mobile menu"
              className="close-mobile-menu"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          <div className="mobile-menu__list" ref={mobileMenuListRef}></div>

          <div className="mobile-menu__cta nav-fade d-block d-md-none">
            <Link href="/donate-us" className="btn--primary">
              Donate Now <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>

          <div className="mobile-menu__social social nav-fade">
            {[
              { href: "https://www.facebook.com/", icon: "fa-facebook-f" },
              { href: "https://vimeo.com/", icon: "fa-vimeo-v" },
              { href: "https://x.com/", icon: "fa-twitter" },
              { href: "https://www.linkedin.com/", icon: "fa-linkedin-in" },
            ].map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                aria-label={`share us on ${social.icon.split("-")[1]}`}
                title={social.icon.split("-")[1]}
              >
                <i className={`fa-brands ${social.icon}`} />
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-menu__backdrop ${
          mobileMenu ? "mobile-menu__backdrop-active" : ""
        }`}
      ></div>
    </>
  );
};

export default HeaderTwo;
