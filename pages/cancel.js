import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { useStateContext } from '../context/StateContext';

const Cancel = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    }, []);

    return (
        <div className='cancel-wrapper'>
            <div className='cancel'>
                <h2>Forgot to add something to your cart? Shop around then come back to pay!</h2>
                <Link href="/">
                    <button type="button" width="300px" className='btn'>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Cancel