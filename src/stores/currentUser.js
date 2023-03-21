import { defineStore } from "pinia";
import { 
    updateEmail, 
    updatePassword,
    updateProfile, 
    signInWithEmailAndPassword, 
    signOut, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged 
} from 'firebase/auth';
import { db, auth } from '../firebase';

export const currentUserStore = defineStore('currentUser', {
    state: () => ({ 
        loading:false,
        is:{
            error:false,
            success:false,
            message:'',
        },
        email:null,
        id:null,
        nombre:null, //DisplayName
        foto:null, //PhotoURL
        rol:null,
    }),
    actions: {
      async login(email,pwd) {
        try{ 
            this.loading = true;
            await signInWithEmailAndPassword(auth,email,pwd).then(() => {
                this.setSuccess('Espere...');
            }).catch((e) => { this.setError('Datos Incorrectos'); })
        } catch (e) { console.log(e); this.setError('Datos incorrectos'); }
        finally { this.loading = false; }
      },

      async getDatos(){
        try {
            this.email = auth.currentUser.email;
            this.nombre = auth.currentUser.displayName;
            this.id = auth.currentUser.uid;
            this.foto = auth.currentUser.photoURL;
        } catch (e) {
            this.setError(e.message);
        }
      },

      async logout(){
        try{ this.loading = true; await signOut(auth); } 
        catch (e) { console.log(e); }
        finally { this.loading = false; }
      },

      async isAuth(){
        return new Promise((resolve, reject) => {
            const unsuscribe = onAuthStateChanged(auth, user => {
                if(user){ }
                resolve(user);
            },(e) => reject(e))
            unsuscribe();
        })
      },

      async updateProfile(values){
        try{
            this.loading = true;
            
        } catch (e) { this.setError(e.message) }
        finally { this.loading = false; }
      },

      setError(msg){
        this.is.success = false;
        this.is.message = msg; 
        this.is.error = true;
      },

      setSuccess(msg){
          this.is.error = false;
          this.is.message = msg; 
          this.is.success = true;
      }

    },
  })