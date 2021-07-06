import { IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonAvatar, IonGrid, IonRow, IonCol, IonItemDivider } from "@ionic/react";

const UserProfile = () => {

    return (
        <div >
            <IonGrid>
                <IonRow>
                    <IonCol size="5">
                        <IonCard className="cardTransparent" >
                            <IonCardHeader>
                                <IonAvatar >
                                    <img alt="user" src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png" />
                                </IonAvatar>
                                <IonCardTitle>FirstName LastName</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptate dolore at! Aliquid architecto nobis, recusandae minima, aperiam optio et blanditiis repudiandae, deleniti soluta suscipit. Eveniet voluptate perspiciatis voluptates unde.</p>
                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Personal Information
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Address</p>
                                <p>Phone</p>
                            </IonCardContent>

                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    References
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>

                                <p>Name</p>
                                <p>Address</p>
                                <p>Phone</p>
                                <p>Email</p>
                                <br />
                                <p>Name</p>
                                <p>Address</p>
                                <p>Phone</p>
                                <p>Email</p>
                                <br />
                                <p>Name</p>
                                <p>Address</p>
                                <p>Phone</p>
                                <p>Email</p>
                            </IonCardContent>

                        </IonCard>
                    </IonCol>

                    <IonCol>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Licenses
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima explicabo esse, veniam possimus! Rem, dolores impedit, consequatur ipsa aut veniam suscipit sequi autem recusandae, itaque maxime nihil temporibus.
                            </IonCardContent>
                        </IonCard>
                        <IonItemDivider></IonItemDivider>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Skills
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima explicabo esse, veniam possimus! Rem, dolores impedit, consequatur ipsa aut veniam suscipit sequi autem recusandae, itaque maxime nihil temporibus.
                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Certifications
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima explicabo esse, veniam possimus! Rem, dolores impedit, consequatur ipsa aut veniam suscipit sequi autem recusandae, itaque maxime nihil temporibus.
                            </IonCardContent>
                        </IonCard>
                        <IonItemDivider></IonItemDivider>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Education
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima explicabo esse, veniam possimus! Rem, dolores impedit, consequatur ipsa aut veniam suscipit sequi autem recusandae, itaque maxime nihil temporibus.
                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Work History
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima explicabo esse, veniam possimus! Rem, dolores impedit, consequatur ipsa aut veniam suscipit sequi autem recusandae, itaque maxime nihil temporibus.
                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Medical History
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium minima explicabo esse, veniam possimus! Rem, dolores impedit, consequatur ipsa aut veniam suscipit sequi autem recusandae, itaque maxime nihil temporibus.
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default UserProfile;