function CircleItem(props) {
    const { icon, text } = props
    return (
        <div className="widget-item">
            <i className={`ti-${icon}`}></i>
            <h4>{text}</h4>
        </div>
    )
}

export default CircleItem