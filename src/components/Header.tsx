import styles from './Header.module.css'

import toDoLogo from '../assets/to-do-list.svg'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt="To-do logo" />
            <p className='cond-bold-upper'>To-Do List</p>
        </header>
    )
}