import { ref } from 'vue';

// Arreglo para almacenar las alertas
const alerts = ref([]);

// Función para agregar una alerta al arreglo
const addAlert = (message, type = 'info') => {
  alerts.value.unshift({ message, type });

  if (alerts.value.length > 5) {
    alerts.value.pop();
  }
};

export { alerts, addAlert };