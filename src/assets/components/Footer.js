import footerInfo from './../../data/FooterAbout.json'
import logo from './../../assets/imgs/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    const year = new Date().getFullYear()
    return (
    <section className="has-bg-img py-0">
        <div className="container">
            <div className="footer">
                <div className="footer-lists">
                    <ul className="list">
                        <li className="list-head">
                                <h6 className="font-weight-bold">{footerInfo.about}</h6>
                        </li>
                        <li className="list-body">
                            <Link to={'/'} className="logo">
                                <img src={logo} alt="" />
                                    <h6>{footerInfo.title}</h6>
                            </Link>
                            <p>{footerInfo.text}</p> 
                            <p className="mt-3">
                                Copyright {year} &copy; <a className="d-inline text-primary" href="http://www.devcrud.com">DevCRUD</a>
                            </p>                   
                        </li>
                    </ul>
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">USEFUL LINKS</h6>
                        </li>
                        <li className="list-body">
                            <div className="row">
                                <div className="col">
                                    <Link to={'/about'}>About</Link>
                                    <a href="#service">Service</a>
                                    <a href="#portfolio">Portfolio</a>
                                    <a href="#testmonail">Testimonial</a>
                                </div>
                                <div className="col">
                                    <a href="#team">Team</a>
                                    <a href="#blog">Blog</a>
                                    <a href="faq">Faq</a>
                                    <a href="policy">Privacy Policy</a>                  
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">{footerInfo.contacts}</h6>
                        </li>
                        <li className="list-body">
                                <p>{footerInfo.text1}</p>
                            <p><i className="ti-location-pin"></i> 12345 Fake ST NoWhere AB Country</p>
                                <p><i className="ti-email"></i>{footerInfo.email}</p>
                            <div className="social-links">
                                <a href="https://facebook.com" className="link"><i className="ti-facebook"></i></a>
                                <a href="https://facebook.com" className="link"><i className="ti-twitter-alt"></i></a>
                                <a href="https://facebook.com" className="link"><i className="ti-google"></i></a>
                                <a href="https://facebook.com" className="link"><i className="ti-pinterest-alt"></i></a>
                                <a href="https://facebook.com" className="link"><i className="ti-instagram"></i></a>
                                <a href="https://facebook.com" className="link"><i className="ti-rss"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
    </section>
    )
}

export default Footer