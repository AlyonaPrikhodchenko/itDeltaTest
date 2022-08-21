const URL_GET_PHOTO = 'https://boiling-refuge-66454.herokuapp.com/images';

async function getData() {
  try {
    const response = await fetch(URL_GET_PHOTO);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

async function getFullImage(id)  {
  try {
    const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
    return await response.json();
  } catch (err) {
    console.log(err)
  }
}

async function postData(data, id) {
  try {
    const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response;
  } catch (err){
    console.log(err)
  }
}

export { getData, getFullImage, postData };
