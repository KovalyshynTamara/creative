import about from './../data/About.json'
import aboutImg from './../assets/imgs/about.jpg'
import BlockTitle from './../assets/components/common/BlockTitle'
import blockTitle from './../data/blockTitle.json'


function About() {
    return (
        <div className="about-page">

             <section id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 col-lg-4">
                        <img src={aboutImg} alt="" className="w-100 img-thumbnail mb-3"/>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <BlockTitle subtitle={blockTitle.about.subtitle} title={blockTitle.about.title}  />
                        <p>{about.p1}</p>
                        <p>{about.p2}</p>
                        <p>{about.p2}</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
        
    )
        

}

export default About