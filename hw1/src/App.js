import PictureCard from './PictureCard/PictureCard';

function App() {
  const dataUser =[
    {
      id:1,
      imgSrc:"https://picsum.photos/200/300",
      createBy:"Niranoon",
      likeCount:10,
      commentCount:2
    },
    {
      id:2,
      imgSrc:"https://picsum.photos/201/300",
      createBy:"Niranoon",
      likeCount:5,
      commentCount:2
    },
    {
      id:3,
      imgSrc:"https://picsum.photos/202/300",
      createBy:"Niranoon",
      likeCount:3,
      commentCount:3
    },
    {
      id:4,
      imgSrc:"https://picsum.photos/204/300",
      createBy:"Niranoon",
      likeCount:6,
      commentCount:2
    },
  ]
  return (
    <ul>
      {dataUser.map((element)=>{
          return <PictureCard id = {element.id} imgSrc = {element.imgSrc} createBy = {element.createBy} likeCount = {element.likeCount} commentCount = {element.likeCount} />
      })}
    </ul>
  );
}
export default App;
