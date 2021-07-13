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

import { getAllEdu } from '../../../utils/api';
import ActiveImm from './immunizations/activeImm';
import ExpiringImm from './immunizations/expiringImm';
import MissingImm from './immunizations/missingImm';

const Immunizations = () => {



    return (
        <>
            <IonTitle color="secondary">Immunizations</IonTitle>
            <IonCardContent></IonCardContent>
            <IonGrid>

                <IonRow>
                    <IonCol>
                        <ExpiringImm />
                    </IonCol>
                    <IonCol>
                        <MissingImm />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <ActiveImm />
                </IonRow>

            </IonGrid>
        </>
    );
};

export default Immunizations;