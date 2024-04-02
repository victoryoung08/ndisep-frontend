import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
export default function LeadForm() {
  return (
    <section className="section-padding">
      <div className="py-8">
        <h2>Get Started and Contact Us</h2>
        <p>Simply fill in the form and we'll be in touch</p>
      </div>
      <form action="" className="flex flex-col gap-4">
        <div>
          <label className="text-base font-medium">First name</label>
          <Input />
        </div>
        <div>
          <label className="text-base font-medium">Email</label>
          <Input type="email" />
        </div>
        <div>
          <label className="text-base font-medium">Phone</label>
          <Input type="phone" />
        </div>
        <div>
          <label className="text-base font-medium">Let us know anything</label>
          <Textarea />
        </div>
      </form>
      <div className="py-4">
        <Button>Contact Us</Button>
      </div>
    </section>
  );
}
