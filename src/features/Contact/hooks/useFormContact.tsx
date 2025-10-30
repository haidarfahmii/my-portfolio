"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { axiosInstance } from "@/services/axios-instance";
import { isAxiosError } from "axios";
import { contactValidationSchema } from "@/features/Contact/schema/contactValidationSchema";

// props untuk hook
interface UseFormContactProps {
  variant?: "modal" | "section";
  onFormSubmit?: () => void;
}

export default function useFormContact({
  variant = "section",
  onFormSubmit,
}: UseFormContactProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactValidationSchema(variant),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setStatus("idle");
      setFeedback("");

      const client = {
        name: values.name,
        email: values.email,
        message: values.message,
        ...(variant === "section" && { subject: values.subject }),
      };

      try {
        await axiosInstance.post("/api/contact", client);

        // sukses
        setStatus("success");
        setFeedback("Message sent! I'll reply as soon as possible.");
        resetForm();
        if (onFormSubmit) {
          onFormSubmit();
        }
      } catch (error) {
        // error
        setStatus("error");
        if (isAxiosError(error) && error.response) {
          setFeedback(
            error.response.data.message ||
              "An error occurred. Please try again."
          );
        } else {
          setFeedback("Couldn't connect to server. Please try again.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return { formik, status, feedback };
}
