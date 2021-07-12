import {
    IonButton,
    IonContent,
    IonHeader,
    IonImg,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import MyAccordion from "../components/accordian";
import Header from '../layout/Header';
import { getAllLicenses } from '../utils/api';

const LicenseTest: React.FC = () => {
    const [licenses, setLicense] = useState<Array<any>>([]);

    useEffect(() => {
        getAllLicenses()
            .then(({ data: licenses }) => setLicense(licenses))
            .catch((err) => console.log(err));
    }, []);

    return (
        <IonPage>
            <Header />

            <IonContent fullscreen className="ion-padding">
                <div className="profileContainer">
                    <IonToolbar><IonHeader><IonTitle color="primary">Licenses</IonTitle></IonHeader></IonToolbar>

                    <IonGrid>
                        <IonRow>
                            <IonCol>



                                <IonCard className="cardPrimary" ><IonCardTitle className="ion-padding" color="warning">Expiring</IonCardTitle>
                                    <IonCardContent>
                                        <MyAccordion
                                            list={licenses}
                                            renderHeader={(item: any) => {
                                                return (
                                                    <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                                                        {item.state} <br /> {item.type}
                                                    </span>
                                                );
                                            }}
                                            renderPanel={(item: any) => {
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
                                                            <IonButton
                                                                className="ion-float-right"
                                                                style={{ zoom: 0.9 }}
                                                                href='/licensetest'
                                                            >
                                                                EDIT
                                                            </IonButton>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        />
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol>
                                <IonCard className="cardPrimary" ><IonCardTitle className="ion-padding" color="danger">Missing</IonCardTitle>
                                    <IonCardContent>
                                        <MyAccordion
                                            list={licenses}
                                            renderHeader={(item: any) => {
                                                return (
                                                    <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                                                        {item.state} <br /> {item.type}
                                                    </span>
                                                );
                                            }}
                                            renderPanel={(item: any) => {
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
                                                            <IonButton
                                                                className="ion-float-right"
                                                                style={{ zoom: 0.9 }}
                                                                href='/licensetest'
                                                            >
                                                                EDIT
                                                            </IonButton>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        />
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonCard className="cardPrimary" ><IonCardTitle className="ion-padding" color="success">Active</IonCardTitle>
                                    <IonCardContent>
                                        <MyAccordion
                                            list={licenses}
                                            renderHeader={(item: any) => {
                                                return (
                                                    <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                                                        {item.state} <br /> {item.type}
                                                    </span>
                                                );
                                            }}
                                            renderPanel={(item: any) => {
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
                                                            <IonButton
                                                                className="ion-float-right"
                                                                style={{ zoom: 0.9 }}
                                                                href='/licensetest'
                                                            >
                                                                EDIT
                                                            </IonButton>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        />
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LicenseTest;