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
    IonButton,
    IonTitle,
} from "@ionic/react";

const Landing = () => {



    return (
        <div className="backgroundImage">
            <div className="container">

                <br />

                <IonCard className="headerCard" >
                    <IonTitle className="headerCard__title">the last app you'll need...</IonTitle>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta, quibusdam quam illum molestiae eius asperiores ratione aliquam vel! Aliquam corporis accusamus, quis impedit tenetur quas consequuntur non mollitia illo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas quam eligendi atque asperiores incidunt similique corrupti necessitatibus omnis, eum dolor laboriosam tempore nesciunt officiis quasi, quo sed unde pariatur.</p></IonCard>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard className="cardOne">
                                <IonCardHeader>
                                    <IonCardTitle className="landingText" color="primary">everything in one place...</IonCardTitle>
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
                                    <IonCardTitle className="landingText">notification of upcoming expiration</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere optio molestiae expedita accusamus quidem eius, omnis laboriosam totam error debitis doloremque nobis sequi labore maxime dolorem quod minus illum consequatur?</IonCardContent>

                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow >

                        <IonCol className="ion-align-self-center">
                            <IonCard className="cardOne">
                                <IonCardHeader>
                                    <IonCardTitle className="landingText">get on the road faster</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere optio molestiae expedita accusamus quidem eius, omnis laboriosam totam error debitis doloremque nobis sequi labore maxime dolorem quod minus illum consequatur?</IonCardContent>

                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonButton className="heroButton" color="tertiary">Sign Up Now</IonButton>
                            {/* <IonImg className="heroMain" alt="documents" src={documentImage} /> */}
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </div>

        </div>

    );
};

export default Landing;