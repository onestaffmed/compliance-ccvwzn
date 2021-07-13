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
    IonToolbar,
} from "@ionic/react";

const Landing = () => {



    return (
        <div className="backgroundImage">


            <br />

            <IonCard className="headerCard" >

                <IonCardHeader>
                    <IonCardTitle className="headerCard__title">the last app you'll need...</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta, quibusdam quam illum molestiae eius asperiores ratione aliquam vel! Aliquam corporis accusamus, quis impedit tenetur quas consequuntur non mollitia illo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas quam eligendi atque asperiores incidunt similique corrupti necessitatibus omnis, eum dolor laboriosam tempore nesciunt officiis quasi, quo sed unde pariatur.</p>
                </IonCardContent></IonCard>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle className="landingText" color="primary">everything in one place...</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent ><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere optio molestiae expedita accusamus quidem eius, omnis laboriosam totam error debitis doloremque nobis sequi labore maxime dolorem quod minus illum consequatur?</p>
                            </IonCardContent>


                        </IonCard>
                    </IonCol>
                    <IonCol>
                        <IonImg className="heroMain" alt="documents" src={documentImage} />
                    </IonCol>
                </IonRow>
                <IonRow>

                    <IonCol>
                        <IonCard className="cardTwo">
                            <IonCardHeader>
                                <IonImg className="heroMain" alt="documents" src={documentImage} />
                                <br />
                                <IonCardTitle className="landingText">notification of upcoming expiration</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent >

                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere optio molestiae expedita accusamus quidem eius, omnis laboriosam totam error debitis doloremque nobis sequi labore maxime dolorem quod minus illum consequatur?</p>
                            </IonCardContent>

                        </IonCard>
                    </IonCol>
                </IonRow>

                <IonRow >

                    <IonCol align-self-end>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle className="landingText">get on the road faster</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent >
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere optio molestiae expedita accusamus quidem eius, omnis laboriosam totam error debitis doloremque nobis sequi labore maxime dolorem quod minus illum consequatur?</p>
                                <br />
                                <IonButton className="heroButton" color="tertiary" >Sign Up Now</IonButton>
                            </IonCardContent>

                        </IonCard>
                    </IonCol>
                    {/* <IonCol>
                        <IonButton className="heroButton" color="tertiary">Sign Up Now</IonButton>
                        <IonImg className="heroMain" alt="documents" src={documentImage} /> 
                    </IonCol> */}
                </IonRow>
            </IonGrid>

        </div>



    );
};

export default Landing;