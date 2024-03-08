// Obtener los datos del usuario logeado

import { ref } from 'vue';
import { auth } from '@/FirebaseConfig';
import { useFirestore } from 'vuefire';
import { collection, query, where, getDocs } from 'firebase/firestore';

const obtenerDatosUsuario = async () => {
  const uid = auth.currentUser.uid;
  const db = useFirestore();
  const usersCollection = collection(db, 'usuarios');
  const nombreUsuarioLogeado = ref('');
  const emailUsuarioLogeado = ref('');
  const lastnameUsuarioLogeado = ref('');
  const phoneUsuarioLogeado = ref('');
  const countryUsuarioLogeado = ref('');
  const genderUsuarioLogeado = ref('');
  let userDocId = null;

  const queryRef = query(usersCollection, where('uid', '==', uid));

  try {
    const querySnapshot = await getDocs(queryRef);
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      nombreUsuarioLogeado.value = userData.name;
      emailUsuarioLogeado.value = userData.email;
      phoneUsuarioLogeado.value = userData.phone;
      lastnameUsuarioLogeado.value = userData.lastname;
      countryUsuarioLogeado.value = userData.country;
      genderUsuarioLogeado.value = userData.gender;
      userDocId = doc.id;
      
    });
  } catch (error) {
    console.error('Error al obtener datos del usuario', error);
  }
  
  return {
    nombreUsuarioLogeado: nombreUsuarioLogeado.value,
    emailUsuarioLogeado: emailUsuarioLogeado.value,
    lastnameUsuarioLogeado: lastnameUsuarioLogeado.value,
    phoneUsuarioLogeado: phoneUsuarioLogeado.value,
    genderUsuarioLogeado: genderUsuarioLogeado.value,
    countryUsuarioLogeado: countryUsuarioLogeado.value,
    userDocId
   
  };
};

export { obtenerDatosUsuario };


// Actualizar datos del usuario logeado

