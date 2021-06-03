import ContactBanner from '../../Components/ContactBanner/ContactBanner'
import ContactContent from '../../Components/ContactContent/ContactContent'
import ContactForm from '../../Components/ContactForm/ContactForm'

const Contact = () =>{

    return (
        <div className="contactPage col-12">
           <ContactBanner />
           <ContactContent />
           <ContactForm />
        </div>
    );
}

export default Contact;