const imageWidth = 1920;
const imageHeight = 1080;
const collectionID = 8469893; 

fetch(
  `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`
)
  .then(response => {
    const dody = document.querySelector('body');
    dody.style.backgroundImage = `url('${response.url}')`;
    dody.style.backgroundSize = "cover";
  })
  .catch(err => {
    console.log(err);
  });