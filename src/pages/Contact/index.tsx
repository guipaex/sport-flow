import { useState } from "react";
import { GrInstagram } from "react-icons/gr";
import { ContactValues } from "../../utils/interfaces";
import style from "./contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState<ContactValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para lidar com o envio do formulário
    alert("Formulario enviado");
    console.log("Formulário enviado:", formData);
  };
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Fale conosco!</h1>
        <p className={style.text}>
          Acreditamos que nossos usuários são a chave para continuar evoluindo e melhorando nossa plataforma. <br />
          Preencha o formulário ou nos mande uma DM no{" "}
          <a className={style.ig} href='https://www.instagram.com/sportflow.br/'>
            <GrInstagram className={style.ig__icon} /> @sportflow.br{" "}
          </a>
        </p>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.form__field}>
          <label htmlFor='name'>
            Nome: <abbr title='required'>*</abbr>
          </label>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Luciana Almeida'
            value={formData.name}
            onChange={handleChange}
            className={style.form__input}
          />
        </div>

        <div className={style.form__field}>
          <label htmlFor='email'>
            E-mail: <abbr title='required'>*</abbr>
          </label>
          <input
            id='email'
            type='text'
            name='email'
            placeholder='email@mail.com'
            value={formData.email}
            onChange={handleChange}
            className={style.form__input}
          />
        </div>

        <div className={style.form__field}>
          <label htmlFor='subject'>Assunto:</label>
          <input
            id='subject'
            type='text'
            name='subject'
            placeholder='Motivo do Contato'
            value={formData.subject}
            onChange={handleChange}
            className={style.form__input}
          />
        </div>
        <div className={style.form__field}>
          <label htmlFor='message'>
            Mensagem: <abbr title='required'>*</abbr>
          </label>
          <textarea
            form=''
            id='message'
            name='message'
            placeholder='Sua mensagem...'
            value={formData.message}
            onChange={handleChange}
            className={style.form__input}
          />
        </div>
        <button type='submit' className={style.form__button}>
          Enviar
        </button>
      </form>
    </section>
  );
}
