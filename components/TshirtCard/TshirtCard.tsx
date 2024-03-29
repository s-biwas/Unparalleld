import { FC } from "react";
import { Tshirt } from "@/models/tshirt";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  tshirt: Tshirt;
};

const TshirtCard: FC<Props> = (props) => {
  const {
    tshirt: { coverImage, name, size, slug, isBooked },
  } = props;

  return (
    <div className="rounded-sm w-72 mb-10 mx-auto md:mx-0 overflow-hidden shadow-sm ">
      <div className="h-80 overflow-hidden">
        <Link href={`/tshirts/${slug.current}`}>
          <Image
            src={coverImage.url}
            alt={name}
            width={900}
            height={900}
            className="img"
            priority
          />
        </Link>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-xl font-semibold">
          <p className="text-gray-800">{name}</p>
        </div>
        <p className="text-xs text-gray-500">Size: {size}</p>
        <Link href={`/tshirts/${slug.current}`}>
          <Button
            className={`mt-4 ${
              isBooked ? " cursor-not-allowed" : " md:w-full"
            }`}
            disabled={isBooked}
          >
            {isBooked ? "Booked" : "Buy Now"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TshirtCard;
