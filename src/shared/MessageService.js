import React from 'react'
import { BehaviorSubject, Subject } from 'rxjs'

const subject = new Subject();
const behaviorSubject = new BehaviorSubject()

export const MessageService = {
    sendMessage: message => behaviorSubject.next({ data: message }),
    clearMessages: () => behaviorSubject.next(),
    getMessage: () => behaviorSubject.asObservable()

};

export default MessageService;
