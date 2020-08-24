import React from 'react'
import {expression} from "@babel/template";

interface IProps {
    likeBy?: number
}

interface IState {
    like: number
}

class CatDescription extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        likeBy: 1
    };

    public state: IState = {
        like: 0
    };

    public increase = () => {
        const likeBy: number = this.props.likeBy!;
        const like = this.state.like + likeBy;
        this.setState({ like })
    };

    render(): React.ReactNode {
        return (
            <div>
                <p>Hello...this is like cat</p>
                <button onClick={this.increase}>Likes: {this.state.like}</button>
            </div>
        )
    }
}

export default CatDescription;