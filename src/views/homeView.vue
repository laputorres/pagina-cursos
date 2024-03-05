<template>
  <div>
    <h1>Usuarios Registrados</h1>
    <ul>
      <li v-for="user in users" :key="user.uid">
        {{ user.displayName }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '@/FirebaseConfig'; // Ajusta la ruta correcta a tu configuración de Firebase
import { collection, getDocs } from 'firebase/firestore';

export default {
  setup() {
    const users = ref([]);

    // Obtener la colección de usuarios desde Firestore
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users'); // Ajusta el nombre de la colección si es diferente
      const querySnapshot = await getDocs(usersCollection);

      users.value = querySnapshot.docs.map((doc) => doc.data());
    };

    // Llamada a la función al montar el componente
    onMounted(fetchUsers);

    return {
      users,
    };
  },
};
</script>

<style>
  /* Estilos opcionales */
</style>
