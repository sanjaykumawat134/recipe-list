import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase';
@Injectable()
export class AuthService{
    token:string;
constructor(private router : Router){}

   signUp(email:string,password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(
        (error)=>{
            console.log(error)
        }
    )
   }   

   signIn(email:string,password:string):void{
       firebase.auth().signInWithEmailAndPassword(email,password).then(
           (value : firebase.auth.UserCredential)=>{
            //   console.log("succesfully logged in",value);
            firebase.auth().currentUser.getIdToken().then(
                (tk:string) =>{
                    this.token = tk;
                }
                )
                this.router.navigate(['/']);
           }
       ).catch(
           (error)=>{
               console.log("something happended wrong", error)
           }
       )
   }

   getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (value:string)=>{
                this.token = value;
            }
        )
        return this.token;
   }
   isAuthenticate():boolean{
       return this.token==null;
   }

   signout(){
     firebase.auth().signOut();
     this.token = null;
   }
}