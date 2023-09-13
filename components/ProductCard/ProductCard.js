"use client";
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
  const { _id, name, image, price } = product;
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        {image.slice(0, 1).map((img) => (
          <div>
            <img
              src={img}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
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
        <Link href={`product-view/${_id}`}>
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
