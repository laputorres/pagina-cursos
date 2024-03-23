//firestoreServices.js


// Obtener los datos del usuario logeado

import { ref } from 'vue';
import { auth, db } from '@/FirebaseConfig';
import { useFirestore } from 'vuefire';
import { collection, query, where, getDocs, doc, updateDoc, limit } from 'firebase/firestore';

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
        imgSrc: userData.imgSrc
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




// Traer todas las categorias

const allCategories= async () => {
 const categoriesCollection = collection(db, 'categories');
  const categoriesData = ref([]);

  try {
    const querySnapshot = await getDocs(categoriesCollection);

    querySnapshot.forEach((doc) => {
      const categoryData = doc.data();
      const category = {
        name: categoryData.name,
        categoryDocId: doc.id,
        subcategories: categoryData.subCategories || [

        ],
        
      };

      const subcategories = categoryData.subcategories;
      if (subcategories) {
        category.subcategories.push(...subcategories);
      }
      categoriesData.value.push(category);
     
    });
  } catch (error) {
    console.error('Error al obtener datos de todas las categorias', error);
  }

  return categoriesData.value;
};


//Traer todos los cursos

const allCurses= async (limitAmount = null) => {
  const cursesCollection = collection(db, 'curses');
   const cursesData = ref([]);
 
   try {
    
    const querySnapshot = await getDocs(query(cursesCollection, limit(limitAmount)));

    for (const doc of querySnapshot.docs) {
      const curseData = doc.data();
      const curse = {
        title: curseData.title,
        paidPrice: curseData.paidPrice,
        membership: curseData.membership,
        curseDescription: curseData.description,
        curseDocId: doc.id,
        curseCategory: curseData.category,
        lectures: []
      };

      const lecturesSnapshot = await getDocs(collection(doc.ref, 'lectures'));

      lecturesSnapshot.forEach((lectureDoc) => {
        const lectureData = lectureDoc.data();
        curse.lectures.push({
          lectureTitle: lectureData.lectureTitle,
          lectureDescription: lectureData.lectureDescription,
          lectureVideo: lectureData.lectureVideo,
          lectureDocId: lectureDoc.id,
        });
      });

      cursesData.value.push(curse);
    }
  }catch (error) {
     console.error('Error al obtener datos de todas los cursos', error);
   }
 
   return cursesData.value;
 };


 // Traer precios de membresias

  const membershipPrices = async () =>{
    const pricesCollection = collection(db, 'products');
    const pricesData = ref([]);

    try {
    
      const querySnapshot = await getDocs(query(pricesCollection, where("active", "==", true)));
  
      for (const doc of querySnapshot.docs) {
        const priceData = doc.data();
        const price = {
          name: priceData.name,
          priceDocId: doc.id,
          prices: []
        };
  
        const pricesSnapshot = await getDocs(collection(doc.ref, 'prices'));
  
        pricesSnapshot.forEach((priceDoc) => {
          const priceData = priceDoc.data();
          price.prices.push({
            unitAmount: priceData.unit_amount,
            currency: priceData.currency,
            interval: priceData.interval,
            lectureDocId: priceDoc.id,
          });
        });
  
        pricesData.value.push(price);
      }
    }catch (error) {
       console.error('Error al obtener datos de todas los precios', error);
     }
   
     return pricesData.value;

  }



export { obtenerDatosUsuario, obtenerDatosTodosUsuarios, updateUserData, allCategories, allCurses, membershipPrices };