import BlockTitle from "./common/BlockTitle"
import blockTitle from './../../data/blockTitle.json'
import testimonials from './../../data/testimonials.json'
import TestimonialItem from "./common/TestimonialItem"


function Testimonials() {
    return (
    <section id="testimonial">
        <div className="container">
             <BlockTitle subtitle={blockTitle.testimonials.subtitle} title={blockTitle.testimonials.title} />
            <div className="row">
                    {testimonials.map((item, index) => {
                        return (<TestimonialItem name={item.name} text={item.text} key={index} avatar={item.avatar} />)
                })}
            
            </div>
        </div>
    </section>
    )
}

export default Testimonials