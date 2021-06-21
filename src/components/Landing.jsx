import "./ExploreContainer.css";

import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from "@ionic/react";

const Landing = () => {



    return (

        <IonCard>
            <IonCardHeader>
                <IonCardTitle className="landingText">This is some random text</IonCardTitle>
                <IonCardContent >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere optio molestiae expedita accusamus quidem eius, omnis laboriosam totam error debitis doloremque nobis sequi labore maxime dolorem quod minus illum consequatur?</IonCardContent>
            </IonCardHeader>
        </IonCard>

    );
};

export default Landing;