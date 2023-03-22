import BlockTitle from "./common/BlockTitle"
import blockTitle from './../../data/blockTitle.json'
import ContactsItem from "./common/ContactItem"
import contactsItem from './../../data/contactItem.json'

function Contacts() {
    return (
    <section id="contact">
        <div className="container">
            <div className="contact-card">
                <div className="infos">
                <BlockTitle subtitle={blockTitle.contacts.subtitle} title={blockTitle.contacts.title} />
                    {contactsItem.map((item, index) => {
                    return (<ContactsItem  icon={item.icon}  title={item.title}  subtitle={item.subtitle}  mb={item.mb}  key={index} />)
                })}
                    
                </div>
                <div className="form">
                <BlockTitle subtitle={blockTitle.touch.subtitle} title={blockTitle.touch.title} />
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                            <textarea name="contact-message" id="" cols="30" rows="7" className="form-control form-control-lg" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block btn-lg mt-3">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )

    
}

export default Contacts