import './Card.css';

const Card = ({name,learningClass,slogan}) => {

    return  <div className="card">
                <div className="name">Toi ten la: {name}</div>
                <div className="learningClass">Hoc lop: {learningClass}</div>
                <div className="slogan">{slogan}</div>
            </div>
}

export default Card;