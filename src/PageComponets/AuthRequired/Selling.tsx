import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AuthNavBar } from "@/componentsPage/dashboard/auth-navnar";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
const formSchema = z.object({
    name:z.string(),
      coinName: z.string(),
      coin_image_url:z.string(),
      coinsNumber:z.number(),
      sellingPrice: z.number(),
      contact:z.string().email(),
      terms:z.string()
    
  });
export const Selling = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            coinName: "",
            coinsNumber:1,
            coin_image_url:"",
            sellingPrice: 1,
            contact:"",
            terms:""
        },
      });
      const handleSubmit = () => {};
  return (
    <div className={cn("pb-[100px]  body flow overflow-x-hidden")}>
      <AuthNavBar />
      <div className="max-w-[1280px] h-[100vh] mx-auto px-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md mx-auto w-full flex flex-col gap-4"
        >
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Enter your name <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Input placeholder="name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coinName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Enter name of coin <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter you coin name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coin_image_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  enter image url ofyour  coin <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Input placeholder="image url" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coinsNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  enter number of coins <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Input placeholder="issue" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="sellingPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  enter sellingPrice of coins <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Input placeholder="selling price" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  enter email address <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Input placeholder="email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Describe your terms{" "}
                  <span className="text-red-500">*</span>{" "}
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="terms..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="primary"
            className={cn("z-1")}
          >
            Submit
          </Button>
          <div></div>
        </form>
      </Form>
      </div>
    </div>
  );
};
