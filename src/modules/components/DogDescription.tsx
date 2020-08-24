import React, {useState, useEffect} from 'react'

interface IProps {
    likeBy?: number
}

const DogDescription: React.FC<IProps> = (props: IProps) => {

    const [like, setLike] = useState(0);

    const increase = () => {
        const likeBy: number = props.likeBy!;
        setLike(like + likeBy);
    };

    return (
        <div>
            <p>Hello...This is like dog</p>
            <button onClick={increase}>Likes: {like}</button>
        </div>
    );
};

export default DogDescription;