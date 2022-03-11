const headers = new Headers();

const defaultConfig = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

export function get(url) {
  makeCall(url, defaultConfig);
}

function makeCall(url) {
  return fetch(url);
}
