import React from "react";
import emailjs from "emailjs-com";


const ContactFormComp = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const [ setFirstName] = React.useState(null)
    const  [setLastName] = React.useState(null)
    const [setEmail] = React.useState(null)
    const [setPhoneNumber] = React.useState(null)
    const [setMessage] = React.useState(null)
    
    const form = document.getElementById("conFom");

    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Message Delivered!')
        // const { firstName, lastName, email,phoneNumber } = e.target.elements
        // let conFom = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     Email: email,
        //     phoneNumber: phoneNumber,
        //     message:message,
        // }
        // console.log(conFom)
        emailjs.sendForm('service_phrlp9r', 'template_uritawv', form, 'rc_p1fP-rUROEfUZO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
     return (
        <div className="container mt-5">
            <h2 className="mb-3"> Contact Us</h2>
            <br></br>
            <form id="conFom" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="firstName">
                        First Name
                    </label>
                    <input className="form-control" type="text" id="FirstName" required onChange={(e) => {
                        setFirstName(e.target.value)
                    }} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="LastName">
                        Last Name
                    </label>
                    <input className="form-control" type="text" id="LastName" required onChange={(e) => {
                        setLastName(e.target.value)
                    }
            }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" type="text" id="email" required onChange={(e)=> {
                        setEmail(e.target.value)
                    }
                    } />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input className="form-control" type="number" id="phoneNumber" required onChange={(e) => {
                        setPhoneNumber(e.target.value)
                    }
                    } />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <input className="form-control" type="text" id="message" required onChange={(e) => {
                        setMessage(e.target.value)
                    }

                    } />
                </div>
                <button className="btn btn-danger" >
                    {formStatus}
                </button>

            </form>

        </div>

    )
}






export default ContactFormComp