// firestoreServices.d.ts

declare module '@/services/firestoreServices' {
    // Agrega aquí tus declaraciones de tipo si es necesario
    // Por ejemplo, si necesitas definir tipos para las funciones
    export function obtenerDatosUsuario(): Promise<any>;
    export function obtenerDatosTodosUsuarios(): Promise<any>;
    export function updateUserData(userId: string, newData: any): Promise<void>;
  }
  