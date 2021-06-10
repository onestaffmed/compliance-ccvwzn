import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonHeader,
    IonToolbar,
    IonTitle,
} from '@ionic/react';

import { home } from 'ionicons/icons'

const Menu = () => {

    return (

        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>

                <IonList id="inbox-list">

                    <IonListHeader>
                        Navigate
          </IonListHeader>
                    <IonMenuToggle autoHide={false}>
                        <IonItem button href="/">
                            <IonIcon slot="start" icon={home}></IonIcon>
                            <IonLabel>
                                Home
              </IonLabel>
                        </IonItem>
                        <IonItem button href="/profile">
                            <IonIcon slot="start" icon={home}></IonIcon>
                            <IonLabel>
                                Profile
              </IonLabel>
                        </IonItem>
                        <IonItem button >
                            <IonIcon slot="start" icon={home}></IonIcon>
                            <IonLabel>
                                Home
              </IonLabel>
                        </IonItem>
                        <IonItem button>
                            <IonIcon slot="start" icon={home}></IonIcon>
                            <IonLabel>
                                Home
              </IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>

            </IonContent>
        </IonMenu>

    );
};

export default Menu;