import React, { useRef, useState, useEffect } from 'react';
import {
    ArrowLeftOutlined,
    EllipsisOutlined,
    CheckOutlined,
} from '@ant-design/icons';
import { message } from 'antd';
import useEventListener from '../../../../shared/utils/use-event-listener';
import Modal from '../../../../shared/commons/Modals/Modal';
import { THEME_MESSAGE, THEME_ACTIVE } from '../constant';

function MessageControlTop(props) {
    const actionRef = useRef(null);
    const themeMessageModalRef = useRef(null);

    const [showActionMore, setShowActionMore] = useState(false);
    const [themeActive, setThemeActive] = useState(THEME_ACTIVE.DEFAULT);
    const [themeMessage, setThemeMessage] = useState(THEME_MESSAGE.DEFAULT.RIGHT);

    useEffect(() => {
        if (themeActive) {
            switch (themeActive) {
                case THEME_ACTIVE.DEFAULT:
                    setThemeMessage(THEME_MESSAGE.DEFAULT.RIGHT);
                    break;
                case THEME_ACTIVE.THEME_1:
                    setThemeMessage(THEME_MESSAGE.THEME_1.RIGHT);
                    break;
                case THEME_ACTIVE.THEME_2:
                    setThemeMessage(THEME_MESSAGE.THEME_2.RIGHT);
                    break;
                case THEME_ACTIVE.THEME_3:
                    setThemeMessage(THEME_MESSAGE.THEME_3.RIGHT);
                    break;
                case THEME_ACTIVE.THEME_4:
                    setThemeMessage(THEME_MESSAGE.THEME_4.RIGHT);
                    break;
                case THEME_ACTIVE.THEME_5:
                    setThemeMessage(THEME_MESSAGE.THEME_5.RIGHT);
                    break;
                default:
                    break;
            }
        }        
    }, [themeActive]);

    const handleChangeThemeActive = (themeId: number) => {
        setThemeActive(themeId);
        message.success('Thay đổi chủ đề thành công!');
    }

    const onOpenModalThemeUI = () => {
        themeMessageModalRef.current.openModal();
    }
    
    const handleShowActionMore = (event) => {
        if (actionRef && actionRef.current && !actionRef.current.contains(event.target)) {
            setShowActionMore(false);
        }
    }
    
    useEventListener('mousedown', handleShowActionMore);

    return (
        <div className="message-header-detail">
            <div className="message-header-action float-left">
                <ArrowLeftOutlined size={20} />
            </div>
            <div className="message-header-title">
                <span>Cờ Hó</span>
            </div>
            <div className="message-header-action more-action float-right" onClick={() => setShowActionMore(true)}>
                <EllipsisOutlined size={20} />
                <ul className="menu-action-dropdown" style={{ display: showActionMore ? 'block':'none' }} 
                    ref={actionRef}
                >
                    <li onClick={onOpenModalThemeUI}>Giao diện</li>
                    <li>Chung</li>
                    <li>Thông báo</li>
                </ul>
            </div>

            <Modal ref={themeMessageModalRef} allowCloseBackdrop={true} allowCloseEscKey={true}>
                <div className='wrap-theme-setup'>
                    <div className='wrap-theme-preview'>
                        <div className='theme-title'>XEM TRƯỚC</div>
                        <div className={'preview-message'}>
                            <div className={'preview-message-left'}>
                                <div className={'preview-theme-text'}
                                    style={{ background: THEME_MESSAGE.DEFAULT.LEFT }}
                                >
                                    <span>Wow! Chủ đề tuyệt đẹp!</span>
                                </div>
                                <div className={'preview-theme-text'}
                                    style={{ background: THEME_MESSAGE.DEFAULT.LEFT }}
                                >
                                    <span>Chào các bạn!</span>
                                </div>
                            </div>
                            <div className={'preview-message-right'}
                                style={{ background: themeMessage }}
                            >
                                <span>Đây là màu yêu thích của tôi!</span>
                            </div>
                        </div>
                        <div className="wrap-theme-color">
                            <div className="theme-title">MÀU</div>
                            <div className={'theme-color-preview'}>
                                <div className={`theme-style-1 dot`} onClick={() => handleChangeThemeActive(THEME_ACTIVE.DEFAULT)}>
                                    {themeActive === THEME_ACTIVE.DEFAULT && (<CheckOutlined/>)}
                                </div>
                                <div className={`theme-style-2 dot`} onClick={() => handleChangeThemeActive(THEME_ACTIVE.THEME_1)}>
                                    {themeActive === THEME_ACTIVE.THEME_1 && (<CheckOutlined/>)}
                                </div>
                                <div className={`theme-style-3 dot`} onClick={() => handleChangeThemeActive(THEME_ACTIVE.THEME_2)}>
                                    {themeActive === THEME_ACTIVE.THEME_2 && (<CheckOutlined/>)}
                                </div>
                                <div className={`theme-style-4 dot`} onClick={() => handleChangeThemeActive(THEME_ACTIVE.THEME_3)}>
                                    {themeActive === THEME_ACTIVE.THEME_3 && (<CheckOutlined/>)}
                                </div>
                                <div className={`theme-style-5 dot`} onClick={() => handleChangeThemeActive(THEME_ACTIVE.THEME_4)}>
                                    {themeActive === THEME_ACTIVE.THEME_4 && (<CheckOutlined/>)}
                                </div>
                                <div className={`theme-style-6 dot`} onClick={() => handleChangeThemeActive(THEME_ACTIVE.THEME_5)}>
                                    {themeActive === THEME_ACTIVE.THEME_5 && (<CheckOutlined/>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default MessageControlTop;