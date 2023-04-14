import React from "react";
import Heading from "./ui/Heading";
import { Button, TextField } from "@mui/material";

export default function Contact({ contactData }) {
  return (
    <div>
      <div className="text-center">
        <Heading>{contactData}</Heading>
      </div>
      <div className="lg:w-2/5 md:w-1/2 w-full px-4 mx-auto flex flex-col gap-y-6">
        <div className="grid gap-6 grid-cols-2">
          <TextField
            className="cols-span-1"
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
          />
          <TextField
            className="cols-span-1"
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
          />
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Subject"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
        />
        <button className="py-4 px-6 bg-primary w-full text-white rounded-md">
          Send Message
        </button>
      </div>
    </div>
  );
}
