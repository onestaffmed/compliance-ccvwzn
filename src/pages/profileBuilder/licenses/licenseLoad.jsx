import Axios from "axios";
import React, { useState } from "react";
import {
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonButton,
    IonRadioGroup,
    IonRadio,
    IonHeader,
    IonTitle,
    IonCard

} from "@ionic/react";
// import { getAllLicenses } from '../../../utils/api';
// import { camera, trash, close } from 'ionicons/icons';


const LicenseLoad = () => {
    const [licenseData, setLicenseData] = useState({
        "type": '',
        'state': '',
        'expiration': '',
        'compact': '',
    })

    // const [stateErr, setStateErr] = useState({});
    // const [authorErr, setAuthorErr] = useState({});
    // const loadLicense = `http://345vy.mocklab.io/licenses`;
    const loadLicense = ` http://localhost:3000/licenses`;


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
            <IonHeader><IonTitle>Upload License</IonTitle></IonHeader>
            <div className="ion-padding licenseForm">
                <IonCard className="ion-padding cardPrimary">
                    <form onSubmit={submit}>

                        <IonItem lines="none">
                            <IonLabel htmlFor="state" position="floating"> State  </IonLabel>
                            <IonSelect
                                type="text"
                                id="state"
                                name="state"
                                placeholder="Select State"
                                value={licenseData.state}
                                onIonChange={e => setLicenseData({ ...licenseData, state: e.target.value })}>

                                <IonSelectOption value="Alabama">Alabama</IonSelectOption>
                                <IonSelectOption value="Arizona">Arizona</IonSelectOption>
                                <IonSelectOption value="Arkansas">Arkansas</IonSelectOption>
                                <IonSelectOption value="California">California</IonSelectOption>
                                <IonSelectOption value="Colorado">Colorado</IonSelectOption>
                                <IonSelectOption value="Connecticut">Connecticut</IonSelectOption>
                                <IonSelectOption value="Delaware">Delaware</IonSelectOption>
                                <IonSelectOption value="District Of Columbia">District Of Columbia</IonSelectOption>
                                <IonSelectOption value="Florida">Florida</IonSelectOption>
                                <IonSelectOption value="Georgia">Georgia</IonSelectOption>
                                <IonSelectOption value="Hawaii">Hawaii</IonSelectOption>
                                <IonSelectOption value="Idaho">Idaho</IonSelectOption>
                                <IonSelectOption value="Illinois">Illinois</IonSelectOption>
                                <IonSelectOption value="Indiana">Indiana</IonSelectOption>
                                <IonSelectOption value="Iowa">Iowa</IonSelectOption>
                                <IonSelectOption value="Kansas">Kansas</IonSelectOption>
                                <IonSelectOption value="Kentucky">Kentucky</IonSelectOption>
                                <IonSelectOption value="Louisiana">Louisiana</IonSelectOption>
                                <IonSelectOption value="Maine">Maine</IonSelectOption>
                                <IonSelectOption value="Maryland">Maryland</IonSelectOption>
                                <IonSelectOption value="Massachusetts">Massachusetts</IonSelectOption>
                                <IonSelectOption value="Michigan">Michigan</IonSelectOption>
                                <IonSelectOption value="Minnesota">Minnesota</IonSelectOption>
                                <IonSelectOption value="Mississippi">Mississippi</IonSelectOption>
                                <IonSelectOption value="Missouri">Missouri</IonSelectOption>
                                <IonSelectOption value="Montana">Montana</IonSelectOption>
                                <IonSelectOption value="Nebraska">Nebraska</IonSelectOption>
                                <IonSelectOption value="Nevada">Nevada</IonSelectOption>
                                <IonSelectOption value="New Hampshire">New Hampshire</IonSelectOption>
                                <IonSelectOption value="New Jersey">New Jersey</IonSelectOption>
                                <IonSelectOption value="New Mexico">New Mexico</IonSelectOption>
                                <IonSelectOption value="New York">New York</IonSelectOption>
                                <IonSelectOption value="North Carolina">North Carolina</IonSelectOption>
                                <IonSelectOption value="North Dakota">North Dakota</IonSelectOption>
                                <IonSelectOption value="Ohio">Ohio</IonSelectOption>
                                <IonSelectOption value="Oklahoma">Oklahoma</IonSelectOption>
                                <IonSelectOption value="Oregon">Oregon</IonSelectOption>
                                <IonSelectOption value="Pennsylvania">Pennsylvania</IonSelectOption>
                                <IonSelectOption value="Rhode Island">Rhode Island</IonSelectOption>
                                <IonSelectOption value="South Carolina">South Carolina</IonSelectOption>
                                <IonSelectOption value="South Dakota">South Dakota</IonSelectOption>
                                <IonSelectOption value="Tennessee">Tennessee</IonSelectOption>
                                <IonSelectOption value="Texas">Texas</IonSelectOption>
                                <IonSelectOption value="Utah">Utah</IonSelectOption>
                                <IonSelectOption value="Vermont">Vermont</IonSelectOption>
                                <IonSelectOption value="Virginia">Virginia</IonSelectOption>
                                <IonSelectOption value="Washington">Washington</IonSelectOption>
                                <IonSelectOption value="West Virginia">West Virginia</IonSelectOption>
                                <IonSelectOption value="Wisconsin">Wisconsin</IonSelectOption>
                                <IonSelectOption value="Wyoming">Wyoming</IonSelectOption>
                            </IonSelect>

                        </IonItem>

                        <IonItem>
                            <IonLabel htmlFor="type" position="floating"> Type </IonLabel> <IonInput
                                type="text"
                                id="type"
                                name="type"
                                value={licenseData.type}
                                onIonChange={e => setLicenseData({ ...licenseData, type: e.target.value })} />
                        </IonItem>

                        <IonItem lines="none">
                            <IonLabel htmlFor="compact" >Is Compact </IonLabel>
                            <IonRadioGroup
                                id="compact"
                                name="compact"
                                value={licenseData.compact}
                                onIonChange={e => setLicenseData({ ...licenseData, compact: e.target.value })}>
                                <IonItem lines="none">
                                    <IonLabel>Yes  </IonLabel>
                                    <IonRadio value="yes" />
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel>No  </IonLabel>
                                    <IonRadio value="no" />
                                </IonItem>
                            </IonRadioGroup>
                        </IonItem>

                        <IonItem>
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

export default LicenseLoad;