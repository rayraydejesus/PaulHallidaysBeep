import { Message } from '../../models/message/message';
import { USER_LIST } from '../users/users';

const userList = USER_LIST;
const messageList: Message[] = [];


//looped declaration
userList.forEach((user) => {
	messageList.push({user: user, date: new Date(), lastMessage: 'Hello' })
});

//traditional declaration
/*const messageList: Message[]=[
	{ user: userList[0], date: new Date() },
	{ user: userList[1], date: new Date() },
	{ user: userList[2], date: new Date() },
	{ user: userList[3], date: new Date() },
];*/

export const MESSAGE_LIST = messageList;

