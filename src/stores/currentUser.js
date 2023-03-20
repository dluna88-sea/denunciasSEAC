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
    getters: {
        getError(){
            this.is.error = false;
            const msg = this.is.message;
            this.is.message = '';
            return msg;
        },
        getSuccess(){
            this.is.success = false;
            const msg = this.is.message;
            this.is.message = '';
            return msg;
        },
    },
    actions: {
      async login(email,pwd) {
        try{ 
            this.loading = true;
            await signInWithEmailAndPassword(auth,email,pwd).then(() => {
                console.log(auth.currentUser);
                this.id = auth.currentUser.uid;
                this.nombre = auth.currentUser.displayName;
                this.email = email;
                this.foto = auth.currentUser.photoURL;
                this.is.error = false;
                this.is.message = 'Accediendo. espere...'; 
                this.is.success = true;
            }).catch((e) => { this.is.message = 'Datos incorrectos'; this.is.error = true; })
        } catch (e) { console.log(e); }
        finally { this.loading = false; }
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
            
        } catch (e) { this.is.message = e.message; this.is.error = true; }
        finally { this.loading = false; }
      }

    },
  })