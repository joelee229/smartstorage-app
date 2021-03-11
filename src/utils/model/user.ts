import List from './list';

interface User {
	id: string;
	name: string;
	email: string;
	lists: List[];
};

export default User;