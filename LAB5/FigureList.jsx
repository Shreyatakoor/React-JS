import { useState } from "react";
import BasicFigure from "./BasicFigure";
import "./FigureList.css"; // Import CSS for styling

const initialImages = [
  {
    src:"https://tse1.mm.bing.net/th/id/OIP.zhihdDngjBPTD6O5uQct3wHaJt?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
    caption: "Image 1",
  },
  {
    src: "https://tse3.mm.bing.net/th/id/OIP.3IdLKLIf3MUlLyqgX9vmWQHaJq?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
    caption: "Image 2",
  },
  {
    src:"https://th.bing.com/th/id/R.fcddb843d7f6ac59e5a12b8705d5a73d?rik=Z5ovmLwvMEoV5Q&riu=http%3a%2f%2f2.bp.blogspot.com%2f-mdQYFvghhj4%2fU0ImPHMMAYI%2fAAAAAAAAsZM%2fxpay6MnjfJk%2fs1600%2fRama%2bwith%2bfamily.jpg&ehk=K25JHJ9bHP2iR7ERviy9PbKn1afKJH0po15YBVVS9wk%3d&risl=&pid=ImgRaw&r=0",
    caption: "Image 3",
  },
];

const FigureList = () => {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newImage = {
      src: `https://picsum.photos/400/300?random=${randomId}`,
      caption: `Image ${images.length + 1}`,
    };

    setImages([...images, newImage]);
  };
  const removeImage=(index)=>{
    setImages(images.filter((_,i)=>i!==index));
  };
  return (
    <div className="container">
      <h1>Dynamic Image Gallery</h1>

      <div className="buttons">
        <button onClick={addImage}>Add Image</button>
      </div>

      <div className="gallery">
        {images.map((image, index) => (
          <BasicFigure
            key={index}
            src={image.src}
            caption={image.caption}
            onRemove={() => removeImage(index)}/>
        ))}
      </div>
    </div>
  );
};

export default FigureList;
