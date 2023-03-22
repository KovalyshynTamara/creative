

import BlockTitle from "./../assets/components/common/BlockTitle"
import blockTitle from './../data/blockTitle.json'
import ContactsItem from "./../assets/components/common/ContactItem"
import contactsItem from './../data/contactItem.json'
import FeedbackForm from "../assets/components/contacts/FeedbackForm"
import ContactsMap from "../assets/components/contacts/ContactsMap"

function Contact1() {
    return (
        <div className="about-page">

             <section id="contact">
        <div className="container">
            <div className="contact-card">
                <div className="infos">
                <BlockTitle subtitle={blockTitle.contacts.subtitle} title={blockTitle.contacts.title} marginBottom='4' />
                    {contactsItem.map((item, index) => {
                    return (<ContactsItem  icon={item.icon}  title={item.title}  subtitle={item.subtitle}  mb={item.mb}  key={index} />)
                })}
                    
                </div>
                <div className="form">
                <BlockTitle subtitle={blockTitle.touch.subtitle} title={blockTitle.touch.title} marginBottom='4'/>
                <FeedbackForm />
                </div>
            </div>
                </div>
                <section>
                    <div className="container">
                        <div id="map" style={{height:'500px'}}>
                            <ContactsMap/>
                        </div>
                    </div>
                </section>
    </section>
        </div>
    )     
}

export default Contact1