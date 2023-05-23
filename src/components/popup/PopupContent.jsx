import styles from './PopupContent.module.css';

const PopupContent = ({ items, itemsIndex }) => {
    console.log(itemsIndex);
    return (
        <>
            {/* <h2>{}</h2>
            <div className={styles.popup_content}>
                <section className={styles.table}>
                    <label>Наименование:</label>
                    <p>{items[itemsIndex].name}</p>
                    <label>Почта:</label>
                    <p>
                        <a href={`mailto:${items[itemsIndex].email}`}>{items[itemsIndex].email}</a>
                    </p>
                    <label>Дата приема:</label>
                    <p>{items[itemsIndex].hire_date}</p>
                    <label>Должность:</label>
                    <p>{items[itemsIndex].position_name}</p>
                    <label>Подразделение:</label>
                    <p>{items[itemsIndex].department}</p>
                </section>
                <label>Дополнительная информация:</label>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quae natus
                    quiullam vero fugiat animi dignissimos neque.
                </p>
            </div> */}
        </>
    );
};

export default PopupContent;
