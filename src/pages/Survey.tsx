import { useParams, Link } from 'react-router-dom';

interface ParamTypes {
    questionNumber: string;
}

const Survey = () => {
    const { questionNumber } = useParams<ParamTypes>();
    return (
        <div>
            <h1>Survey</h1>
            <h2>Question {questionNumber}</h2>
            {+questionNumber === 1 ? null : (
                <Link to={`/survey/${+questionNumber - 1}`}>
                    Previous question
                </Link>
            )}
            {+questionNumber === 10 ? (
                <Link to='/results'>Results</Link>
            ) : (
                <Link to={`/survey/${+questionNumber + 1}`}>Next question</Link>
            )}
        </div>
    );
};

export default Survey;
