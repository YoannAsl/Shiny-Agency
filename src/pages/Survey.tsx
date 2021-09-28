import { useParams } from 'react-router';

interface ParamTypes {
    questionNumber: string;
}

const Survey = () => {
    const { questionNumber } = useParams<ParamTypes>();
    return <div>Survey {questionNumber}</div>;
};

export default Survey;
