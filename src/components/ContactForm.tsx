import { z } from "zod"
import axios from "axios";
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import EmailTag from './../assets/imgs/buttons/email_tag.png';
import NameTag from './../assets/imgs/buttons/name_tag.png';
import SendButton from "./../assets/imgs/buttons/Send_message.png";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "./ui/form"
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const formSchema = z.object({
    email: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    message: z.string().min(1, { message: "Enter a valid message" }),
})


export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [formRes, setFormRes] = useState<string>('')
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
        axios
            .post(`https://submit-form.com/${import.meta.env.VITE_FORMSPARK_FORM_ID}`, values,
                { headers: { 'Accept': 'application/json' } })
            .then(() => {
                setFormRes('success')
                form.reset()
                setLoading(false)
                setTimeout(() => {
                    setFormRes('')
                }, 4000)
            })
            .catch(() => {
                setLoading(false)
                setFormRes('error')
                setTimeout(() => {
                    setFormRes('')
                }, 4000)

            })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 max-w-xl w-full flex flex-col items-end relative z-30">

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }: any) => (
                        <FormItem className="w-full">
                            <div className="bg-[#747C94] shadow-inner shadow-black/25 flex items-center pl-4 rounded-xl">
                                <img src={EmailTag} alt="Email Tag" className="h-7 w-7" />
                                <FormControl className="bg-transparent">
                                    <Input placeholder="EMAIL ADDRESS" {...field} className="outline-none placeholder:text-white/25 py-3.5 placeholder:text-base" />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="w-full space-y-1">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }: any) => (
                            <FormItem className="w-full">
                                <div className="bg-[#747C94] shadow-inner shadow-black/25 flex items-start pl-4 rounded-xl">
                                    <div className="py-2">
                                        <img src={NameTag} alt="Email Tag" className="h-7 w-7" />
                                    </div>
                                    <FormControl className="bg-transparent">
                                        <Textarea
                                            {...field}
                                            placeholder="Message"
                                            className="resize-none bg-transparent h-28 w-full outline-none border-none placeholder:text-white/25 lg:text-lg" />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {
                        formRes === 'success' ?
                            <p className="text-[#B6F6FF] ml-2">Your message was sent successfully</p>
                            : formRes === 'error' ?
                                <p className="text-red-600 ml-2">Ooops!!! An error occured while trying to send</p> : ''
                    }
                </div>

                <div className="flex justify-end items-center gap-3">
                    {loading &&
                        <ClipLoader
                            color={'#B6F6FF'}
                            loading={loading}
                            size={35}
                            speedMultiplier={1}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    }
                    <button
                        type="submit"
                        className={`bg-none outline-none border-none max-w-[140px] md:max-w-[150px] ${loading && 'opacity-40'} xl:max-w-[200px]`}
                    >
                        <img
                            src={SendButton}
                            alt="Send Message"
                            className="h-auto w-full object-contain object-center"
                        />
                    </button>
                </div>
            </form>
        </Form>
    )
}

