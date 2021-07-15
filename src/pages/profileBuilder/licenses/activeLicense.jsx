import { useEffect, useState } from 'react';
import {
    IonButton,
    IonItem,
    IonLabel,
    IonCard,
    IonCardTitle,
    IonCardContent,

} from "@ionic/react";
import { Link } from 'react-router-dom';
import MyAccordion from "../../../components/accordian";
import { getAllLicenses } from '../../../utils/api';
// import LicenseLoad from './licenseLoad';

const ActiveLicense = () => {
    const [licenses, setLicense] = useState([]);

    useEffect(() => {
        getAllLicenses()
            .then(({ data: licenses }) => setLicense(licenses))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <IonCard className="cardPrimary" ><IonCardTitle className="ion-padding" color="success">Active</IonCardTitle>
                <IonCardContent>
                    <MyAccordion

                        list={licenses}
                        renderHeader={(item) => {
                            return (
                                <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                                    {item.state} <br /> {item.type}
                                </span>
                            );
                        }}
                        renderPanel={(item) => {
                            return (
                                <div>
                                    <IonItem style={{ "--padding-start": 0 }}>

                                        <IonLabel>
                                            <div>
                                                {" "}
                                                Expiration: {item.expiration}
                                            </div>
                                            <div> Is Compact? {item.compact}</div>
                                            {/* <div className="ion-text-wrap">{item.body}</div> */}
                                        </IonLabel>
                                    </IonItem>
                                    <div style={{ padding: 6 }}>
                                        <Link to={`/editlicense/${item.id}`}>
                                            <IonButton
                                                className="ion-float-right"
                                                style={{ zoom: 0.9 }}

                                            >
                                                EDIT
                                            </IonButton></Link>
                                    </div>
                                </div>
                            );
                        }}
                    />
                </IonCardContent>
            </IonCard>
            {/* <LicenseLoad /> */}
        </>


    );
};



export default ActiveLicense;