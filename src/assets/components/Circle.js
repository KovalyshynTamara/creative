import CircleItem from "./common/CircleItem"
import circleItem from "./../../data/circleItem.json"



function Circle() {
    return (
        <div className="widget mb-4">
            {   circleItem.map((item, index) => {
                    return(<CircleItem icon={item.icon} text={item.text} key={index} />)
                })
                
            }
        </div>
    )
}


export default Circle