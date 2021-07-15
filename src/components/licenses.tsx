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

        <div className="backgroundColor">
            <IonPage>
                <Header />

                <IonContent fullscreen className="ion-padding">
                    <div className="profileContainer">
                        <IonHeader><IonTitle className="documentHeader">Licenses</IonTitle></IonHeader>

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
        </div>
    );
};

export default LicenseTest;