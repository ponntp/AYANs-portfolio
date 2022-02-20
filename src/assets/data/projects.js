import { v4 as uuidv4 } from 'uuid';
import KruChana from '../images/KruChana.jpg';
import OneForAll from '../images/OneForAll.jpg';
import FaceRegcognition from '../images/FaceReg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Kru Chana',
    desc:
      'The mobile application is used by teachers and students to manage teaching and learning online.',
    img: KruChana,
  },
  {
    id: uuidv4(),
    name: 'One For All',
    desc:
      'The application helps as a intermediate of communication between volunteers and people affected by COVID-19, which is used on websites and mobile applications.',
    img: OneForAll,
  },
  {
    id: uuidv4(),
    name: 'Face Recognition Website',
    desc:
      'The website is used to verify that a student\'s face matches the face on their student card.',
    img: FaceRegcognition,
  },
  
];

export default projects;
