/* ########## GENERICS - DEFAULT TYPE  ########## */

// Default Type Basics
interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3],
};

const randomStuff: StoreData = {
  data: ['random', 1],
};
