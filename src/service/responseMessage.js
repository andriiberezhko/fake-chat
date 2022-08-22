export const ResponseMessage = () => {
  return fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const message = {
        text: data.value,
        time: new Date(),
        isme: false,
      };
      return message;
    });
};
