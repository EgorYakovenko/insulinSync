import { Formik, Form, Field, FieldArray } from "formik";
import css from "./ModalCreateNewDish.module.css";

interface IFormCreateNewDish {
  name: string;
  cooking: string;
  ingredients: { ingredient: string; quantity: string }[];
}

export default function ModalCreateNewDish() {
  const initialValues: IFormCreateNewDish = {
    name: "",
    cooking: "",
    ingredients: [{ ingredient: "", quantity: "" }],
  };

  const handleSubmit = (values: IFormCreateNewDish) => {
    console.log(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className={css.container}>
            <Field
              className={css.title}
              type="text"
              name="name"
              placeholder="Название блюда"
            ></Field>
            <Field
              className={css.title}
              type="text"
              name="cooking"
              placeholder="Процесс приготовления"
            ></Field>

            <FieldArray name="ingredients">
              {({ push }) => (
                <>
                  {values.ingredients.map((_, index) => (
                    <div key={index}>
                      <Field
                        className={css.title}
                        type="text"
                        name={`ingredients[${index}].ingredient`}
                        placeholder="Ингредиент"
                      ></Field>
                      <Field
                        className={css.quantity}
                        type="text"
                        name={`ingredients[${index}].quantity`}
                        placeholder="Кол-во"
                      ></Field>
                    </div>
                  ))}
                  <div className={css.btnContainer}>
                    <button
                      type="button"
                      onClick={() => push({ ingredient: "", quantity: "" })}
                    >
                      Добавить ингредиент
                    </button>
                    <button type="submit">Сохранить</button>
                  </div>
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </>
  );
}
