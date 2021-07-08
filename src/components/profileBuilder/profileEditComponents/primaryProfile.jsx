import Axios from "axios";
import React, { useEffect, useState } from "react";



const PrimaryProfileEdit = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDOB] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const profileUser = `http://localhost:3000/profile`;
    const [isSent, setIsSent] = useState(false)



    const submit = (e) => {
        e.preventDefault()
        Axios.post((profileUser), { firstName, lastName, email, phoneNumber, dob })
            .then(res => {
                console.log(res);
                console.log(res.data);
            }); e.target.reset();
        // .then(() => setIsSent(true))
        // .catch(() => alert("Unable to add book, please try again"))

    };
    const reset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setDOB('');
        setPhoneNumber('');
    };


    return (
        <main>


            <section className="profileEdit">
                <form onSubmit={submit}>
                    <fieldset>
                        <label htmlFor="title"> First Name </label> <span><input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)} /></span> <br />
                        <label htmlFor="author">Last Name</label><span> <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)} /></span><br />
                        <label htmlFor="synopsis">Email Address</label><span> <textarea
                            type="comment"
                            id="emailAddress"
                            name="emailAddress"
                            value={email}
                            onChange={e => setEmail(e.target.value)}></textarea></span>
                        <div className="book-drop__pages">
                            <label htmlFor="pages">Phone Number</label><span>
                                <input name="pages"
                                    type="number"
                                    value={phoneNumber}
                                    onChange={e => setPhoneNumber(e.target.value)}>
                                </input></span>
                        </div>
                        <div className="book-drop">
                            <div className="book-drop__pubdate">
                                <label htmlFor="published">Date of Birth</label> <span><input
                                    type="date"
                                    id="DOB"
                                    name="dob"
                                    value={dob}
                                    onChange={e => setDOB(e.target.value)} /></span>
                            </div>



                        </div><br />
                        <br />
                        <br />
                        <br />

                        <div className="formbuttons"><button type="submit">Submit</button>
                            <button type="reset"
                                onClick={() => reset()}
                                value="Cancel">Cancel</button></div>
                    </fieldset>
                </form>

            </section>
        </main>

    );

};

export default PrimaryProfileEdit;
