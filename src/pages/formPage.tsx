import { useMemo } from "react";
import { useForm } from "react-hook-form";
import Button from "src/components/button";
import Input from "src/components/input";

interface IExampleForm {
  example: string;
  exampleRequired: string;
}

export default function FormPage() {
  const defaultValues: IExampleForm = useMemo(() => {
    return { example: "default value", exampleRequired: "" };
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IExampleForm>({
    defaultValues,
  });

  const onSubmit = (data: IExampleForm) => console.log(data);
  const { example, exampleRequired } = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex max-w-screen-sm flex-col justify-start">
        <Input border label="Example Input" {...register("example")} value={example} />
        <Input
          label="Example Required Input"
          border
          errorText={errors.exampleRequired ? "This field is required" : ""}
          {...register("exampleRequired", { required: true })}
          value={exampleRequired}
        />
        <Button type="submit" text="Submit" />
      </div>
    </form>
  );
}
