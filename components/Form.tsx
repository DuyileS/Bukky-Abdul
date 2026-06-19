import React, { useState } from "react";
import { toast } from "react-toastify";

interface FormSubmitHandler {
    (e: React.FormEvent<HTMLFormElement>): void;
}

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit: FormSubmitHandler = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            let result;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                result = await response.json();
            } else {
                result = { message: await response.text() };
            }

            if (response.ok) {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error(`Error: ${result.message || "Failed to send message"}`);
            }
        } catch (error) {
            toast.error("An error occurred while sending the message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5"
        >
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-deep-gray/70 mb-2 ml-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-4 bg-warm-beige/30 border border-deep-gray/10 rounded-2xl focus:border-dusty-purple focus:ring-1 focus:ring-dusty-purple outline-none transition-all duration-300 text-deep-gray placeholder:text-deep-gray/40"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-deep-gray/70 mb-2 ml-1">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-4 bg-warm-beige/30 border border-deep-gray/10 rounded-2xl focus:border-dusty-purple focus:ring-1 focus:ring-dusty-purple outline-none transition-all duration-300 text-deep-gray placeholder:text-deep-gray/40"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep-gray/70 mb-2 ml-1">Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-4 bg-warm-beige/30 border border-deep-gray/10 rounded-2xl focus:border-dusty-purple focus:ring-1 focus:ring-dusty-purple outline-none transition-all duration-300 text-deep-gray placeholder:text-deep-gray/40 resize-none"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <button
                className="w-full py-4 mt-4 font-bold tracking-wider text-white uppercase transition-all duration-300 rounded-full bg-dusty-purple hover:bg-gold hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}>
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Sending...
                    </span>
                ) : (
                    "Send Message"
                )}
            </button>
        </form>
    );
};

export default Form;
