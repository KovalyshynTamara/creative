import BlockTitle from "./common/BlockTitle"
import blockTitle from './../../data/blockTitle.json'
import TeamItem from "./common/TeamItem"
import teamItem from './../../data/teamItem.json'


function Team() {
    return (
    <section id="team">
            <div className="container">
            <BlockTitle subtitle={blockTitle.team.subtitle} title={blockTitle.team.title} />
            <div className="row">
                {teamItem.map((item, index) => {
                    return (<TeamItem position={item.position} name={item.name} avatar={item.avatar} text={item.text} photo={item.photo} key={index} />)
                })}
                                       
            </div>
        </div>
    </section>
    )
}

export default Team