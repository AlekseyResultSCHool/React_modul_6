import { useState } from 'react';

export const useRequestUpdatingTodo = (value, id) => {

    const [isUpdating, setIsUpdating] = useState(false);

    const requesUpdateTodo = () => {
		setIsUpdating(true);
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('список обновлен:', response);
			})
			.finally(() => setIsUpdating(false));
	};

    return {
		isUpdating,
		requesUpdateTodo,		
	};
}