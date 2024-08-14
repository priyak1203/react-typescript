/* ########## ENUMS GOTCHA ########## */

// Number have reverse mapping

enum ServerResponse {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponse).forEach((value) => {
  console.log(value);
});

Object.values(ServerResponse).forEach((value) => {
  if (typeof value === 'number') {
    console.log(value);
  }
});

enum NewResponse {
  Success = 'Success',
  Error = 'Error',
}

console.log(NewResponse);
Object.values(NewResponse).forEach((value) => {
  console.log(value);
});
