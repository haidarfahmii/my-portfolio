import * as Yup from "yup";

export const contactValidationSchema = (variant: "modal" | "section") =>
  Yup.object({
    name: Yup.string().required("Nama wajib diisi"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject:
      variant === "section"
        ? Yup.string().required("Subject is required")
        : Yup.string(), // Tidak wajib jika di modal
    message: Yup.string().required("Message is required"),
  });
