import { CarouselPhoto } from '../History/History';
import './Section.css';

interface Props {
    id: string;
    prevSectionId: string;
    nextSectionId: string;
    photos: CarouselPhoto[];

}

const Section = ({ id, prevSectionId, nextSectionId, photos }: Props) => {
    return (
        <section id={id}>
            <a href={prevSectionId} className="arrow__btn left-arrow">‹</a>

            {
                photos.map(photo =>
                    <div className="item">
                        <img key={photo.id} src={photo.url} />
                    </div>
                )
            }
            <a href={nextSectionId} className="arrow__btn right-arrow">›</a>
        </section>
    );
}

export default Section;