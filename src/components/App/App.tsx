import './App.css'
import Section from '../Section.tsx';



function App() {

  const Photos = {
    section1: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
      "https://i.natgeofe.com/k/49f3dd21-d3b5-476e-a85e-4c5b34651cd1/Denali-mountain.jpg",
      "https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg",
      "https://geographical.co.uk/wp-content/uploads/Photographing-mountains-in-spring-1200x800.jpg",
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D"
    ],
    section2: [
      "https://www.celebritycruises.com/blog/content/uploads/2022/01/most-beautiful-mountains-in-the-world-kirkjufell-iceland-1024x580.jpg",
      "https://www.adorama.com/alc/wp-content/uploads/2018/08/san-juans-feature-825x465.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/mt-assiniboine-provincial-park-at-sunrise-royalty-free-image-1623253564.jpg",
      "https://i.guim.co.uk/image/media/282ecfa5a3022fa907b99238bcdac09362002b82/0_182_5472_3283/master/5472.jpg?width=1200&quality=85&auto=format&fit=max&s=20350aafa103f7da31a0d44f8ece5d41",
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D"
    ],
    section3: [
      "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
      "https://static.wixstatic.com/media/91e229_aad6082a4fac474ea872f2a1d24cb973~mv2.jpg/v1/fill/w_640,h_368,al_c,lg_1,q_80,enc_auto/91e229_aad6082a4fac474ea872f2a1d24cb973~mv2.jpg",
      "https://www.travelandleisure.com/thmb/kfcKH88gBt_d1ZJPFg_rUcyMekU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-grand-teton-USMNTNSIPOG0823-2538d183b9094e3fb59dd5e54bbe791c.jpg",
      "https://geographical.co.uk/wp-content/uploads/Photographing-mountains-in-spring-1200x800.jpg",
      "https://www.usatoday.com/gcdn/-mm-/10cc64f0b869f41892a33aedf84732975161d6ab/c=0-178-3504-2158/local/-/media/2018/01/17/USATODAY/USATODAY/636518022515870496-Rocky-Mountain-NP-Brandon-Selinsky-STE.jpg?width=700&height=396&fit=crop&format=pjpg&auto=webp"
    ]
  }

  return (
    <>
      <div className="background" id="backgroundHome"></div>

      <div className="background" id="backgroundAnotherPage" style={{ display: 'none' }}></div>

      <nav className="navbar">
        <div className="logo">Your Logo</div>
        <ul>
          <li><a href="#" >Home</a></li>
          <li><a href="#" >Tab 2</a></li>
        </ul>
      </nav>

      <div className="content" id="content">
        <h1>Welcome to Our Website</h1>
        <p>This is a sample text. You can add any content here.</p>
      </div>

      <div className="footer" id="footer">
        <div className="wrapper">
          <Section id='section1' prevSectionId='#section3' nextSectionId='#section2' photos={Photos.section1} />
          <Section id='section2' prevSectionId='#section1' nextSectionId='#section3' photos={Photos.section2} />
          <Section id='section3' prevSectionId='#section2' nextSectionId='#section1' photos={Photos.section3} />
        </div>
      </div >
    </>
  )
}

export default App;
