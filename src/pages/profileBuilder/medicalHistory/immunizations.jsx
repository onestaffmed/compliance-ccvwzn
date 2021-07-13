
import {
    IonTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,


} from "@ionic/react";

import ActiveImm from './immunizations/activeImm';
import ExpiringImm from './immunizations/expiringImm';
import MissingImm from './immunizations/missingImm';

const Immunizations = () => {



    return (
        <>
            <IonTitle color="secondary">Immunizations</IonTitle>
            <IonCardContent>
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
            </IonCardContent>
        </>
    );
};

export default Immunizations;