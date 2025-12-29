"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Replace with your API endpoint
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <Card className="border-0 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Contact Form</CardTitle>
          <CardDescription>
            Fill out the form below or reach us directly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name")}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <Textarea
                placeholder="Tell us about your project or question..."
                {...register("message")}
                className={errors.message ? "border-destructive" : ""}
                rows={5}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
              )}
            </div>
            
            <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </Button>
          </form>

          <div className="pt-8 border-t text-sm text-muted-foreground text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@company.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
