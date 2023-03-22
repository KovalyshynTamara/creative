import BoxItem from "./common/BoxItem"
// import BoxItem2 from "./common/BoxItem2"
import boxItems from './../../data/boxItems.json'



function Box() {

    return (
        <div className="box text-center">

            {boxItems.map((item, index) => {
                return (<BoxItem
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                    key={index} />)
            })}
        </div>
    )
}

export default Box