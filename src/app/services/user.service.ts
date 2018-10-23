import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  //private users: User[];
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
];
  userSubject = new Subject<User[]>();

  // Subject pour émettre cet array. 
  // La méthode  emitUsers()  déclenche ce Subject
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}