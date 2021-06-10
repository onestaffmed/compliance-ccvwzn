import { IonContent, IonPage, IonCard } from "@ionic/react";
import './Page.css';
import Footer from "../layout/Footer";
import Header from '../layout/Header';

const Profile = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonCard>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptate dolore at! Aliquid architecto nobis, recusandae minima, aperiam optio et blanditiis repudiandae, deleniti soluta suscipit. Eveniet voluptate perspiciatis voluptates unde.</IonCard>
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Profile;