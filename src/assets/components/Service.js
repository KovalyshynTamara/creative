import BlockTitle from "./common/BlockTitle"
import blockTitle from './../../data/blockTitle.json'
import ServiceItem from "./common/ServiceItem"
import serviceItem from "./../../data/serviceItem.json"



function Service() {
    return (
         <section id="service">
        <div className="container">
            <BlockTitle subtitle={blockTitle.service.subtitle} title={blockTitle.service.title} />
            <div className="row">
                {   serviceItem.map((item, index) => {
                        return(<ServiceItem icon={item.icon} text={item.text} title={item.title} key={index} />)
                    })
                        
                }

            </div>  
        </div>
    </section>
    )
}

export default Service