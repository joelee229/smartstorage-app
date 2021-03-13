import Item from './item';

interface List {
	_id: string;
	id_user: string;
	title: string;
	color: string[];
	colorType: string;
	items: Item[];
};

export default List;