import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from './ArrowUp.module.scss';

const ArrowUp = () => {
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            {scrollTop ? (
                <button className={styles.ArrowUp} onClick={scrollUp}>
                    <Image src='/scrollUp.svg' alt='up' width={40} height={45} />
                </button>
            ) : null}
        </>
    );
};

export default ArrowUp;
