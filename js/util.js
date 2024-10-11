import {MESSAGES, NAMES, getRandomInteger, createRandomIdFromRangeGenerator} from './data.js';

const createComment = () => ({
  id: createRandomIdFromRangeGenerator(1, 1000) ,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

function createPhoto () {
  const comments = [];
  for (let i = 0; i <= getRandomInteger(0, 30); i++) {
    comments.push(createComment());
  }
  return {
    id: getRandomInteger(1, 25),
    url: `photos/${getRandomInteger(1, 25)}.jpg`,
    description: 'фото',
    likes: createRandomIdFromRangeGenerator(15, 200),
    comments: comments
  };
}
function createArrayOfPhotos () {
  const ArrayOfPhotos = [];
  for (let i = 0; i < 25; i++) {
    ArrayOfPhotos.push(createPhoto());
  }
}
export{createArrayOfPhotos};
