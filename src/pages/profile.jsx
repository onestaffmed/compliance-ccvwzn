import { IonContent, IonPage } from "@ionic/react";


import Header from '../layout/Header';
import UserProfile from '../components/userProfile';


const Profile = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <UserProfile />
            </IonContent>
        </IonPage>
    );
};

export default Profile;