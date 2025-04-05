import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact">
            <div className="headingcontact">
                <h1>Contact Me</h1>
            </div>
            <div className="headingh3contact">
                <h3>Please fill out the form below to discuss any work opportunities</h3>
            </div>
            <form>
                <input type="text" placeholder="Your name" className="input1" />
                <br></br>
                <input type="email" placeholder="Email" className="input2" />
                <br></br>
                <textarea placeholder="Message" rows={5} cols={30} className="textarea"/>
                <br></br>
                <button type="button" className="submitbtn">Submit</button>
            </form>
        </div>
    )
}