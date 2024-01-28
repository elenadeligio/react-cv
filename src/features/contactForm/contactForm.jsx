import { useForm } from "react-hook-form";
import "./contactForm.css";

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label>Your Name (Required)</label>
                <input
                    {...register("name", { required: true, pattern: /^[a-zA-Z]{2,}$/ })}
                    className={errors.name ? "errorInput" : ""}
                />
            </div>
            <div>
                <label>Your Email (Required)</label>
                <input
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    })}
                    className={errors.email ? "errorInput" : ""}
                />
            </div>
            <div>
                <label>Subject</label>
                <input {...register("subject")} />
            </div>
            <div>
                <label>Your Message</label>
                <input {...register("message")} className="message" />
            </div>
            <input type="submit" value="Send Message" />
        </form>
    );
};