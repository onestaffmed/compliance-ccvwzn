
import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonToolbar,
    IonTitle,
    IonHeader,

    IonMenu,
    IonMenuToggle,

} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, heartOutline, heartSharp, personCircleOutline, home, homeSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';


var appPages = [
    {
        title: 'Home',
        url: '/home',
        iosIcon: home,
        mdIcon: homeSharp
    },
    {
        title: 'My Profile',
        url: '/profile',
        iosIcon: personCircleOutline,
        mdIcon: personCircleOutline
    },
    {
        title: 'Messages',
        url: '/page/Messages',
        iosIcon: paperPlaneOutline,
        mdIcon: paperPlaneSharp
    },
    {
        title: 'Favorites',
        url: '/page/Favorites',
        iosIcon: heartOutline,
        mdIcon: heartSharp
    },
    {
        title: 'Archived',
        url: '/page/Archived',
        iosIcon: archiveOutline,
        mdIcon: archiveSharp
    },
    {
        title: 'Trash',
        url: '/page/Trash',
        iosIcon: trashOutline,
        mdIcon: trashSharp
    },
    {
        title: 'Spam',
        url: '/page/Spam',
        iosIcon: warningOutline,
        mdIcon: warningSharp
    }
];

export const Menu = () => {
    const location = useLocation();

    return (
        <>
            <IonMenu contentId="main" type="reveal" color="primary">
                <IonHeader >
                    <IonToolbar color="primary">
                        <IonTitle>Welcome Traveler!</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        {appPages.map((appPage, index) => {
                            return (
                                <IonMenuToggle key={index} autoHide={false}>

                                    <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                        <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                        <IonLabel>{appPage.title}</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                            );
                        })}
                    </IonList>
                </IonContent>
            </IonMenu>



        </>
    )
};

export default Menu;