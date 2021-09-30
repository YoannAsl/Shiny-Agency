import { useParams, Link } from 'react-router-dom';

interface ParamTypes {
    questionNumber: string;
}

const Survey = () => {
    const { questionNumber } = useParams<ParamTypes>();
    return (
        <main>
            <h1>Question {questionNumber}</h1>
            {+questionNumber === 1 ? null : (
                <Link to={`/survey/${+questionNumber - 1}`}>Précédente</Link>
            )}
            {+questionNumber === 10 ? (
                <Link to='/results'>Résultat</Link>
            ) : (
                <Link to={`/survey/${+questionNumber + 1}`}>Suivante</Link>
            )}
        </main>
    );
};

export default Survey;
