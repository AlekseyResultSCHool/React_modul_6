import { useState } from 'react';

export const useRequestDeleteTodo = (id) => {

    const [isDeleting, setIsDeleting] = useState(false);

    const requesDeleteTodo = () => {
		setIsDeleting(true);
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('дело удалено:', response);
			})
			.finally(() => setIsDeleting(false));
	};
    return {
		isDeleting,
		requesDeleteTodo,
	};
}