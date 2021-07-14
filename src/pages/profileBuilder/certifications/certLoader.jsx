import Axios from "axios";
import React, { useState } from "react";
import {
    IonItem,
    IonLabel,
    IonInput,
    IonDatetime,
    IonButton,
    IonTitle,
    IonCard
} from "@ionic/react";
// import { getAllLicenses } from '../../../utils/api';
// import { camera, trash, close } from 'ionicons/icons';


const CertLoad = () => {
    const [licenseData, setLicenseData] = useState({
        "certification": '',
        'expiration': '',
    })

    // const [stateErr, setStateErr] = useState({});
    // const [authorErr, setAuthorErr] = useState({});
    // const loadLicense = `http://345vy.mocklab.io/licenses`;
    const loadLicense = ` http://localhost:3000/certifications`;


    const submit = (e) => {
        e.preventDefault()

        Axios.post((loadLicense), { ...licenseData });
        setLicenseData('');
        console.log(licenseData)


        e.target.reset();
        alert("Certification successfully added!")




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

            <div className="ion-padding licenseForm">
                <IonCard className="ion-padding cardPrimary">
                    <IonTitle>Upload Certification</IonTitle>
                    <form onSubmit={submit}>



                        <IonItem>
                            <IonLabel htmlFor="type" position="floating">Certification Type </IonLabel> <IonInput
                                type="text"
                                id="certifciation"
                                name="certification"
                                value={licenseData.certification}
                                onIonChange={e => setLicenseData({ ...licenseData, certification: e.target.value })} />
                        </IonItem>



                        <IonItem lines="none">
                            <IonLabel htmlFor="expiration" position="floating">Expiration Date</IonLabel> <span><IonDatetime displayFormat=" MMM DD YYYY" placeholder="Select Date" value={licenseData.expiration} onIonChange={e => setLicenseData({ ...licenseData, expiration: e.target.value })}
                                id="expiration"
                                name="expiration"
                            // value={licenseData.expiration}
                            // onChange={e => setLicenseData({ ...licenseData, expiration: e.target.value })} 
                            /></span>
                        </IonItem>
                        {/* <IonFab vertical="bottom" horizontal="center" slot="fixed">
                        <IonFabButton onClick={() => takePhoto()}>
                            <IonIcon icon={camera}></IonIcon>
                        </IonFabButton>
                    </IonFab> */}

                        <div className="formbuttons" ><IonButton type="submit">Submit</IonButton>
                            <IonButton type="reset"
                                onClick={() => reset()}
                                value="Cancel">Cancel</IonButton></div>

                    </form>

                </IonCard>
            </div>
        </>

    );

};

export default CertLoad;