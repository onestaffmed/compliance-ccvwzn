import "./ExploreContainer.css";
import documentImage from '../images/document_image.jpg';

import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/react";

const Landing = () => {



    return (
        <>
            <div className="headerImage" >Testing</div>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonCard className="cardOne">
                            <IonCardHeader>
                                <IonCardTitle className="landingText" color="primary">This is some random text</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere optio molestiae expedita accusamus quidem eius, omnis laboriosam totam error debitis doloremque nobis sequi labore maxime dolorem quod minus illum consequatur?</IonCardContent>


                        </IonCard>
                    </IonCol>
                    <IonCol>
                        <IonImg className="heroMain" alt="documents" src={documentImage} />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonImg className="heroMain" alt="documents" src={documentImage} />
                    </IonCol>
                    <IonCol>
                        <IonCard className="cardTwo">
                            <IonCardHeader>
                                <IonCardTitle className="landingText">This is some random text</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere optio molestiae expedita accusamus quidem eius, omnis laboriosam totam error debitis doloremque nobis sequi labore maxime dolorem quod minus illum consequatur?</IonCardContent>

                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
};

export default Landing;