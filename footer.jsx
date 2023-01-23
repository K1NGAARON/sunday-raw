import react from "react";
import Link from'next/Link';

const Footer = () => {
  return (
    <div className="section footer">
        <div className="row menu">
            <div className="col">
                <a href="/">
                    <img className='logo' src='/sunday-logo-white.svg' alt="Sunday Logo" />
                </a>
                <p className="company-info">
                    Sunday Group BV
                    <br />
                    Hof Ter Weze 5
                    <br />
                    8800 Roeselare
                    <br />
                    BTW BE0539 854 587
                    <br /><br />

                    <div className="contact-section">
                        <div className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                            <a href="tel:+32 51 20 98" className="contact phone">
                                +32 51 20 98
                            </a>
                        </div>
                        <div className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            <a href="mailto:info@teamsunday.com" className="contact mail">
                                info@teamsunday.com
                            </a>
                        </div>
                    </div>
                </p>
            </div>
            <div className="col">
                <h5>
                    Product
                </h5>
                <ul>
                    <li><Link href="/pages/catalog/hoodies">Branded hoodies</Link></li>
                    <li><Link href="/pages/catalog/onboarding-boxes">Onboarding boxes</Link></li>
                    <li><Link href="/pages/catalog/tshirts">Custom t-shirts</Link></li>
                    <li><Link href="/pages/catalog/socks">Personalized socks</Link></li>
                    <li><Link href="/pages/design">Custom design</Link></li>
                    <li><Link href="/pages/catalog">Full catalog</Link></li>
                </ul>
            </div>
            <div className="col">
                <h5>
                    Solutions
                </h5>
                <ul>
                    <li><Link href="/pages/solutions/onboarding">Employee onboarding</Link></li>
                    <li><Link href="/pages/solutions/talent-retention">Talent retention</Link></li>
                    <li><Link href="/pages/solutions/brand-extensions">Brand extensions</Link></li>
                    <li><Link href="/pages/solutions/ambassador-marketing">Ambassador marketing</Link></li>
                    <li><Link href="/pages/fulfillment">Fulfillment</Link></li>
                    <li><Link href="/pages/solutions/">All solutions</Link></li>
                </ul>
            </div>
            <div className="col">
                <h5>
                    Company
                </h5>
                <ul>
                    <li><Link href="/pages/about/">About Sunday</Link></li>
                    <li><Link href="/pages/sustainability/">Sustainability</Link></li>
                    <li><Link href="/pages/careers/">Careers</Link></li>
                    <li><Link href="/pages/press/">Press</Link></li>
                    <li><Link href="/pages/content-hub/">Content hub</Link></li>
                    <li><Link href="/pages/partner/">Become a partner</Link></li>
                </ul>
            </div>
            <div className="col align-end">
                <a className="btn ghost-btn white-btn" href="/pages/contact">Contact us</a>
                <div className="socials">
                    <a href="">
                        {/* <img src="/facebook.svg" alt="" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                    </a>
                    <a href="">
                        {/* <img src="/instagram.svg" alt="" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a href="">
                        {/* <img src="/linkedin.svg" alt="" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </a>
                    <a href="">
                        {/* <img src="/tiktok.svg" alt="" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                    </a>
                    <a href="">
                        {/* <img src="/vimeo.svg" alt="" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z"/></svg>
                    </a>
                </div>
            </div>
        </div>
        <div className="row menu legal">
            <div className="wrapper">
                <div className="item">
                    <a href="/pages/legal/terms/">Terms and conditions</a>
                </div>
                <div className="item">
                    <a href="/pages/legal/privacy/">Privacy Policy</a>
                </div>
                <div className="item">
                    <a href="/pages/legal/cookies/">Cookie policy</a>
                </div>
                <div className="item">
                    <a href="/pages/legal/sitemap/">Sitemap</a>
                </div>
                <br />
                <div className="item full-width">
                    <p>© 2023 Sunday Group BV</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer