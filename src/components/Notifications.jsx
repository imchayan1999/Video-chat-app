import React, {useContext} from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
    const { answerCall, call, callAcepted } = useContext(SocketContext);
    return (
        <>
            {call.isReceivedCall && !callAcepted &&  (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>{call.name} is calling: </h1>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                </div>
            )}
        </>
    )
}

export default Notifications
