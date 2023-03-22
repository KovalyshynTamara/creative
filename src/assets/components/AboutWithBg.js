import BlockTitle from "./common/BlockTitle"
import blockTitle from './../../data/blockTitle.json'
import Circle from "./Circle"
function AboutWithBg() {
    return (
        <section className="has-bg-img py-md">
            <div className="container text-center">
                <BlockTitle subtitle={blockTitle.aboutWithBg.subtitle} title={blockTitle.aboutWithBg.title}  />
                <Circle />
            </div>
        </section>
    )
}

export default AboutWithBg