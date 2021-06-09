import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

import { useParams } from 'react-router';

const Header = () => {

    const { name } = useParams < { name: string, } > ();

    <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>Name's {name}</IonTitle>
        </IonToolbar>
    </IonHeader>

};

export default Header;