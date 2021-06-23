import { IonFooter, IonToolbar } from '@ionic/react';



const Footer = () => {

    return (
        <IonFooter>
            <IonToolbar className="ion-text-center footer">
                <div>
                    <p>© {(new Date().getFullYear())} Project Roo</p>
                </div>
                <div>Terms & Conditions</div>
                <br />
            </IonToolbar>
        </IonFooter>
    );
};

export default Footer;
