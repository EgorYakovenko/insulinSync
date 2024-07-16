import { Formik, Form, Field } from "formik";
import css from "./ModalCreateNewDish.module.css";

interface IFormCreateNewDich {
  name: string;
  cooking: string;
  ingredient: string;
  quantity: string;
}

export default function ModalCreateNewDish() {
  const initialValues: IFormCreateNewDich = {
    name: "",
    cooking: "",
    ingredient: "",
    quantity: "",
  };

  const handleSubmit = (values: IFormCreateNewDich | number) => {
    console.log(values);
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.container}>
          <div>
            <Field type="text" name="name" placeholder="Название блюда"></Field>
            <Field
              type="text"
              name="cooking"
              placeholder="Процесс приготовления"
            ></Field>
          </div>

          <div>
            <Field
              type="text"
              name="ingredient"
              placeholder="Ингредиент"
            ></Field>
            <Field
              type="text"
              name="quantity"
              placeholder="Колличество"
            ></Field>
          </div>

          <div>
            <button type="button">Добавить ингредиент</button>
            <button type="submit">Сохранить</button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
