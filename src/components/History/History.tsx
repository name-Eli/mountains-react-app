import './History.css'
import Section from '../Section/Section.tsx';
import NavBar from '../NavBar/NavBar.tsx';
import photos from '../Data/carouselPhoto.ts'

function History() {
    return (
        <>
            <div className="background historyBackground"></div>

            <NavBar />

            <div className="content historyContent">
                <h1 className='title'>History</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
            </div>

            <div className="footer">
                <div className="wrapper">
                    <Section id='section1' prevSectionId='#section3' nextSectionId='#section2' photos={photos.filter(photo => photo.section === 1)} />
                    <Section id='section2' prevSectionId='#section1' nextSectionId='#section3' photos={photos.filter(photo => photo.section === 2)} />
                    <Section id='section3' prevSectionId='#section2' nextSectionId='#section1' photos={photos.filter(photo => photo.section === 3)} />
                </div>
            </div >
        </>
    )
}

export default History;