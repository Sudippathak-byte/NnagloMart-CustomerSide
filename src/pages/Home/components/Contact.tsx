const Contact = () => {
  return (
    <div className="flex flex-col pt-28  md:flex md:flex-row md:justify-between   sm:px-6 min-h-[60vh] lg:px-8 pb-4  w-[90%] mx-auto">
      <div className="w-full md:max-w-[50%]">
        <h2 className="text-3xl text-center font-extrabold underline text-[#dc3545]">
          Contact Us
        </h2>
        <p className="mt-4 text-gray-700 text-lg">GET IN TOUCH WITH US</p>
        <p className="mt-2 text-gray-600  tracking-wide text-justify">
        At Nanglo Mart, we strive to provide an exceptional shopping experience for every customer. Whether you're looking for assistance with your order, need more information about a product, or have any feedback to share, our dedicated customer support team is always ready to assist you. Your satisfaction is our priority, and we're here to make your shopping journey smooth and enjoyable.
        </p>
      </div>
      <div className="flex flex-start flex-col pb-8">
        <div className="mt-8  ">
          <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
          <p className="text-gray-600"> Kathmandu, Nepal</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">Phone Number</h3>
          <p className="text-gray-600">(+977) 9849657337</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">Email Address</h3>
          <p className="text-gray-600">support@NangloMart</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
