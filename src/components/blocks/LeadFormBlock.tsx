"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { addMailerliteContact } from "@/lib/utils";

const handleSubmit = (e: any) => {
  e.preventDefault();
  console.log("submit", "clicked");
  const formData = new FormData(e.target);
  console.log(formData);
  addMailerliteContact(formData);
};
export default function LeadFormBlock() {
  return (
    <div className="py-8 px-12 rounded-lg">
      <div className="py-8 mx-auto text-center">
        <h2>Contact Us</h2>
        <p>Simply fill in the form and we&apos;ll be in touch</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[720px] w-full mx-auto"
        id="contactForm"
      >
        <div>
          <label className="text-base font-medium">First name</label>
          <Input name="name" type="text" className="bg-white" />
        </div>
        <div>
          <label className="text-base font-medium">Email</label>
          <Input type="email" name="email" className="bg-white" />
        </div>
        <div>
          <label className="text-base font-medium">Phone</label>
          <Input type="phone" name="phone" className="bg-white" />
        </div>
        <div>
          <label className="text-base font-medium">Let us know anything</label>
          <Textarea name="info" className="bg-white" />
        </div>
        <div className="py-4 mx-auto relative">
          <Button variant="default" size="lg" type="submit">
            Contact Us
          </Button>
          <Image
            src={"/logos/ndis.svg"}
            width={32}
            height={32}
            alt="ndis-logo"
            className="absolute top-1/2 right-[-40%] -translate-y-[50%]"
          />
        </div>
      </form>
    </div>
  );
}
