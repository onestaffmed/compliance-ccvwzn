import Axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
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

// const loadLicense = `http://345vy.mocklab.io/licenses`;
// const loadLicense = ` http://localhost:3000/licenses`;
// const loadLicense = ` http://10.0.0.127:3000/licenses`;
// const loadLicense = `http://10.103.0.98:3000/licenses`;
import { masterLicenses } from '../../../utils/api';



const EditLicenseForm = (props) => {
    const [editLicense, setEditLicense] = useState({
        'id': props.license.id,
        'type': props.license.type,
        'state': props.license.state,
        'expiration': props.license.expiration,
        'compact': props.license.compact,
    })

    const history = useHistory();

    const submit = (e) => {
        history.push(`/licenses`);
        e.preventDefault()
        Axios.put((`${masterLicenses}/${editLicense.id}`), { ...editLicense })
            .then(res => console.log(res.data));
        e.target.reset();



    };



    return (
        <>
            <IonHeader><IonTitle>Edit License</IonTitle></IonHeader>
            <div className="ion-padding licenseForm">
                <IonCard className="ion-padding cardPrimary">

                    <form onSubmit={submit}>
                        <IonLabel htmlFor="type" position="floating"> Type  </IonLabel> <IonInput
                            type="text"
                            id="type"
                            name="type"
                            value={editLicense.type}
                            onIonChange={e => setEditLicense({ ...editLicense, type: e.target.value })} /> <br />
                        <IonItem>
                            <IonLabel htmlFor="state" position="floating"> State  </IonLabel>
                            <IonSelect
                                type="text"
                                id="state"
                                name="state"
                                placeholder="Select State"
                                value={editLicense.state}
                                onIonChange={e => setEditLicense({ ...editLicense, state: e.target.value })}>

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

                        <IonItem lines="none">
                            <IonLabel htmlFor="compact" >Is Compact </IonLabel>
                            <IonRadioGroup
                                id="compact"
                                name="compact"
                                value={editLicense.compact}
                                onIonChange={e => setEditLicense({ ...editLicense, compact: e.target.value })}>
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
                            <IonLabel htmlFor="expiration" position="floating">Expiration Date</IonLabel> <span><IonDatetime displayFormat=" MMM DD YYYY" placeholder="Select Date" value={editLicense.expiration} onIonChange={e => setEditLicense({ ...editLicense, expiration: e.target.value })}
                                id="expiration"
                                name="expiration"
                            // value={licenseData.expiration}
                            // onChange={e => setLicenseData({ ...licenseData, expiration: e.target.value })} 
                            /></span>
                        </IonItem>





                        <div className="formbuttons"><IonButton type="submit">Submit</IonButton>
                            <Link to="/bookshelf"><button type="cancel"
                            >Cancel</button></Link> </div>

                    </form>

                    <div className="book-cover">

                        <IonButton id="delete" onClick={() => props.deleteLicense(props.license.id)}>Delete Book</IonButton>
                    </div>
                </IonCard>
            </div>

        </>
    );

};

export default EditLicenseForm;