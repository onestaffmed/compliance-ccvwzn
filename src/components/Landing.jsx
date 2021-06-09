
import React from "react";
import "./ExploreContainer.css";

import {
    IonButton,
    IonCard,
    IonSpinner,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
} from "@ionic/react";

const Landing = () => {



    return (
        <>
            <img
                className="hero-image"
                alt="gameplayers"
                src="https://storage.googleapis.com/boredgamerz_assets/gameplayers_hero.webp"
            />

            <div className="landing-hero-container">
                <br />
                <IonCard className="landing-hero" color="secondary">
                    <IonCardHeader className="hero-header">
                        <h1>Easy as Find. Host. Play. </h1>
                        <img
                            alt="BoredGamerz Logo"
                            className="hero-logo"
                            width="50%"
                            src="https://storage.googleapis.com/boredgamerz_assets/BoredGamerz_Logo.webp"
                        />
                    </IonCardHeader>

                    <IonCardContent>
                        <IonCardTitle className="hero-header">
                            <strong> Step 1</strong>
                        </IonCardTitle>
                        <p>Find a game by searching in your area</p>
                    </IonCardContent>
                    <IonCardContent>
                        <IonCardTitle className="hero-header">
                            <strong>Step 2</strong>
                        </IonCardTitle>
                        <p>Can't find a game? Host one!</p>
                    </IonCardContent>
                    <IonCardContent>
                        <IonCardTitle className="hero-header">
                            <strong>Step 3</strong>
                        </IonCardTitle>
                        <p>Meet and play the game!</p>
                    </IonCardContent>

                </IonCard>
            </div>
        </>
    );
};

export default Landing;