import React from 'react';
import {

    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,


} from "@ionic/react";

import Education from '../education/education'


import Header from '../../../layout/Header';

const AllEducation: React.FC = () => {



    return (
        <IonPage>
            <Header />

            <IonContent fullscreen className="ion-padding">
                <div className="profileContainer">
                    <IonToolbar><IonHeader><IonTitle color="primary">Education</IonTitle></IonHeader></IonToolbar>
                    <Education />

                </div>
            </IonContent>
        </IonPage>


    );
};


export default AllEducation;