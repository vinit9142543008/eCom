import { Injectable } from '@angular/core';
import { Firestore, collectionData, getDocs,  query,
  where, addDoc, updateDoc, deleteDoc, doc, collection, setDoc, getDoc,  } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
// import { initializeApp } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  shopingStore:any[]=[]
  // [x: string]: any;
  
  private itemsCollection = collection(this.firestore, 'eComUsers');
  currentUser: any = null;
  http: any;
  constructor(
    private firestore: Firestore,
        private router:Router,
        
      // private database:Database
      ){}
     
        

         getItems(): Observable<any> {
          return collectionData(collection(this.firestore,'users'), { idField: 'email' }) as Observable<any>;
        }
        
  
          // Create
  
  //   createItem( item:any): Promise<void> {
  //   return addDoc(this.itemsCollection, item ) as Promise<any>;


  // }

  // Update
  // updateItem(id: string, updatedItem: Partial<any>): Promise<void> {
  //   const itemDocRef = doc(this.firestore, `users/${id}`);
  //   return updateDoc(itemDocRef, updatedItem) as Promise<void>;
  // }

  // Delete
  // deleteItem(id: string): Promise<void> {
  //   const itemDocRef = doc(this.firestore, `signup/${id}`);
  //   return deleteDoc(itemDocRef) as Promise<void>;
  // }

  
  async register(email: any, password: any, name: any,phone:any) {
    try {
      // Generate a new document in the "users" collection with email as an identifier.
      const userRef = doc(this.firestore, `users/${email}`) ;
      await setDoc(userRef, {
        email: email,
        password: password, // Normally you would hash passwords for security
        name: name,
        phone:phone,
        createdAt: new Date()
      });
    } catch (error) {
      console.error("Error during registration:", error);
    }
    this.router.navigate(['/menu'])
  }

 authenticate(email: any, password: any){
 return this.getItems()
 }
  //  .toPromise().then((res)=>{
  //   return Promise.resolve(true)
  //  })
  // .subscribe
  //  ((res)=>{
  //   if(res?.length){
  //     res.map((user:any)=>{
  //       if(user.email == email && user.password == password){
  //         isUserLoggedIn = true
  //       }
  //     })
  //   }});
  //   return Promise.resolve(isUserLoggedIn);
  // }
  async login(email: any, password: any) {
    try {
      const userRef = doc(this.firestore, `users/${email}`);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData && userData['password'] === password) {
          // Successful login
          console.log('Login successful');
          this.router.navigate(['/welcome']);
          return true;
        } else {
          console.error('Incorrect password');
          return false;
        }
      } else {
        console.error('User does not exist');
        return false;
      }
    } catch (error) {
      console.error("Error during login:", error);
      return false;
    }
 
 
  }

   logout() {
    localStorage.removeItem('token');    
  }

  isUserLoggedIn():boolean{
    return localStorage.getItem('token') ? true : false;
  }


  getAllUsers(): Observable<any[]> {
    const usersRef = collection(this.firestore, 'users'); 
    return collectionData(usersRef, { idField: 'id' });   
  }
  
  async saveUserToFirestore(userId: string, userData: any): Promise<void> {
    const userDocRef = doc(this.firestore, `users/${userId}`);
    await setDoc(userDocRef, userData);
    console.log('User data saved to Firestore');
  }

  async getUserFromFirestore(userId: string): Promise<any> {
    const userDocRef = doc(this.firestore, `users/${userId}`);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      this.currentUser = userDoc.data();
      console.log('User data fetched from Firestore:', this.currentUser);
      return this.currentUser;
    } else {
      console.error('No user found in Firestore');
      return null;
    }
 

}

// async changePassword(userId: string, newPassword: string): Promise<void> {
//   try {
//     // Hash the password (use a library like bcrypt for real apps)
//     const hashedPassword = this.hashPassword(newPassword);

//     // Reference to the user document
//     const userDocRef = doc(this.firestore, `users/${userId}`);

//     // Update the password field
//     await updateDoc(userDocRef, { password: hashedPassword });

//     console.log('Password updated successfully!');
//   } catch (error) {
//     console.error('Error updating password:', error);
//   }
// }
// hashPassword(password: string): string {
//   // For demonstration purposes only
//   return `hashed_${password}`;
// }








}
    