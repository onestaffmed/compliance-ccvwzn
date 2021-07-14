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

} from "@ionic/react";

import MyAccordion from "../../../components/accordian";
import { getAllEdu } from '../../../utils/api';
// import Search from '../components/Search/Search';
import Header from '../../../layout/Header';

const AllCerts: React.FC = () => {

    const [certification, setCertification] = useState<Array<any>>([]);

    useEffect(() => {
        getAllEdu()
            .then(({ data: certification }) => setCertification(certification))
            .catch((err) => console.log(err));
    }, []);

    // useEffect(() => {
    //     fetch("src/licenses.json")
    //         .then((r) => r.json())
    //         .then((d) => setLicense(d.results));
    // }, []);

    console.log(certification);

    return (
        <IonPage>
            <Header />

            <IonContent fullscreen className="ion-padding">
                <div className="profileContainer">
                    <IonToolbar><IonHeader><IonTitle color="primary">Education</IonTitle></IonHeader></IonToolbar>

                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonCard className="cardPrimary" ><IonCardTitle className="ion-padding" color="warning">Expiring</IonCardTitle>
                                    <IonCardContent>

                                        <MyAccordion
                                            list={certification}
                                            renderHeader={(item: any) => {
                                                return (
                                                    <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                                                        Cerification: {item.degree} <br /> Area of Study: {item.study}
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
                                                                    School: {item.school}
                                                                </div>
                                                                <div> Location {item.city}, {item.state}</div>
                                                                {/* <div className="ion-text-wrap">{item.body}</div> */}
                                                            </IonLabel>
                                                        </IonItem>
                                                        <div style={{ padding: 6 }}>
                                                            <IonButton
                                                                className="ion-float-right"
                                                                style={{ zoom: 0.9 }}
                                                                href='/education'
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


export default AllCerts;