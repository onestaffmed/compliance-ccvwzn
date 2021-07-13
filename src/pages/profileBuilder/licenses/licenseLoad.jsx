import Axios from "axios";
import React, { useState } from "react";

// import { getAllLicenses } from '../../../utils/api';



const LicenseLoad = () => {
    const [licenseData, setLicenseData] = useState({
        "type": '',
        'state': '',
        'expiration': '',
        'compact': '',
    })

    // const [stateErr, setStateErr] = useState({});
    // const [authorErr, setAuthorErr] = useState({});
    const loadLicense = `http://345vy.mocklab.io/licenses`;



    const submit = (e) => {
        e.preventDefault()

        Axios.post((loadLicense), { ...licenseData });
        setLicenseData('');
        console.log(licenseData)


        e.target.reset();
        alert("License successfully added!")




    };
    // const formValidation = () => {
    //     const stateErr = {};
    //     const authorErr = {};
    //     let isValid = true;

    //     if (licenseData.state.trim().length < 2) {
    //         stateErr.titleShort = "This state is too short";
    //         isValid = false;
    //     }

    //     setStateErr(authorErr);
    //     return isValid;
    // };

    const reset = () => {
        setLicenseData('');

    };



    return (
        <>


            <section >
                <form onSubmit={submit}>
                    <fieldset>
                        <label htmlFor="state"> State  </label> <span><input
                            type="text"
                            id="state"
                            name="state"
                            value={licenseData.state}
                            onChange={e => setLicenseData({ ...licenseData, state: e.target.value })} /></span> <br />

                        <label htmlFor="type">Type </label><span> <input
                            type="text"
                            id="type"
                            name="type"
                            value={licenseData.type}
                            onChange={e => setLicenseData({ ...licenseData, type: e.target.value })} /></span><br />

                        <label htmlFor="compact">Is Compact</label><span> <input
                            id="compact"
                            name="compact"
                            value={licenseData.compact}
                            onChange={e => setLicenseData({ ...licenseData, compact: e.target.value })}></input></span>
                        <div >
                            <div >
                                <label htmlFor="expiration">Expiration Date</label> <span><input
                                    type="date"
                                    id="expiration"
                                    name="expiration"
                                    value={licenseData.pubdate}
                                    onChange={e => setLicenseData({ ...licenseData, expiration: e.target.value })} /></span>
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
        </>

    );

};

export default LicenseLoad;