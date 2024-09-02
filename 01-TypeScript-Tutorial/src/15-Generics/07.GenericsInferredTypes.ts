/* ########## GENERICS - INFERRED TYPE  ########## */

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// Usage
let result = pair(123, 'Hello');

// const [name, setName] = useState('')  // TypeScript infers string
// const [products, setProducts] = useState([]) // TypeScript complains
// const [products, setProducts] = useState<Product[]>([])
