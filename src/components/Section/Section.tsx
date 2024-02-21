import './Section.css';

interface Props {
    id: string;
    prevSectionId: string;
    nextSectionId: string;
    photos: string[];

}

const Section = ({ id, prevSectionId, nextSectionId, photos }: Props) => {
    return (
        <section id={id}>
            <a href={prevSectionId} className="arrow__btn left-arrow">‹</a>

            {
                photos.map((photo, index) =>
                    <div className="item">
                        <img key={index} src={photo} />
                    </div>
                )
            }
            <a href={nextSectionId} className="arrow__btn right-arrow">›</a>
        </section>
    );
}

export default Section;