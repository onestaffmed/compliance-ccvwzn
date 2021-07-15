import { useEffect, useState } from 'react';
import {
    IonButton,
    IonItem,
    IonLabel,
    IonCard,
    IonCardTitle,
    IonCardContent,

} from "@ionic/react";

import MyAccordion from "../../../components/accordian";
import { getAllCerts } from '../../../utils/api';

const ActiveCerts = () => {

    const [certification, setCertification] = useState([]);

    useEffect(() => {
        getAllCerts()
            .then(({ data: activeCertification }) => setCertification(activeCertification))
            .catch((err) => console.log(err));
    }, []);
    console.log(certification);

    return (
        <>

            <IonCard className="cardPrimary" ><IonCardTitle className="ion-padding" color="success">Active</IonCardTitle>
                <IonCardContent>
                    <MyAccordion
                        list={certification}
                        renderHeader={(item) => {
                            return (
                                <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                                    Certification: {item.certification}
                                </span>
                            );
                        }}
                        renderPanel={(item) => {
                            const dateFix = item.expiration.split('T')[0].split('-').reverse().join('/');
                            return (
                                <div>
                                    <IonItem style={{ "--padding-start": 0 }}>

                                        <IonLabel>
                                            <div>
                                                {" "}
                                                Expiration: {dateFix}
                                            </div>
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
                </IonCardContent>
            </IonCard>
        </>



    );
};

export default ActiveCerts;