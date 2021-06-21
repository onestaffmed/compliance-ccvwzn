import { IonContent, IonPage } from "@ionic/react";
import Landing from "../components/Landing";
import Footer from "../layout/Footer";
import Header from "../layout/Header";


const Home = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <Landing />
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Home;