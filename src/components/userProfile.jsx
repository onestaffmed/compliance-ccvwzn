import { IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonAvatar, IonGrid, IonRow, IonCol, IonItemDivider, IonToolbar, IonLabel, IonItem, IonButton } from "@ionic/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';

import MyAccordion from "../components/accordian";
import Education from '../pages/profileBuilder/education/education';
import ExpiringLicense from "../pages/profileBuilder/licenses/expiringLicenses";
import ActiveLicense from "../pages/profileBuilder/licenses/activeLicense";
import MissingLicense from "../pages/profileBuilder/licenses/missingLicenses";
import ExpiringImm from "../pages/profileBuilder/medicalHistory/immunizations/expiringImm";
import MissingImm from "../pages/profileBuilder/medicalHistory/immunizations/missingImm";
import ActiveImm from "../pages/profileBuilder/medicalHistory/immunizations/activeImm";
import UserReferences from "../pages/profileBuilder/references/references";


const UserProfile = () => {
    var users = {
        user: [{
            "id": 11,
            "firstName": "Hermy",
            "lastName": "Kleinbaum",
            "email": "hkleinbauma@biglobe.ne.jp",
            "phoneNumber": "634-184-6937",
            "birthdate": "2/17/1992"
        }]
    };
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=3")
            .then((r) => r.json())
            .then((d) => setData(d.results));
    }, []);


    return (
        <div className="profileContainer">

            <IonToolbar>
                Profile Test
            </IonToolbar>


            <IonGrid>
                <IonRow>
                    <IonCol >
                        <IonCard className="cardPrimary" >
                            <IonCardHeader>
                                <IonAvatar >
                                    <img alt="user" src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png" />
                                </IonAvatar>
                                {users.user.map(({ id, firstName, lastName }) => (
                                    <IonCardTitle key={id}>
                                        {firstName} {lastName}
                                        <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                    </IonCardTitle>
                                ))}

                            </IonCardHeader>

                            <IonCardContent>

                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptate dolore at! Aliquid architecto nobis, recusandae minima, aperiam optio et blanditiis repudiandae, deleniti soluta suscipit. Eveniet voluptate perspiciatis voluptates unde.</p>



                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Personal Information
                                    <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                </IonCardTitle>
                                {/* <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div> */}
                            </IonCardHeader>

                            <IonCardContent>
                                {users.user.map(({ id, email, phoneNumber, birthdate }) => (
                                    <p key={id}>
                                        <strong>Email Address:</strong> <br />
                                        {email} <br /><br />
                                        <strong>Phone Number:</strong>
                                        <br /> {phoneNumber}<br /> <br />
                                        <strong>Birthdate:</strong><br />
                                        {birthdate}</p>
                                ))}
                            </IonCardContent>

                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    References
                                    <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <UserReferences />
                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Work Preferences
                                    <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cupiditate! Odio ipsum aperiam, similique excepturi quae impedit molestias nostrum beatae ea voluptas numquam dignissimos, praesentium dicta provident asperiores harum autem!</p>

                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Work History
                                    <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
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
                                                        style={{ zoom: 0.9, color: 'white' }}
                                                        onClick={() => alert("Item Clicked " + item.email)}
                                                    >
                                                        VIEW
                                                    </IonButton>
                                                </div>
                                            </div>
                                        );
                                    }}
                                />
                            </IonCardContent>
                        </IonCard>
                    </IonCol>

                    <IonCol>

                        <IonCardHeader>
                            <IonCardTitle>
                                Licenses
                                <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonGrid>
                            <IonRow>
                                <IonCol><ExpiringLicense /></IonCol>
                                <IonCol><MissingLicense /></IonCol>
                            </IonRow>
                            <IonRow><IonCol><ActiveLicense /></IonCol></IonRow>

                        </IonGrid>


                        <IonItemDivider color="secondary"></IonItemDivider>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Education
                                    <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <Education />

                            </IonCardContent>
                        </IonCard>

                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Skills
                                    <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque pariatur blanditiis quidem dolore deleniti quo sapiente ad tempore, inventore omnis cupiditate delectus ipsa laudantium magni eum, accusantium rem maxime?</p>

                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Certifications
                                    <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
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
                                                        style={{ zoom: 0.9, color: 'white' }}
                                                        onClick={() => alert("Item Clicked " + item.email)}
                                                    >
                                                        VIEW
                                                    </IonButton>
                                                </div>
                                            </div>
                                        );
                                    }}
                                />
                            </IonCardContent>
                        </IonCard>


                        <IonItemDivider color="primary"></IonItemDivider>


                        <IonCardHeader>
                            <IonCardTitle>
                                Medical History
                                <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                            </IonCardTitle>
                        </IonCardHeader>





                        <IonGrid>
                            <IonRow>
                                <IonCol><ExpiringImm /></IonCol>
                                <IonCol><MissingImm /></IonCol>
                            </IonRow>
                            <IonRow><IonCol><ActiveImm /></IonCol></IonRow>

                        </IonGrid>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default UserProfile;