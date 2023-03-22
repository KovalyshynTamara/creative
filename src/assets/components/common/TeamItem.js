import TeamSocials from './TeamSocials'
// import socials from './../../../data/socials.json'

function TeamItem(props) {
    const {position, name, text, avatar} = props
    return (
        <div className="col-sm-6 col-md-4">
            <div className="card text-center mb-4">
                <img className="card-img-top inset" src={avatar} alt="" />
                <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">{position}</h6>
                    <h5 className="card-title">{name}</h5>
                    <p>{text}</p>
                    <div className="socials">
                    <TeamSocials/>
                        {/* {socials.map((item, index) => {
                            return (<TeamSocials icon={item.icon} key={index} />)
                        })} */}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeamItem