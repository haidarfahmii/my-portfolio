// features/contact/hooks/useFormContact.tsx
"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosInstance } from "@/utils/axios-instance";
import { isAxiosError } from "axios";

const getValidationSchema = (variant: "modal" | "section") =>
  Yup.object({
    name: Yup.string().required("Nama wajib diisi"),
    email: Yup.string()
      .email("Format email tidak valid")
      .required("Email wajib diisi"),
    subject:
      variant === "section"
        ? Yup.string().required("Subjek wajib diisi")
        : Yup.string(), // Tidak wajib jika di modal
    message: Yup.string().required("Pesan wajib diisi"),
  });

// Tipe props untuk hook
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
    validationSchema: getValidationSchema(variant),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setStatus("idle");
      setFeedback("");

      // Buat payload
      const client = {
        name: values.name,
        email: values.email,
        message: values.message,
        ...(variant === "section" && { subject: values.subject }),
      };

      try {
        await axiosInstance.post("/api/auth/contact", client);

        // Sukses
        setStatus("success");
        setFeedback("Pesan terkirim! Saya akan segera menghubungi Anda.");
        resetForm();
        if (onFormSubmit) {
          onFormSubmit();
        }
      } catch (error) {
        // Error
        setStatus("error");
        if (isAxiosError(error) && error.response) {
          setFeedback(
            error.response.data.message || "Terjadi kesalahan. Coba Lagi"
          );
        } else {
          setFeedback("Tidak bisa terhubung ke server. Coba lagi nanti...");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return { formik, status, feedback };
}
