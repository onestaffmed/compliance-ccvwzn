
import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonText,
    IonMenu,
    IonMenuToggle,
    IonToolbar,
    IonTitle,
    IonHeader,

} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, heartOutline, heartSharp, personCircleOutline, home, homeSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import Footer from '../layout/Footer';

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

];

export const Menu = () => {
    const location = useLocation();

    const styles = {
        bkground: 'menuBackground',
        ltbkground: 'listBackground',
        itembkground: 'itemBackground',

    }
    return (
        <>
            <IonMenu contentId="main" type="reveal" className="menu">

                <IonContent className={styles.bkground}>
                    <IonHeader>
                        <IonToolbar className={styles.itembkground} >
                            <IonTitle>Welcome Traveler!</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonText></IonText>
                    <IonList className={styles.bkground}>
                        {appPages.map((appPage, index) => {
                            return (
                                <IonMenuToggle key={index} autoHide={false} >

                                    <IonItem className={`${styles.itembkground} ${location.pathname === appPage.url ? 'selected' : ''}`} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                        <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                        <IonLabel>{appPage.title}</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                            );
                        })}
                    </IonList>
                </IonContent>
                <Footer />
            </IonMenu>



        </>
    )
};

export default Menu;