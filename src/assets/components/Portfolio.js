import './../scss/folio.scss'
import BlockTitle from './common/BlockTitle'
import blockTitle from './../../data/blockTitle.json'

import LightGallery from 'lightgallery/react';


// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'lightgallery/scss/lg-thumbnail.scss';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


function Portfolio() {
    const folio = [
        {
            img: 'folio-1.jpg',
            title: 'Project Title'
        },
        {
            img: 'folio-3.jpg',
            title: 'Project Title'
        },
        {
            img: 'folio-5.jpg',
            title: 'Project Title'
        },
        {
            img: 'folio-2.jpg',
            title: 'Project Title'
        },
        {
            img: 'folio-4.jpg',
            title: 'Project Title'
        },
        {
            img: 'folio-6.jpg',
            title: 'Project Title'
        }
    ]
    return (
        <section id="portfolio">
            <div className="container text-center">

                <BlockTitle subtitle={blockTitle.portfolio.subtitle} title={blockTitle.portfolio.title} />

                <div className="folio-wrap">
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                    {folio.map((item)=>{
                    return (
                        <a href={`assets/imgs/${item.img}`} className="img-wrapper">
                            <img src={`assets/imgs/${item.img}`} alt="" />
                            <div className="overlay">
                                <div className="overlay-infos">
                                    <h5>{item.title}</h5>
                                    <span><i className="ti-zoom-in"></i></span>
                                    <span><i className="ti-link"></i></span>
                                </div>  
                            </div>
                        </a>
                    )
                    })}
                    </LightGallery>
                </div>
            </div>
        </section>
    )
}

export default Portfolio