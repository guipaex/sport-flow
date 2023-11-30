// ContactForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("/api/enviar-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("E-mail enviado com sucesso!");
      } else {
        console.error("Erro ao enviar e-mail");
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name'>Nome:</label>
        <input type='text' id='name' name='name' {...register("name", { required: "Campo obrigatório" })} />
        {errors?.name && <p>{errors.name.message}</p>}
      </div>
      {/* Adicione mais campos conforme necessário */}
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default ContactForm;
