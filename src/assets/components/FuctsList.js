
import FuctItem from "./FuctItem"
import fuctList from './../../data/fuctLict.json'
import BlockTitle from "./common/BlockTitle"
import blockTitle from './../../data/blockTitle.json'


function FuctsList() {
    return (
        <section className="has-bg-img bg-img-2">
            <div className="container text-center">
            <BlockTitle subtitle={blockTitle.fucts.subtitle} title={blockTitle.fucts.title} />

                <div className="widget-2">
                    {fuctList.map((item, index) => {
                        return<FuctItem icon={item.icon} title={item.title} value={item.value} key={index} />
                    })}

                </div>
            </div>
        </section>
        

    )
}

export default FuctsList