import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './todosPage.module.css';
import { useEffect, useState } from 'react';
import { useRequestDeleteTodo } from '../hooks/use-Delete-Todo';
import { useRequestUpdatingTodo } from '../hooks/use-Updating-Todo';

export const Todos = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [todo, setTodo] = useState([]);
    const [value, setValue] = useState('');
   
   
    const { isDeleting,	requesDeleteTodo } = useRequestDeleteTodo(id);
    const { isUpdating, requesUpdateTodo } = useRequestUpdatingTodo(value, id);

 useEffect(() => {
    fetch(`http://localhost:3005/todos/${id}`)
        .then((loadedData) => loadedData.json())
        .then((loadedTodos) => {
            if (loadedTodos.title === undefined){
                navigate('/404');
            }
            setTodo(loadedTodos.title);
        })
}, [id]);

    return (
        <>
        <div className={styles.container}>
            <button className={styles.buttonBack}>
            <Link to="/">Назад</Link></button>
            <h1 className={styles.header}>Редактировать важное дело</h1>
            <textarea
				className={styles.title} 
				defaultValue={todo}
                
				onChange={(event) => setValue(event.target.value)}
			/>
            <button className={styles.button} disabled={isUpdating} onClick={() => {requesUpdateTodo();navigate(-1)}} 
            >
					Изменить дело
				</button>
				 <button className={styles.button} disabled={isDeleting} onClick={() => {requesDeleteTodo();navigate(-1)}}>
					Удалить дело
				</button>
        </div>
      
        
        </>
    );
}


