import { useForm } from "react-hook-form";
import Button from "src/components/button";
import Input from "src/components/input";

interface IExampleForm {
  example: string;
  exampleRequired: string;
}

export default function FormPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IExampleForm>({ defaultValues: { example: "default value" } });

  const onSubmit = (data: IExampleForm) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex max-w-screen-sm flex-col justify-start">
        <Input border label="Example Input" {...register("example")} />
        <Input
          label="Example Required Input"
          border
          errorText={errors.exampleRequired ? "This field is required" : ""}
          {...register("exampleRequired", { required: true })}
        />
        <Button type="submit" text="Submit" />
      </div>
    </form>
  );
}
