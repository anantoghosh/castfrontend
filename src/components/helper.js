class Response {
  static verify(response) {
    if (response.ok) {
      return Promise.resolve(response);
    }

    return Promise.reject(new Error(response.statusText));
  }

  static toJson(response) {
    return response.json();
  }

  static error(error) {
    console.log('Error', error);
  }
}

export function debounce(func, wait) {
  let timeout;
  return function call(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export default Response;
