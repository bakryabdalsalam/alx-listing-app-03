// components/booking/BookingForm.tsx
const BookingForm = () => (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              className="border p-2 w-full mt-2"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="border p-2 w-full mt-2"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="border p-2 w-full mt-2"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="text"
              className="border p-2 w-full mt-2"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>
  
        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            id="cardNumber"
            type="text"
            className="border p-2 w-full mt-2"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="expiryDate">Expiration Date</label>
            <input
              id="expiryDate"
              type="text"
              className="border p-2 w-full mt-2"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="text"
              className="border p-2 w-full mt-2"
              placeholder="123"
            />
          </div>
        </div>
  
        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            id="streetAddress"
            type="text"
            className="border p-2 w-full mt-2"
            placeholder="123 Main St"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              className="border p-2 w-full mt-2"
              placeholder="City Name"
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              id="state"
              type="text"
              className="border p-2 w-full mt-2"
              placeholder="State"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="zip">Zip Code</label>
            <input
              id="zip"
              type="text"
              className="border p-2 w-full mt-2"
              placeholder="Zip Code"
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              className="border p-2 w-full mt-2"
              placeholder="Country"
            />
          </div>
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full"
        >
          Confirm &amp; Pay
        </button>
      </form>
    </div>
  );
  
  export default BookingForm;
  