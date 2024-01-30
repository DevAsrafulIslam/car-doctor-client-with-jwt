import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log("ServiceCard", service);

  // Use optional chaining to handle potential undefined properties
  const { _id, img, title, price } = service || {};

  return (
    <div className="mx-auto px-4 py-4 border rounded-lg overflow-hidden text-center">
      <figure className="">
        {/* Check if img property exists before trying to display the image */}
        {img && <img src={img} alt={title} className="rounded-xl" />}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title || "Service Title"}!</h2>
        <div className="flex">
          <p className="text-start text-[18px] text-[#FF3811]">
            Price: ${price || 0}
          </p>
          <Link to={`/book/${_id}`}>
            <button className="btn btn-outline text-[#FF3811] border-[#FF3811] mr-5">
              Book Now
            </button>
          </Link>
        </div>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
