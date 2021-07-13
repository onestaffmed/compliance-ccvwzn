import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol
} from "@ionic/react";
import React from "react";
import Header from '../layout/Header';
import ExpiringLicense from "../pages/profileBuilder/licenses/expiringLicenses";
import ActiveLicense from "../pages/profileBuilder/licenses/activeLicense";
import MissingLicense from "../pages/profileBuilder/licenses/missingLicenses";
import LicenseLoad from "../pages/profileBuilder/licenses/licenseLoad";


const LicenseTest: React.FC = () => {

    return (
        <IonPage>
            <Header />

            <IonContent fullscreen className="ion-padding">
                <div className="profileContainer">
                    <IonToolbar><IonHeader><IonTitle color="primary">Licenses</IonTitle></IonHeader></IonToolbar>

                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <ExpiringLicense />
                            </IonCol>
                            <IonCol>
                                <MissingLicense />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <ActiveLicense />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <LicenseLoad />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LicenseTest;