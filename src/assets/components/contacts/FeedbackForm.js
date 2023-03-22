/* eslint-disable import/no-anonymous-default-export */

import { useState } from "react"
import { isValidEmail, toast } from "../helpers";
import axios from "axios";
import { BOT_TOKEN, CHAT_ID } from "../../../config";
import TextInput from "../form_elements/TextInput";


export default function () {
    const [phone, setPhone] = useState('7890');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    const handlerSubmit = (e) => {
        e.preventDefault()
        const errors = []


        if (name === '') {
            errors.push('Enter your name.')
        }
        if (email === '') {
            errors.push('Enter your email.')
        } else {
            if (!isValidEmail(email))
            errors.push('Enter valid email address. ')              
        }

        if (!errors.length) {


            const text = `
<b>Name: </b> ${name}
<b>Email: </b> ${email}
<b>Message: </b> ${message}
<b>Phone: </b> ${phone}
                `

            axios
                .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                chat_id: CHAT_ID,
                text: text,
                parse_mode: 'HTML'
                })
                .then(resp => {
                    setName('')
                    setEmail('')
                    setMessage('')
                    toast.success('message send successfully')
                })
                .catch(err => {
                    toast.danger('AJAX error. Please try again later')
                })
        } else {
             toast.danger(errors.join(' '))
        }    
    }


    return (
        <form onSubmit={handlerSubmit}>
            <TextInput label="Phone" value={phone} required 
                setInputValue={(val) => {
                    setPhone(val)
                }}
            />
            <TextInput label="Your Name" value={name} required 
                setInputValue={(val) => {
                    setName(val)
                }}
            />
            <TextInput label="Your Email" value={email} required 
                setInputValue={(val) => {
                    setEmail(val)
                }}
            />
            <TextInput label="Message" value={message} textarea
                setInputValue={(val) => {
                    setMessage(val)
                }}
            />
            <button type="submit" className="btn btn-primary btn-block btn-lg mt-3">Send Message</button>
            {/* <div className="form-group">
                <input type="text" value={name} onChange={handlerNameChange} className="form-control form-control-lg" id="fbName" placeholder=" "/>
                <label className="form-label req" htmlFor="fbName">Your Name</label>
            </div>

            <div className="form-group">
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control form-control-lg" id="fbEmail" aria-describedby="emailHelp" placeholder=" "/>
                <label className="form-label req" htmlFor="fbName">Your Email</label>
            </div> */}
         
            {/* <div className="form-group">
                <textarea name="contact-message" id="fbMessage" cols="30" rows="7" className="form-control form-control-lg" placeholder=" " value={message}  onChange={(e)=>{setMessage(e.target.value)}}/>
                <label className="form-label" htmlFor="fbName">Message</label>
            </div> */}
            
        </form>
    )
}