"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the form schema using Zod for validation
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  dateOfBirth: z.string().min(1, { message: "Date of Birth is required." }),
  gender: z.enum(["Male", "Female", "Other"], { message: "Gender is required." }),
  contactNumber: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  smoking: z.enum(["Yes", "No"]),
  smokingFrequency: z.string().optional(),
  alcohol: z.enum(["Yes", "No"]),
  alcoholFrequency: z.string().optional(),
  exercise: z.enum(["Yes", "No"]),
  exerciseDays: z.string().optional(),
  exerciseType: z.string().optional(),
  diet: z.string().optional(),
  sleepHours: z.string().optional(),
  stressLevel: z.string().optional(),
  chronicDiseases: z.array(z.string()),
  allergies: z.array(z.string()).optional(),
  symptoms: z.array(z.string()).optional(),
  symptomDuration: z.string().optional(),
});

export function PatientForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dateOfBirth: "",
      gender: "Male",
      contactNumber: "",
      email: "",
      smoking: "No",
      alcohol: "No",
      exercise: "No",
      chronicDiseases: [],
      allergies: [],
      symptoms: [],
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Information */}
        <h2 className="text-lg font-bold text-gray-800">Personal Information</h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="border-gray-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} className="border-gray-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Male" id="gender-male" />
                    <FormLabel htmlFor="gender-male">Male</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Female" id="gender-female" />
                    <FormLabel htmlFor="gender-female">Female</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Other" id="gender-other" />
                    <FormLabel htmlFor="gender-other">Other</FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input placeholder="1234567890" {...field} className="border-gray-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@example.com" {...field} className="border-gray-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Lifestyle Information */}
        <h2 className="text-lg font-bold text-gray-800">Lifestyle Information</h2>
        <FormField
          control={form.control}
          name="smoking"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you smoke?</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" id="smoking-yes" />
                    <FormLabel htmlFor="smoking-yes">Yes</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="smoking-no" />
                    <FormLabel htmlFor="smoking-no">No</FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch("smoking") === "Yes" && (
          <FormField
            control={form.control}
            name="smokingFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How many cigarettes per day?</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 10" {...field} className="border-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="alcohol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you consume alcohol?</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" id="alcohol-yes" />
                    <FormLabel htmlFor="alcohol-yes">Yes</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="alcohol-no" />
                    <FormLabel htmlFor="alcohol-no">No</FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch("alcohol") === "Yes" && (
          <FormField
            control={form.control}
            name="alcoholFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often?</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Daily">Daily</SelectItem>
                      <SelectItem value="Weekly">Weekly</SelectItem>
                      <SelectItem value="Occasionally">Occasionally</SelectItem>
                      <SelectItem value="Rarely">Rarely</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Other Fields */}
        {/* Complete other fields similarly... */}

        {/* Submit Button */}
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Submit</Button>
      </form>
    </Form>
  );
}
