import React from "react";


// function Fruit(props){
//   console.log(props)
//   return (
//     <h1>{props.fav} 싱싱해용</h1>
  

  
//   )
  
// }
function Orange(){
  return <h1>오렌지먹고 있어요 냉장고앞에서,,</h1>
}
function Fruit({fav}){
  return (<h1>{fav}싱싱해용</h1>)
}
function App() {
  return (
    <div>
      <h1>짱구야 짱아 어딨니</h1>
      <Fruit fav='바나나' />
      <Fruit fav='망고' />
      <Fruit fav='수박' />
      <Fruit fav='체리' />
      <Fruit fav='구아바' />
      <Fruit fav='복숭아' />


    </div>
  );
}

export default App;
