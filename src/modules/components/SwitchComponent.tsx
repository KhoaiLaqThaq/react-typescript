import React, {useState} from 'react';

import './../../assets/css/main.css';

interface IProps {
    checked?: boolean
}

const SwitchComponent: React.FC<IProps> = (props: IProps) => {

    const [isChecked, setIsChecked] = useState(props.checked);

    const onChecked = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="wrapper">
            <input type="checkbox" name="checkbox" className="switch" onChange={onChecked} checked={isChecked} />
        </div>
    );
}

SwitchComponent.defaultProps = {
    checked: false
};

export default SwitchComponent;
