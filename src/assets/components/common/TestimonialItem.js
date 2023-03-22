// import avatar5 from './../../imgs/avatar-6.jpg'

function TestimonialItem(props) {
    const { name, text,avatar } = props
    
    return (
        <div className="col-md-6">
            <div className="testimonial-wrapper">
                <div className="img-holder">
                    <img src={avatar} alt=""/>                     
                </div>
                <div className="body">
                    <p className="subtitle">{text}</p>
                    <h6 className="title">{name}</h6>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem