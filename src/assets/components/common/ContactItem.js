

function ContactsItem(props) {
    const {icon, title,subtitle, mb} = props
    return (
        <div className="item">
            <i className={`ti-${icon}`}></i>
            <div className={mb}>
                <h5>{title}</h5>
                <p>{subtitle}</p>
            </div>   
        </div>
    )

}

export default ContactsItem