
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,


} from "@ionic/react";

import Header from '../../../layout/Header';
import Immunizations from '../medicalHistory/immunizations';

const AllMedicalHistory = () => {


    return (
        <IonPage>
            <Header />

            <IonContent fullscreen className="ion-padding">
                <div className="profileContainer">
                    <IonToolbar><IonHeader><IonTitle color="primary">Medical History</IonTitle></IonHeader></IonToolbar>
                    <Immunizations />


                </div>
            </IonContent>
        </IonPage>


    );
};


export default AllMedicalHistory;