const URL_GET_PHOTO = 'https://boiling-refuge-66454.herokuapp.com/images';

const getData = (onSuccess) => {
  fetch(URL_GET_PHOTO)
    .then((response) => response.json())
    .then((cards) => {
      onSuccess(cards);
    })
    .catch ((err) => {
      alert(err);
    })
};

export { getData };
