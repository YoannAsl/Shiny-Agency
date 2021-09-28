import { useParams, Link } from 'react-router-dom';

interface ParamTypes {
    questionNumber: string;
}

const Survey = () => {
    const { questionNumber } = useParams<ParamTypes>();
    return (
        <div>
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
            Survey {questionNumber}
        </div>
    );
};

export default Survey;
