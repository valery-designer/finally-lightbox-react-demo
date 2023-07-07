import './App.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useRef } from 'react';
import Lightbox from 'finally-lightbox-react';

function App() {
  const lightboxReference = useRef({});
  const pets = [ 
    { src:'dog01.jpg', title: 'My dog' }, 
    { src:'cat01.jpg', title: 'My cat' }, 
    { src:'dog02.jpg', title: 'Another dog' } 
  ];
  const cities = [ 
    { src:'city01.jpg' }, 
    { src:'city02.jpg' }, 
    { src:'city03.jpg' },
    { src:'city04.jpg' },
  ];
  const people = [ 
    { src:'people01.jpg' },
    { src:'people02.jpg' },
    { src:'people03.jpg' },
    { src:'people04.jpg' } 
  ];
  return (
    <>
      <div className="App">

        <h1>Single image</h1>
        <img className="single_image"
          src='dog01.jpg'
          alt='My dog'
          onClick = { (e)=>{ lightboxReference.current.openInLightbox(e, [{src:'dog01.jpg'}]); } }
          //loading="lazy"
        />

        <h3><br/><br/>Gallery 1</h3>
        <h1>Pets</h1>
        <ImageList cols={3} variant={'quilted'}>
          { pets.map((item) => (
            <ImageListItem sx={{ aspectRatio: '1 / 1' }} key={item.src}>
              <img
                src={item.src}
                alt={item.title}
                onClick = { (e)=>{ lightboxReference.current.openInLightbox(e, pets); } }
                //loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <h3>Gallery 2</h3>
        <h1>Cities</h1>
        <ImageList cols={2} variant={'quilted'}>
          { cities.map((item) => (
            <ImageListItem sx={{ aspectRatio: '1 / 1' }} key={item.src}>
              <img
                src={`${item.src}?w=200&h=200&fit=crop&auto=format`}
                srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                // onClick = { (e)=>{ Lightbox.instance.openInLightbox(e, cities); } }
                onClick = { (e)=>{ lightboxReference.current.openInLightbox(e, cities); } }
                //loading="lazy"
              />
            </ImageListItem>
          )) }
        </ImageList>

        <h3>Gallery 3</h3>
        <h1>People</h1>
        <ImageList cols={2} variant={'quilted'}>
          { people.map((item) => (
            <ImageListItem sx={{ aspectRatio: '1 / 1' }} key={item.src}>
              <img
                src={item.src}
                alt={item.title}
                // onClick = { (e)=>{ Lightbox.instance.openInLightbox(e, cities); } }
                onClick = { (e)=>{ lightboxReference.current.openInLightbox(e, people); } }
                //loading="lazy"
              />
            </ImageListItem>
          )) }
        </ImageList>

        {/* <div className="gallery_link" onClick = { (e)=>{ lightboxReference.current.openInLightbox(e, people); } }>Link</div> */}


        <Lightbox lightboxReference={lightboxReference} />

      </div>
    </>
  )
}

export default App;
