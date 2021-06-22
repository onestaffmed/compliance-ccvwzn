import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

// import { useParams } from 'react-router';

const Header = () => {

    return (

        <IonHeader>
            <IonToolbar color="tertiary">
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Name's </IonTitle>
            </IonToolbar>
        </IonHeader>
    );

};

export default Header;

