import { IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonAvatar, IonGrid, IonRow, IonCol, IonItemDivider, IonHeader, IonToolbar } from "@ionic/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";
import { create, } from 'ionicons/icons';

const UserProfile = () => {

    return (
        <div >


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
                                <IonCardTitle>FirstName LastName <ion-icon className="profileEditIcon" icon={create} /></IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>

                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptate dolore at! Aliquid architecto nobis, recusandae minima, aperiam optio et blanditiis repudiandae, deleniti soluta suscipit. Eveniet voluptate perspiciatis voluptates unde.</p>
                                <FontAwesomeIcon icon={['fas', 'faSquarePen']} />

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
                                <ion-icon className="profileEditIcon" icon={create} />
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
                                <ion-icon className="profileEditIcon" icon={create} />
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim minima consequatur unde perspiciatis maiores ea! Quae enim hic doloremque sed exercitationem, eius, reprehenderit aliquam doloribus repellat, iste molestias iusto.</p>
                                <ion-icon className="profileEditIcon" icon={create} />
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque pariatur blanditiis quidem dolore deleniti quo sapiente ad tempore, inventore omnis cupiditate delectus ipsa laudantium magni eum, accusantium rem maxime?</p>
                                <ion-icon className="profileEditIcon" icon={create} />
                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Certifications
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo quod placeat nisi in facilis repellendus voluptatum nihil voluptates hic quisquam, praesentium debitis, esse aut minus doloribus quibusdam consequatur officia!</p>
                                <ion-icon className="profileEditIcon" icon={create} />
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cupiditate! Odio ipsum aperiam, similique excepturi quae impedit molestias nostrum beatae ea voluptas numquam dignissimos, praesentium dicta provident asperiores harum autem!</p>
                                <ion-icon className="profileEditIcon" icon={create} />
                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Work History
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odit ut culpa aperiam qui iste corrupti exercitationem quam ipsum sunt iusto soluta dicta nulla, praesentium placeat voluptates ratione unde dolore!</p>
                                <ion-icon className="profileEditIcon" icon={create} />
                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Medical History
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi nam blanditiis ducimus expedita? Animi, libero facere sed quos odit repudiandae voluptatum sequi cum est maxime, qui explicabo, architecto incidunt.</p>
                                <ion-icon className="profileEditIcon" icon={create} />
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default UserProfile;