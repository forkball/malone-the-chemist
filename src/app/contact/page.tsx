"use client"

import { useState } from "react";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {target} = e;
    setForm({...form,[target.name]: target.value})
  }

  return (
    <main className="flex min-h-screen flex-col items-center w-full gap-4 bg-primary">
      <div className="content w-full flex space-between mt-24 items-center mb-8 px-4">
        <div className="mr-auto">
          <h1 className="flex flex-col text-8xl font-bebas">
            LET&apos;S GET TOGETHER
          </h1>
          <h2 className="text-4xl flex flex-col mb-4 font-bebas">
            I&apos;M ALWAYS INTERESTED IN WORKING WITH OTHER ARTISTS
          </h2>
        </div>
      </div>
      <div className="content flex flex-col items-start w-full gap-4 px-4">
        <div className="flex gap-4 w-full">
          <Input label={"Name"} value={form.name} onChange={handleChange} placeholder="Malone"/>
          <Input label={"Email"} value={form.email} onChange={handleChange} placeholder="malonethechemist@gmail.com"/>
        </div>
        <Input
          label={"Message"}
          value={form.message}
          onChange={handleChange}
          className="mb-8 w-full"
          placeholder="Let's make some sH*t"
        />
        <Button label="SEND A MESSAGE" />
      </div>
    </main>
  );
}
