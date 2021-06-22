import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonImg } from '@ionic/react';
import logoHere from '../images/logohere.png';

// import { useParams } from 'react-router';

const Header = () => {

    return (

        <IonHeader>
            <IonToolbar className="mainToolbar">
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonImg className="logoHere" alt="documents" src={logoHere} />
            </IonToolbar>
        </IonHeader>
    );

};

export default Header;

