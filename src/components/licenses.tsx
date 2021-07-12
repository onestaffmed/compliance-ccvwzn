import {
    IonButton,
    IonContent,
    IonHeader,
    IonImg,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import MyAccordion from "../components/accordian";
import Header from '../layout/Header';


const LicenseTest: React.FC = () => {
    const [data, setData] = useState<Array<any>>([]);
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
            .then((r) => r.json())
            .then((d) => setData(d.results));
    }, []);

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className="ion-padding">
                <MyAccordion
                    list={data}
                    renderHeader={(item: any) => {
                        return (
                            <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                                {item.name.first} {item.name.last}
                            </span>
                        );
                    }}
                    renderPanel={(item: any) => {
                        return (
                            <div>
                                <IonItem style={{ "--padding-start": 0 }}>
                                    <IonImg src={item.picture.thumbnail} slot="start" />
                                    <IonLabel>
                                        <div>
                                            {" "}
                                            {item.location.city} {item.location.state}
                                        </div>
                                        <div> {item.location.country}</div>
                                        {/* <div className="ion-text-wrap">{item.body}</div> */}
                                    </IonLabel>
                                </IonItem>
                                <div style={{ padding: 6 }}>
                                    <IonButton
                                        className="ion-float-right"
                                        style={{ zoom: 0.9 }}
                                        onClick={() => alert("Item Clicked " + item.email)}
                                    >
                                        DETAILS
                                    </IonButton>
                                </div>
                            </div>
                        );
                    }}
                />
            </IonContent>
        </IonPage>
    );
};

export default LicenseTest;