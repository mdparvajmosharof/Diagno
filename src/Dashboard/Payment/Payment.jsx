import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);
const Payment = ({price , test, refetch}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} test={test} refetch={refetch}></CheckoutForm>
            </Elements>
        </div>
    )
}

export default Payment
