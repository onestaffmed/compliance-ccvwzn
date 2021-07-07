import { IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonAvatar, IonGrid, IonRow, IonCol, IonItemDivider, IonHeader, IonToolbar } from "@ionic/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { create, } from 'ionicons/icons';

const UserProfile = () => {

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
                                <IonCardTitle>FirstName LastName  <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div></IonCardTitle>

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

                                <p>Address</p>
                                <p>Phone</p>

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
                                {/* <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div> */}
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
                    </IonCol>

                    <IonCol>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Licenses
                                    <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim minima consequatur unde perspiciatis maiores ea! Quae enim hic doloremque sed exercitationem, eius, reprehenderit aliquam doloribus repellat, iste molestias iusto.</p>

                            </IonCardContent>
                        </IonCard>
                        <IonItemDivider color="secondary"></IonItemDivider>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Education
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo quod placeat nisi in facilis repellendus voluptatum nihil voluptates hic quisquam, praesentium debitis, esse aut minus doloribus quibusdam consequatur officia!</p>

                            </IonCardContent>
                        </IonCard>


                        <IonItemDivider color="primary"></IonItemDivider>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Work History
                                    <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odit ut culpa aperiam qui iste corrupti exercitationem quam ipsum sunt iusto soluta dicta nulla, praesentium placeat voluptates ratione unde dolore!</p>

                            </IonCardContent>
                        </IonCard>
                        <IonCard className="cardTransparent">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Medical History
                                    <div className="profileEditIcon"><FontAwesomeIcon icon={faPenSquare} color="orange" /></div>
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi nam blanditiis ducimus expedita? Animi, libero facere sed quos odit repudiandae voluptatum sequi cum est maxime, qui explicabo, architecto incidunt.</p>

                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default UserProfile;