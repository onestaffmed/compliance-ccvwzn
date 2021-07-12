import { useEffect, useState } from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
    IonImg,
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

import License from '../licenses/license';
import { getAllLicenses } from '../../../utils/api';
// import Search from '../components/Search/Search';
import Header from '../../../layout/Header';

const AllLicenses = () => {

    const [licenses, setLicense] = useState([]);

    useEffect(() => {
        getAllLicenses()
            .then(({ data: licenses }) => setLicense(licenses))
            .catch((err) => console.log(err));
    }, []);
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


                                        <IonList><IonItem>
                                            {licenses && licenses.map((license) => (
                                                <License key={license.id} />
                                            ))}
                                        </IonItem>
                                        </IonList>


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