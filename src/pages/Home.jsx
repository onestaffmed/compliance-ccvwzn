import { IonContent, IonPage } from "@ionic/react";
import Landing from "../components/Landing";

import Header from "../layout/Header";


const Home = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <Landing />
            </IonContent>

        </IonPage>
    );
};

export default Home;