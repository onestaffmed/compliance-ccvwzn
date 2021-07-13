import { IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonAvatar, IonGrid, IonRow, IonCol, IonItemDivider, IonHeader, IonToolbar, IonLabel, IonItem, IonImg, IonButton } from "@ionic/react";
import { useEffect, useState } from 'react';
import MyAccordion from "../../../components/accordian";



const UserReferences = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=3")
            .then((r) => r.json())
            .then((d) => setData(d.results));
    }, []);

    return (



        <>
            <MyAccordion
                list={data}
                renderHeader={(item) => {
                    return (
                        <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                            {item.name.first} {item.name.last}
                        </span>
                    );
                }}
                renderPanel={(item) => {
                    return (
                        <div>
                            <IonItem style={{ "--padding-start": 0 }}>

                                <IonLabel>
                                    <div>
                                        <p>
                                            {" "}
                                            {item.location.street.number} {item.location.street.name}<br />
                                            {item.location.city}, {item.location.state} {item.location.postcode}<br />
                                        </p>
                                        <p>
                                            <strong>Email:</strong> {item.email} <br />
                                            <strong>Phone:</strong> {item.phone}<br />
                                            <strong>Mobile:</strong> {item.cell}
                                        </p>
                                    </div>
                                    {/* <div className="ion-text-wrap">{item.body}</div> */}
                                </IonLabel>
                            </IonItem>
                            <div style={{ padding: 6 }}>

                            </div>
                        </div>
                    );
                }}
            />
            {/* <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div> */}
        </>
    );
};

export default UserReferences;