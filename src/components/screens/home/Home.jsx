import axios from 'axios';
import { Roboto, Pacifico } from 'next/font/google';
import { FC, useEffect, useState } from 'react';
import styles from './Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ArrowUp from '../../../ui/arrowUp/ArrowUp';
import Popup from '../../popup/Popup';
import PopupContent from '../../popup/PopupContent';

const url = process.env.NEXT_PUBLIC_BASE_URL;
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });
const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [popupActive, setPopupActive] = useState(false);
    const [itemsIndex, setItemsIndex] = useState();
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);
    useEffect(() => {
        let cards = document.querySelectorAll('#cards');
        console.log(cards);
        cards.forEach((card, i) => {
            card.addEventListener('click', () => {
                setItemsIndex(i);
                setPopupActive(true);
            });
        });
    }, [items]);
    return (
        <div className={styles.Home}>
            <h1 className={'pt-6 text-amber-600 text-center text-3xl' + ' ' + pacifico.className}>
                Бургерная 13/14
            </h1>
            <h2 className='text-amber-600 align-middle text-center text-2xl font-bold mt-10'>
                Меню
            </h2>
            {loading ? (
                <div role='status' className='w-100 flex justify-center mt-16'>
                    <svg
                        aria-hidden='true'
                        className='w-16 h-8  text-gray-200 animate-spin dark:text-gray-600 fill-fuchsia-600'
                        viewBox='0 0 100 101'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='currentColor'
                        />
                        <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='currentFill'
                        />
                    </svg>
                    <span className='sr-only'>Loading...</span>
                </div>
            ) : (
                <>
                    <nav className={styles.Home_categories}>
                        <ul>
                            {items.map((item) => (
                                <li key={item.id}>
                                    <div className={styles.Home_categories__links}>
                                        <Link href={`#${item.id}`}>
                                            {' '}
                                            <div className='flex content-center justify-center'>
                                                <Image
                                                    src={item.imgCategory}
                                                    width={200}
                                                    height={200}
                                                    alt={item.altCategory}
                                                />
                                            </div>
                                            <div className='w-80'>{item.id}</div>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {items.map((item) => (
                        <section key={item.id} className='flex flex-col gap-5 pt-9 text-center'>
                            <h1 className='text-4xl font-bold text-amber-700' id={item.id}>
                                {item.id}
                            </h1>
                            <div className='flex flex-col i text-amber-600' id='cards'>
                                {item.items.map((p) => (
                                    <div className='mb-20 flex flex-col items-center' key={p.id}>
                                        <p className='text-3xl text-lime-600 mb-5'>{p.name}</p>
                                        {p.imgSrc && (
                                            <Image
                                                className='rounded-lg '
                                                src={p.imgSrc}
                                                width={200}
                                                height={150}
                                                alt={p.alt}
                                            />
                                        )}
                                        <span className='text-xl'>{p.volume}</span>
                                        <br />
                                        <span className='text-xl text-amber-600'>
                                            {p.price} Рублей
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                    {/* {popupActive && (
                        <Popup active={popupActive} setActive={setPopupActive}>
                            <PopupContent items={items[itemsIndex].items} itemsIndex={itemsIndex} />
                        </Popup>
                    )} */}
                </>
            )}
            <ArrowUp />
            <footer className='text-white p-10 w-100 flex align-middle justify-center'>
                <button className='bg-orange-400 p-3 rounded-xl '>
                    <a className='flex' href='mailto:dmikalash118@gmail.com'>
                        Связь с разработчиком:
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='white'
                            className='bi bi-envelope-at pl-1'
                            viewBox='0 0 16 16'>
                            <path d='M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z' />
                            <path d='M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z' />
                        </svg>
                    </a>
                </button>
            </footer>
        </div>
    );
};

export default Home;
