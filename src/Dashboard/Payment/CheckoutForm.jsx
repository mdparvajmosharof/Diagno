import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { useAxiosSecure } from '../../Hooks/useAxiosSecure';
import { useUser } from '../../Hooks/useUser';
import { useNavigate } from 'react-router-dom';



const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("")
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const [user] = useUser();
    const navigate = useNavigate();
    console.log(price)

    useEffect(() => {
        if(price>0){
            axiosSecure.post('/create-payment-intent', { price: price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }
        
      }, [axiosSecure, price]);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card == null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if(error){
            console.log(error)
            setError(error.message)
        }else{
            console.log(paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: price,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }

            }
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className='border-2 p-5 rounded-lg border-emerald-500'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className='text-red-500 text-sm mt-1'>{error}</p>
                <button className='btn btn-outline btn-primary mt-5 w-full' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    )
}

export default CheckoutForm
