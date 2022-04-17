import React from 'react';
import ReactDOM from 'react-dom';

const homepagepicture = {
    src: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    alt: 'Home Page Picture',
    width: '900px'
  };

function chgPic(e){
    e.target.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg');
    e.target.setAttribute('alt', 'Second Home Page Picture');
}

export class BigHome extends React.Component {
    render() {
      return (
        <div>
          <h1>
          <a href=''>Frozen Yogurt</a>
          </h1>
          <img onClick ={chgPic}
            src={homepagepicture.src} 
            alt={homepagepicture.alt} 
            width={homepagepicture.width} />
        </div>
      );
    }
  };
  
  ReactDOM.render(
    <BigHome />,
    document.getElementById('root')
  );
