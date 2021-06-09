import { IonContent, IonPage } from "@ionic/react";
import './Page.css';
import Landing from "../components/Landing";
import Footer from "../layout/Footer";

const Home = () => {
    return (
        <IonPage>

            <IonContent>
                <Landing />
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Home;