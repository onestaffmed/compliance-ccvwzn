import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
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
    IonCol,
    IonList

} from "@ionic/react";

import MyAccordion from "../../../components/accordian";
import License from "./license";
import { getAllLicenses } from '../../../utils/api';
// import Search from '../components/Search/Search';
import Header from '../../../layout/Header';

const AllLicenses: React.FC = () => {

    const [licenses, setLicense] = useState<Array<any>>([]);

    useEffect(() => {
        getAllLicenses()
            .then(({ data: licenses }) => setLicense(licenses))
            .catch((err) => console.log(err));
    }, []);

    // useEffect(() => {
    //     fetch("src/licenses.json")
    //         .then((r) => r.json())
    //         .then((d) => setLicense(d.results));
    // }, []);

    console.log(licenses);

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


                                        {/* <IonList>
                                            {licenses.map((license) => (
                                                <IonItem>
                                                    <License key={license.id} licenses={license} />
                                                </IonItem>
                                            ))}

                                        </IonList> */}


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


export default AllLicenses;