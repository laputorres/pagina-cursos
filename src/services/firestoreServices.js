//firestoreServices.js


// Obtener los datos del usuario logeado

import { ref } from 'vue';
import { auth, db } from '@/FirebaseConfig';
import { useFirestore } from 'vuefire';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';

const obtenerDatosUsuario = async () => {
  const uid = auth.currentUser.uid;
  //const db = useFirestore();
  const usersCollection = collection(db, 'usuarios');
  const nombreUsuarioLogeado = ref('');
  const emailUsuarioLogeado = ref('');
  const lastnameUsuarioLogeado = ref('');
  const phoneUsuarioLogeado = ref('');
  const countryUsuarioLogeado = ref('');
  const genderUsuarioLogeado = ref('');
  const imgSrc = ref('');
  const userType = ref('');
  let userDocId = null;

  const queryRef = query(usersCollection, where('uid', '==', uid));

  try {
    const querySnapshot = await getDocs(queryRef);
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      userDocId = doc.id;
      nombreUsuarioLogeado.value = userData.name;
      emailUsuarioLogeado.value = userData.email;
      phoneUsuarioLogeado.value = userData.phone;
      lastnameUsuarioLogeado.value = userData.lastname;
      countryUsuarioLogeado.value = userData.country;
      genderUsuarioLogeado.value = userData.gender;
      imgSrc.value = userData.imgSrc;
      userType.value = userData.userType;
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
    imgSrc:  imgSrc.value,
    userType : userType.value,
    userDocId
   
  };
};

// Traer documentos de todos los usuarios

const obtenerDatosTodosUsuarios = async () => {
  const db = useFirestore();
  const usersCollection = collection(db, 'usuarios');
  const datosUsuarios = ref([]);

  try {
    const querySnapshot = await getDocs(usersCollection);

    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      const usuario = {
        nombre: userData.name,
        email: userData.email,
        phone: userData.phone,
        lastname: userData.lastname,
        country: userData.country,
        gender: userData.gender,
        userDocId: doc.id,
      };

      datosUsuarios.value.push(usuario);
    });
  } catch (error) {
    console.error('Error al obtener datos de todos los usuarios', error);
  }

  return datosUsuarios.value;
};

//Update documentos "usuarios"

const updateUserData = async (userId, newData) => {
  const userDocRef = doc(db, 'usuarios', userId); // Ajusta 'usuarios' al nombre de tu colección
  await updateDoc(userDocRef, newData);
};


export { obtenerDatosUsuario, obtenerDatosTodosUsuarios, updateUserData };