"use client";

import { useSectionInView } from '@/lib/hooks'
import React, { FormEvent, useState } from 'react'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './submitButton';
import toast from 'react-hot-toast';

const emailAction = async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);
    if (error) {
        toast.error(error);
        return;
    }
    toast.success("Email sent successfully");
}

export default function Contact() {
    const { ref } = useSectionInView('Contact')
    const [formData, setFormData] = useState<{ senderEmail: string, message: string }>({ senderEmail: '', message: '' });
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('senderEmail', formData.senderEmail);
        formDataObj.append('message', formData.message);
        await emailAction(formDataObj);
        setFormData({ senderEmail: '', message: '' });
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    return (
        <motion.section id="contact" ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at <a className="underline" href="mailto:saranshparikh@gmail.com">saranshparikh@gmail.com</a> or through this form.
            </p>
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col dark:text-black">
                <input required maxLength={500} placeholder="Your email" name="senderEmail" type="email" className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" value={formData.senderEmail} onChange={handleChange} />
                <textarea required maxLength={5000} placeholder="Your message" name="message" className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" value={formData.message} onChange={handleChange} />
                <SubmitButton />
            </form>
        </motion.section>
    )
}
