import './App.css'
import img1 from './photos/img1.jpg'
import img2 from './photos/img2.jpg'
import img3 from './photos/img3.jpg'
import img4 from './photos/img4.jpg'
import img5 from './photos/img5.jpg'
import img6 from './photos/img6.jpg'
import img7 from './photos/img7.jpg'
import img8 from './photos/img8.jpg'
import img9 from './photos/img9.jpg'
import img10 from './photos/img10.jpg'
import img11 from './photos/img11.jpg'
import img12 from './photos/img12.jpg'
import img13 from './photos/img13.jpg'
import img14 from './photos/img14.jpg'
import img15 from './photos/img15.jpg'

function App() {
  return (
    <>
      <h1>My&nbsp;&nbsp;favorite&nbsp;&nbsp;clicks</h1>
      <div className="gridcon">
        <img alt="image1" src={img1} className="pic"/>
        <img alt="image2" src={img2}/>
        <img alt="image3" src={img3}/>
        <img alt="image4" src={img4} className="pic2"/>
        <img alt="image5" src={img5}/>
        <img alt="image6" src={img6} className="pic2"/>
        <img alt="image7" src={img7}/>
        <img alt="image8" src={img8} className="pic"/>
        <img alt="image9" src={img9}/>
        <img alt="image10" src={img10}/>
        <img alt="image11" src={img11} className="pic2"/>
        <img alt="image12" src={img12}/>
        <img alt="image13" src={img13}/>
        <img alt="image14" src={img14}/>
        <img alt="image15" src={img15}/>
      </div>
      <br></br><br /><br />
      <p style={{color:'wheat',fontFamily: '-apple-system', fontSize:'20px'}}>site by Anurag Chandra</p>
    </>
  );
}

export default App;