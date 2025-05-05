//
//Типизация Явная или выводимая
const variafble1: number = 5;
const variafble2 = 6;

//
//Типизация структурная
type Person = {
  firstname: string;
  lastname: string;
};

type User = {
  firstname: string;
  lastname: string;
};

const testUser1: User = {
  firstname: 'Vasia',
  lastname: 'Ivanov',
};

const testUser2: Person = testUser1;

//
//Объединение union тип
let data1: number | string;
data1 = 5;
data1 = 'five';

let color: 'red' | 'blue';

type MainInfo = {
  firstname: string;
  lastname: string;
};

type ExtInfo = {
  age: number;
};

type FullInfo = MainInfo | ExtInfo;

const info0_0: FullInfo = {
  firstname: 'Vasia',
  lastname: 'Ivanov',
};

const info0_1: FullInfo = {
  age: 35,
};

const info0_2: FullInfo = {
  firstname: 'Vasia',
  lastname: 'Ivanov',
  age: 34,
};

//
//Объединение & intersection (пересечение) тип
let never1: string & number;

type FullIntersect = MainInfo & ExtInfo;

// const info1_0: FullIntersect = {
//   firstname: 'Vasia',
//   lastname: 'Ivanov',
// };

// const info1_1: FullIntersect = {
//   age: 35,
// };

const info1_2: FullIntersect = {
  firstname: 'Vasia',
  lastname: 'Ivanov',
  age: 34,
};

//
//Надтип supertype и подтип subtype

type SuperType = {
  name: string;
};

type Subtype = {
  name: string;
  age: number;
};

const subType1: Subtype = {
  name: 'Vasia',
  age: 35,
};

const superType1: SuperType = subType1;

const superType2: SuperType = {
  name: 'Irina',
};

//Больше данных нужно чем есть
// const subType2: Subtype = superType2;

//
//Типы TypeScript any, unknown, never, void

//any - SuperType
//unknown - SuperType

function logData(data: unknown) {
  let data1: string;
  let data2: number[];

  // data1 = data;
  if (typeof data === 'string') {
    data1 = data;
  }

  if (Array.isArray(data)) {
    data2 = data;
  }
}

let valueUnknown: unknown;
valueUnknown = 42;
valueUnknown = 'Vasia';
valueUnknown = true;

//never - SubType

//let valueNever1: never = 5;
let valueNever2: never;
// const stringNever: string = valueNever2;

enum EnumValues {
  FIRST,
  SECOND,
  // TEST
}

function neverTest(values: EnumValues) {
  switch (values) {
    case EnumValues.FIRST:
      return 1;
    case EnumValues.SECOND:
      return values;
    default:
      const testingCheck: never = values; //Работает если never, вывалится в ошибку если другой тип
      return values; //never
  }
}

//void - Функция ничего не возвращает

function voidTest(): void {
  console.log('Hello void');
}

type VoidTest = (test: number) => void;
