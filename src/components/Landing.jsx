import "./ExploreContainer.css";
import {
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from "@ionic/react";

const Landing = () => {



    return (
        <IonPage>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>This is some random text</IonCardTitle>
                    <IonCardContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere optio molestiae expedita accusamus quidem eius, omnis laboriosam totam error debitis doloremque nobis sequi labore maxime dolorem quod minus illum consequatur?</IonCardContent>
                </IonCardHeader>
            </IonCard>
        </IonPage>
    );
};

export default Landing;