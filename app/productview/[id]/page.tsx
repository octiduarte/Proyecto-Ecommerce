import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React from "react";

export default function Page() {
  return (
    <section className="py-12 md:py-10">
      <div className="grid gap-8 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl mx-auto">
          <div className="grid gap-4 md:gap-10 items-start">
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={600}
                height={600}
                className="object-cover border w-full rounded-lg overflow-hidden"
              />
            </div>
          </div>
          <div className="grid gap-4 md:gap-10 items-start">
            <div className="hidden md:flex items-start">
              <div className="grid gap-4">
                <h1 className="font-bold text-3xl lg:text-4xl">
                  Acme Circles T-Shirt
                </h1>
                <div>
                  <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
                </div>
                <div className="text-4xl font-bold ">$99</div>
              </div>
            </div>
            <form className="grid gap-4 md:gap-4">
              <div className="grid gap-2">
                <Label htmlFor="color" className="text-base">
                  Color
                </Label>
                <RadioGroup
                  id="color"
                  defaultValue="black"
                  className="flex items-center gap-2"
                >
                  <Label
                    htmlFor="color-black"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="color-black" value="black" />
                    Black
                  </Label>
                  <Label
                    htmlFor="color-white"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="color-white" value="white" />
                    White
                  </Label>
                  <Label
                    htmlFor="color-blue"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="color-blue" value="blue" />
                    Blue
                  </Label>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="size" className="text-base">
                  Size
                </Label>
                <RadioGroup
                  id="size"
                  defaultValue="m"
                  className="flex items-center gap-2"
                >
                  <Label
                    htmlFor="size-xs"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="size-xs" value="xs" />
                    XS
                  </Label>
                  <Label
                    htmlFor="size-s"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="size-s" value="s" />S
                  </Label>
                  <Label
                    htmlFor="size-m"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="size-m" value="m" />M
                  </Label>
                  <Label
                    htmlFor="size-l"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="size-l" value="l" />L
                  </Label>
                  <Label
                    htmlFor="size-xl"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="size-xl" value="xl" />
                    XL
                  </Label>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quantity" className="text-base">
                  Quantity
                </Label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Button size="lg">Agregar a carrito</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
