"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { addMailerliteContact } from "@/lib/utils";
export default function LeadForm() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit", "clicked");
    const formData = new FormData(e.target);
    console.log(formData);
    addMailerliteContact(formData);
  };

  return (
    <section
      className=" py-12 bg-sky-900 flex flex-col items-center justify-center"
      id="contactBlock"
    >
      <div className="bg-white py-8 px-12 rounded-lg">
        <div className="py-8 mx-auto text-center">
          <h2>Get Started and Contact Us</h2>
          <p>Simply fill in the form and we&apos;ll be in touch</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-[720px] w-full mx-auto"
          id="contactForm"
        >
          <div>
            <label className="text-base font-medium">First name</label>
            <Input name="name" type="text" />
          </div>
          <div>
            <label className="text-base font-medium">Email</label>
            <Input type="email" name="email" />
          </div>
          <div>
            <label className="text-base font-medium">Phone</label>
            <Input type="phone" name="phone" />
          </div>
          <div>
            <label className="text-base font-medium">
              Let us know anything
            </label>
            <Textarea name="info" />
          </div>
          <div className="py-4 mx-auto">
            <Button variant="default" size="lg" type="submit">
              Contact Us
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
