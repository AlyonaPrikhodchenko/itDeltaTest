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

async function getFullImage(id)  {
  try {
    const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
    return  await response.json();
  } catch (e) {
    console.log(e)
  }
}

async function postData(id, data) {
  const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

export { getData, getFullImage, postData };
