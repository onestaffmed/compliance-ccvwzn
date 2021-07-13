
import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonItem,
    IonLabel,
    IonCard,
    IonCardTitle,
    IonCardContent,

} from "@ionic/react";

import MyAccordion from "../../../../components/accordian";
import { getAllEdu } from '../../../../utils/api';

const ExpiringImm = () => {

    const [education, setEducation] = useState([]);

    useEffect(() => {
        getAllEdu()
            .then(({ data: education }) => setEducation(education))
            .catch((err) => console.log(err));
    }, []);

    return (
        <IonCard className="cardPrimary" ><IonCardTitle className="ion-padding" color="danger">Expiring</IonCardTitle>
            <IonCardContent>

                <MyAccordion
                    list={education}
                    renderHeader={(item) => {
                        return (
                            <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                                Degree: {item.degree} <br /> Area of Study: {item.study}
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


            </IonCardContent>
        </IonCard>

    );
};

export default ExpiringImm;