import pictures from '../../data/pictures';

export default function Gallery() {
    return (
        <div className="gallery-container">
            <span className="section-title">gallerie</span>
            <div className="gallery">
                <div className="picture picture-1">
                    <img src={pictures[3]} alt="pic-1"/>
                </div>
                <div className="picture picture-2">
                    <img src={pictures[0]} alt="pic-2"/>
                </div>
                <div className="picture picture-3">
                    <img src={pictures[2]} alt="pic-3"/>
                </div>
            </div>
            <div className="gallery">
                <div className="picture picture-4">
                    <img src={pictures[1]} alt="pic-4"/>
                </div>
                <div className="picture picture-5">
                    <img src={pictures[5]} alt="pic-5"/>
                </div>
            </div>
            <div className="gallery">
                <div className="picture picture-6">
                    <img src={pictures[4]} alt="pic-6"/>
                </div>
                <div className="picture picture-7">
                    <img src={pictures[8]} alt="pic-7"/>
                </div>
                <div className="picture picture-8">
                    <img src={pictures[6]} alt="pic-8"/>
                </div>
            </div>
            <div className="gallery">
                <div className="picture picture-9">
                    <img src={pictures[7]} alt="pic-9"/>
                </div>
                <div className="picture picture-10">
                    <img src={pictures[11]} alt="pic-10"/>
                </div>
                <div className="picture picture-11">
                    <img src={pictures[9]} alt="pic-11"/>
                </div>
            </div>
            <div className="gallery">
                <div className="picture picture-12">
                    <img src={pictures[12]} alt="pic-12"/>
                </div>
                <div className="picture picture-13">
                    <img src={pictures[10]} alt="pic-13"/>
                </div>
            </div>
        </div>
    );
}
