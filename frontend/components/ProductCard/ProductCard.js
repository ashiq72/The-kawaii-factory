"use client";
import { getDiscountPricePercentage } from "@/utils/helper";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export function ProductCard({ product }) {
  const { name, price, slug, thumbnail, orginalPrice } = product?.attributes;
  const { id } = product;

  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <div>
          <img
            src={thumbnail?.data?.attributes?.url}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </div>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            <p>{name}</p>
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            &#8377;{price}
            {orginalPrice && (
              <>
                <div className="text-base  font-medium line-through">
                  &#8377;{orginalPrice}
                </div>
                <div className="ml-auto text-base font-medium text-green-500">
                  <p>{getDiscountPricePercentage(orginalPrice, price)} % Off</p>
                </div>
              </>
            )}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={`product-view/${slug}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Quick View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
