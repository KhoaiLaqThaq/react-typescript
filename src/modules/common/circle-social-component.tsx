import React from 'react'
import {
    ShareAltOutlined,
    MessageOutlined,
    DingtalkOutlined,
    PlusOutlined
} from '@ant-design/icons'
import {Link} from 'react-router-dom';

export const CircleSocialComponent = () => {
    return (
        <div className="circle-wrapper">
            <div id="circle">
                <ShareAltOutlined />
            </div>
            <div id="sub">
                <div id="circle">
                    <span>
                        <Link to='/messages'>
                            <MessageOutlined className='icon1' />
                        </Link>
                    </span>
                </div>
                <div id="circle">
                    <span>
                        <Link to='/game/sudoku'>
                            <DingtalkOutlined className='icon1' />
                        </Link>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default CircleSocialComponent;