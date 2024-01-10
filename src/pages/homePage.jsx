import React from 'react';
import { Link } from 'react-router-dom';
import styles from './homePage.module.css';
import { useState } from 'react';
import { useRequestAddTodo } from '../hooks/use-Add-Todo';
import { useRequestGetTodo } from '../hooks/use-Get-Todo';
import { useSearchTodos } from '../hooks/use-search-Todos';

export const Home = () => {
	let inputTextValue = React.createRef();
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [searchTodos, setSearchTodos] = useState('');
	const [inputValue, setInputValue] = useState('');
  	
	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
	const { isLoading, todos, clickSortTodo, sortTodos } = useRequestGetTodo(refreshTodosFlag, refreshTodos);
	const { isCreating, requestAddTodo } = useRequestAddTodo(refreshTodos, inputValue);
	const { filterredTodos } = useSearchTodos(todos, searchTodos);

	const clickTodo = ({ target }) => {
		inputTextValue.current.value = target.text;
		setInputValue(inputTextValue.current.value);
	};

	return (
		<>
			<div className={styles.container}>
			<h1 className={styles.header}>Список важных дел</h1>
			<input
				type="text"
				placeholder="Поиск....."
				className={styles.Input}
				onChange={(event) => setSearchTodos(event.target.value)}/>
			{isLoading ? (
				<div className={styles.loader}></div>
				) : (
					filterredTodos.map(({ id, title }) => (
						<li key={id}>
							<Link to={`/task/${id}`}
							 onClick={clickTodo}
							//   data={(id) => setDataTodo()}
							  >
								{title}
							</Link>
						</li>
					))
				)}
				<input type="text" 
					className={styles.Input} 
					ref={inputTextValue} 
					onChange={(event) => setInputValue(event.target.value)}
					/>
				<button disabled={isCreating} onClick={requestAddTodo}>
					Добавить дело
				</button>
				
				<button
					onClick={clickSortTodo}
					className={!sortTodos ? styles.buttom : styles.buttomSort}
				>
					Сортировка А-Я
				</button>
		</div>
		</>
	);
};
