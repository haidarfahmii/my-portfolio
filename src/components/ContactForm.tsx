import { LuSend } from "react-icons/lu";
import useFormContact from "@/features/Contact/hooks/useFormContact";

interface ContactFormProps {
  variant?: "modal" | "section";
  onFormSubmit?: () => void;
}

export default function ContactForm({
  variant = "section",
  onFormSubmit,
}: ContactFormProps) {
  const { formik, status, feedback } = useFormContact({
    variant,
    onFormSubmit,
  });

  // Tentukan kelas CSS berdasarkan variant
  const labelColorClass =
    variant === "section" ? "text-gray-300" : "text-gray-700";
  const inputClasses =
    variant === "section"
      ? "w-full p-3 rounded-md bg-[#1c1c22] border border-gray-700 focus:outline-none focus:border-amber-400 transition-colors text-white"
      : "w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900";
  const buttonClasses =
    variant === "section"
      ? "inline-flex items-center gap-2 rounded-lg bg-amber-600 py-3 px-5 font-medium text-slate-800 shadow-md transition hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-50"
      : "inline-flex items-center gap-2 rounded-lg bg-slate-600 py-3 px-5 font-medium text-white shadow-md transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      {/* name */}
      <div>
        <label
          htmlFor="name"
          className={`mb-1 block text-sm font-medium ${labelColorClass}`}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={inputClasses}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
        )}
      </div>

      {/* email */}
      <div>
        <label
          htmlFor="email"
          className={`mb-1 block text-sm font-medium ${labelColorClass}`}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={inputClasses}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
        )}
      </div>

      {/* subject */}
      {variant === "section" && (
        <div>
          <label
            htmlFor="subject"
            className={`mb-1 block text-sm font-medium ${labelColorClass}`}
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClasses}
          />
          {formik.touched.subject && formik.errors.subject && (
            <p className="mt-1 text-sm text-red-600">{formik.errors.subject}</p>
          )}
        </div>
      )}

      {/* message */}
      <div>
        <label
          htmlFor="message"
          className={`mb-1 block text-sm font-medium ${labelColorClass}`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={inputClasses}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.message}</p>
        )}
      </div>

      {/* button submit */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={buttonClasses}
        >
          {formik.isSubmitting ? "Sending..." : "Send Message"}
          <LuSend size={18} />
        </button>
      </div>

      {/* feedback (Ini tetap sama, karena kita teruskan 'status' dan 'feedback' dari hook) */}
      {feedback && (
        <p
          className={`mt-2 text-sm ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
