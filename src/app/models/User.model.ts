export class User {

    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public drinkPreference: string,
      public hobbies?: string[]
    ) {};
    /*
    //user cannot have the 'const' keyword
     user = new User('James', 
    'Smith', 
    'james@james.com',
     'jus d\'orange', 
     ['football', 'lecture']);

     */
  }