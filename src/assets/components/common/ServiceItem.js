function ServiceItem(props) {
    const {icon, title, text} = props
    return (
        <div className="col-sm-4 col-md-3">
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="mb-4"><i className={`ti-${icon} text-primary`}></i></h2>
                    <h6 className="card-title">{title}</h6>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem