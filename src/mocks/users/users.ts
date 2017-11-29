import { User } from '../../models/user/user';

const userList: User[]=[
	{
		firstName: 'Bob', lastName: 'Guy',
		email: 'bguy@mail.com', avatar: 'assets/imgs/avatar.png',
	},
	{
		firstName: 'Rob', lastName: 'Why',
		email: 'rwhy@mail.com', avatar: 'assets/imgs/avatar.png',
	},
	{
		firstName: 'Doug', lastName: 'Chambers',
		email: 'dchambers@mail.com', avatar: 'assets/imgs/avatar.png',
	},
	{
		firstName: 'Harry', lastName: 'Willis',
		email: 'hwillis@mail.com', avatar: 'assets/imgs/avatar.png',
	},
];

export const USER_LIST = userList;