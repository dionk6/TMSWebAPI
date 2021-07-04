import './Contacts.css';
import { useEffect, useState } from "react";
import { GetContactHttpRequest } from '../../../httpNode/http-requests';

const Contacts = () => {
    const [contacts, setContactsData] = useState([]);

    const tableDataHeandler = async () => {
        const allContacts = await GetContactHttpRequest();
        setContactsData(allContacts.data);
    }

    useEffect(() => {
        tableDataHeandler();
    }, []);

    return (
        <div className="ContactPage">
            <h1>Contacts</h1>
            <div className="tableWrapper">
                <div className="tableWrapper table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Message</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element.firstName}</td>
                                        <td>{element.lastName}</td>
                                        <td>{element.email}</td>
                                        <td>{element.subject}</td>
                                        <td>{element.message}</td>
                                        <td>{element.updatedDate.substring(0,10)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Contacts;