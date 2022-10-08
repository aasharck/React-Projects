import './App.css';
import mergeImages from 'merge-images';

import { useState } from 'react';
// import sharp from 'sharp'


function App() {
const [img, setImg] = useState('')

  async function mergeAnImage() {
    


    // const layers = [
    //   'https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi',
    //   'https://ipfs.io/ipfs/QmcwqTXcTbNMcSYdZC99rhatgvDymKj12bfDpFPnpbENqq/2.png',
    // ].map(file => ({input: file}))


    // await sharp(layers[0].input).composite(layers).toFile('final.png');


    mergeImages(
      [
        '/30.png',
        '/32.png',
      ]
    ).then(b64 => setImg(b64));
    // setImg(tx)

    // var c=document.createElement("canvas");
    // document.body.appendChild(c);
    // c.width=500;
    // c.height=500;
    // var ctx=c.getContext("2d");
    // var imageObj1 = new Image();
    // var imageObj2 = new Image();
    // imageObj1.src = "https://ipfs.io/ipfs/QmPzuKPKkB6ZN7ysBW4Crh5MLCKA6wMwDwmAnkvDC5t4FJ/10.png"
    // imageObj1.onload = function() {
    //    ctx.drawImage(imageObj1, 0, 0, 100, 100);
    //    imageObj2.src = "https://ipfs.io/ipfs/QmPzuKPKkB6ZN7ysBW4Crh5MLCKA6wMwDwmAnkvDC5t4FJ/11.png";
    //    imageObj2.onload = function() {
    //       ctx.drawImage(imageObj2, 0, 10, 100, 100);
    //       var img = c.toDataURL("image/png");
    //       document.write('<img src="' + img + '" width="100" height="200"/>');
    //    }
    // };
  }

  return (
    <div className='App'>
      <img src={img}/>
      <button onClick={mergeAnImage}>Click here</button>
    </div>
  );
}

export default App;
