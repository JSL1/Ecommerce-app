import React, { useState, useEffect } from "react";

const CheckoutForms = () => {
    const [sameAsBilling, setSameAsBilling] = useState(false);
    const [billingFormTouched, setBillingFormTouched] = useState(false);
    const [billingFormValues, setBillingFormValues] = useState({
        fullName: '',
        email: '',
        address1: '',
        city: '',
        zippostal: '',
        stateprovince: '',
        country: '',
    });

    const [shippingFormValues, setShippingFormValues] = useState({
        fullName: '',
        email: '',
        address1: '',
        city: '',
        zippostal: '',
        stateprovince: '',
        country: '',
    });
    
    const handleChangeB = (event) => {
        setBillingFormTouched(true);
        setBillingFormValues({
            ...billingFormValues,
            [event.target.name]: event.target.value,
        });
    }

    const handleChangeS = (event) => {
        setShippingFormValues({
            ...shippingFormValues,
            [event.target.name]: event.target.value,
        });
    }
    
    
    const fillShippingForm = () => {
        setShippingFormValues({
            ...billingFormValues
        });
    }

    useEffect(() => {
        if (sameAsBilling) {
            fillShippingForm();
        }
    }, [sameAsBilling, fillShippingForm])

    return (
        <section id="checkout-forms">
            <h2><span className="material-symbols-outlined">receipt_long</span>Billing Address</h2>
            <form id="checkout-billing">
                
                <label htmlFor="fullname"><span className="material-symbols-outlined">person</span>Full Name:</label>
                <input type="text" name="fullname" id="fullname" minLength={2}  required />
                <label htmlFor="email"><span className="material-symbols-outlined">mail</span>Email Address</label>
                <input type="email" name="email" id="email" required />
                <label htmlFor="address"><span className="material-symbols-outlined">home</span>Address line 1</label>
                <input type="text" id="address1" name="address" required />
                <label htmlFor="city"><span className="material-symbols-outlined">location_city</span>City/Town</label>
                <input type="text" name="city" id="city" required minLength={2} />
                <div>
                    <div>
                    <label htmlFor="zippostal"><span className="material-symbols-outlined">local_post_office</span>Zip/Postal Code</label>
                    <input type="text" name="zippostal" id="zippostal" minLength={5} maxLength={7} required/>
                    </div>
                    <div>
                    <label htmlFor="stateprovince"><span className="material-symbols-outlined">flag</span>State/Province</label>
                    <input type="text" name="stateprovince" id="stateProvince" minLength={2} maxLength={3} required/>
                    </div>
                </div>
                <label htmlFor="country"><span className="material-symbols-outlined">globe</span>Country</label>
                <input type="text" name="country" id="country" minLength={3} required />
                <div id="payment">
    
                    <div id="payment-paypal">

                    </div>
                    <div id="payment-mastercard">

                    </div>
                </div>
            </form>
            <h2><span className="material-symbols-outlined">local_shipping</span>Shipping Address</h2>
            <div id="same-address">
               <input name="sameAsBilling" type="checkbox" value={false} onChange={() => setSameAsBilling(!sameAsBilling)} />
               <label htmlFor="sameAsBilling">Shipping address same as billing</label>
               <br /><br />
            </div>
            {!sameAsBilling && (
                <form id="checkout-shipping">
                <label htmlFor="fullname"><span className="material-symbols-outlined">person</span>Full Name:</label>
                    <input type="text" name="fullname" id="fullname" minLength={2}  required />
                    <label htmlFor="email"><span className="material-symbols-outlined">mail</span></label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="address"><span className="material-symbols-outlined">home</span>Address line 1</label>
                    <input type="text" id="address1" name="address" required />
                    <label htmlFor="city"><span className="material-symbols-outlined">location_city</span>City/Town</label>
                    <input type="text" name="city" id="city" required minLength={2} />
                    <div>
                        <div>
                        <label htmlFor="zippostal"><span className="material-symbols-outlined">local_post_office</span>Zip/Postal Code</label>
                        <input type="text" name="zippostal" id="zippostal" minLength={5} maxLength={7} required/>
                        </div>
                        <div>
                        <label htmlFor="stateprovince"><span className="material-symbols-outlined">flag</span>State/Province</label>
                        <input type="text" name="stateprovince" id="stateProvince" minLength={2} maxLength={3} required/>
                        </div>
                    </div>
                    <label htmlFor="country"><span className="material-symbols-outlined">globe</span>Country</label>
                    <input type="text" name="country" id="country" minLength={3} required />
                    <button type="submit" id="submit-checkout">Place order</button>
                </form>
            )}
        </section>
    );
}

export default CheckoutForms;