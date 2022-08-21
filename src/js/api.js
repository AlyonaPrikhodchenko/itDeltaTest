const URL_GET_PHOTO = 'https://boiling-refuge-66454.herokuapp.com/images';

const getData = (onSuccess) => {
  fetch(URL_GET_PHOTO)
    .then((response) => response.json())
    .then((cards) => {
      onSuccess(cards);
    })
    .catch ((err) => {
      console.log(err);
    })
};

async function getFullImage(id)  {
  try {
    const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
    return  await response.json();
  } catch (err) {
    console.log(err)
  }
}


export { getData, getFullImage };
