import { IonButton, IonCard, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
// import{ eye,person,balloonOutline } from 'ionicons/icons'
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage >
      {/* <IonHeader>
        <IonToolbar >
          <IonTitle>Indigo <IonIcon size='small'  icon={balloonOutline}></IonIcon>
       </IonTitle>
          </IonToolbar>
      </IonHeader> */}
      <IonContent className ="img1">
        <IonCard class="card">

          <IonCardTitle class="cardtitle">
             Login
          </IonCardTitle>

          <IonCardSubtitle  class="cardsubtitle">
            Please enter your admin credentials to gain access
          </IonCardSubtitle>
          <br/>

          <IonInput class="mail" type='text' placeholder='Username or email address'>
          {/* <IonItem slot='end'>
             <IonIcon size='small'  icon={person}></IonIcon>
           </IonItem> */}
         </IonInput>
         <br />
         <IonInput class="pass" type='password' placeholder='Password'>
         {/* <IonItem slot='end'>
             <IonIcon size='small'  icon={eye}></IonIcon>
           </IonItem> */}
          </IonInput>
<br />
          <IonButton color='primary' shape='round' class="loginbtn">
            Login
          </IonButton>
          <br />
          <IonLabel class= "forp">Forgot password</IonLabel>
          <br />
          <br />
          <br />
        
            <IonLabel >
          New to indigo ? Register Here
          </IonLabel>
            
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
