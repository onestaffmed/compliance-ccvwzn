import {
    IonContent,
    IonPage,

} from "@ionic/react";
import React from "react";
import Header from '../../../layout/Header';
import EditLicenseForm from "./editLicense";



const LicenseEditor = () => {

    return (
        <IonPage>
            <Header />

            <IonContent fullscreen className="ion-padding">
                <div className="profileContainer">
                    <EditLicenseForm />

                </div>
            </IonContent>
        </IonPage>
    );
};

export default LicenseEditor;