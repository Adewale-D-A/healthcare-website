import StarIcon from "@/assets/icons/star";

export default function Ratings({ rating }: { rating: number }) {
  return (
    <div>
      <div className=" flex gap-3">
        {Array.from({ length: 5 }, (_, index) => {
          return (
            <button
              type="button"
              title="rate"
              key={index}
              className="hover:text-[#F3DD16] transition-all cursor-pointer"
            >
              {rating >= index + 1 ? (
                <StarIcon className="w-8 h-8 text-[#F3DD16] " />
              ) : (
                <StarIcon className="w-8 h-8 text-gray-500" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
