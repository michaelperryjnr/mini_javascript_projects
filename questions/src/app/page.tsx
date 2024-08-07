"use client";
import { InputLabel, Input, Button } from "@mui/material";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Form() {
  const [formData, setFormData] = useState({ username: "", question: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === "username" ? value.toLowerCase() : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success === true) {
        toast.success("Question submitted successfully!");
        setFormData({ username: "", question: "" });
      } else {
        toast.error(result.message || "Failed to submit question.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the question.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center w-full px-2">
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#3b5441] justify-center px-5 py-5 rounded rounded-lg"
      >
        <div className="flex flex-col items-start">
          <h1 className="text-[#fdb44b] text-2xl font-bold">
            BBF Labs, Question Bank
          </h1>
          <h2 className="text-[#ffffff] text-xl font-semi bold">
            Submit a Question
          </h2>
          <h3 className="text-lg text-[#ffffff]">
            Share your questions with our community to update our question bank
          </h3>
        </div>
        <div className="grid gap-4 mt-4">
          <div className="grid gap-2">
            <InputLabel htmlFor="username" className="text-[#ffffff] font-bold">
              Username
            </InputLabel>
            <Input
              id="username"
              placeholder="Enter your username"
              className="max-w-lg text-[#ffffff]"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <InputLabel htmlFor="question" className="text-[#ffffff] font-bold">
              Question
            </InputLabel>
            <textarea
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
              id="question"
              placeholder="Enter your question here..."
              value={formData.question}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="mt-5">
          <Button
            type="submit"
            className="bg-[#107a8b] rounded text-[#ffffff] hover:bg-[#2cb978]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}
