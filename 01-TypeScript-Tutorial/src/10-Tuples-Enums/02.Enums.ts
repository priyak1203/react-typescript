/* ########## ENUMS ########## */

enum ServerResponseStatus {
  Success,
  Error,
}

console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

// Other options

enum ResponseStatus {
  Success = 200,
  Error = 'Error',
}

console.log(ResponseStatus);

enum NewResponse {
  Success = 200,
  Error = 500,
}

console.log(NewResponse);
