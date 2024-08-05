// import { Formik, Form, Field } from "formik";
// import css from "./ModalAddRation.module.css";
// import { useRef } from "react";
// import { Link, useLocation, NavLink } from "react-router-dom";

// interface IFormValues {
//   daytime: string;
//   food: string;
//   glucose: string;
//   insulin1: string;
//   insulin2: string;
//   quantity: string;
//   unit: string;
// }

// export default function ModalAddRation() {
//   const location = useLocation();
//   const goBackLink = useRef(location.state?.from ?? "/diary");

//   const initialValues: IFormValues = {
//     daytime: "",
//     food: "",
//     glucose: "",
//     insulin1: "",
//     insulin2: "",
//     quantity: "",
//     unit: "",
//   };
//   const handleSubmit = (values: IFormValues | number) => {
//     console.log(values);
//   };
//   return (
//     <>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//           <Link to={goBackLink.current}>Назад</Link>
//           <div className={css.container}>
//             <div>
//               <Field className={css.select} as="select" name="daytime">
//                 <option className={css.option} value="breakfast">
//                   Завтрак
//                 </option>
//                 <option className={css.option} value="lunch">
//                   Обед
//                 </option>
//                 <option className={css.option} value="dinner">
//                   Ужин
//                 </option>
//                 <option className={css.option} value="snack">
//                   Перекус
//                 </option>
//               </Field>
//               <div className={css.dateContainer}>
//                 <p>24.06.2024</p>
//                 <p>10:15</p>
//               </div>
//             </div>

//             <div className={css.countContainer}>
//               <div>
//                 <div className={css.countInsulin}>
//                   <label className={css.countContainer}>
//                     <Field
//                       className={css.glucose}
//                       type="text"
//                       name="glucose"
//                       placeholder="ммоль"
//                     ></Field>
//                   </label>
//                   <div>
//                     <p>5.3</p>
//                   </div>
//                 </div>
//               </div>

//               <div className={css.insulin}>
//                 <label className={css.countContainer}>
//                   <Field
//                     placeholder="Инсулин"
//                     className={css.glucose}
//                     type="text"
//                     name="insulin1"
//                   ></Field>
//                 </label>
//                 <label className={css.countContainer}>
//                   <Field
//                     placeholder="Инсулин"
//                     className={css.glucose}
//                     type="text"
//                     name="insulin2"
//                   ></Field>
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className={css.test}>
//             <label className={css.foodInput}>
//               <Field type="text" name="food" placeholder="Еда"></Field>
//             </label>
//             <div className={css.countFood}>
//               <Field
//                 className={css.test2}
//                 type="text"
//                 name="quantity"
//                 placeholder="Кол-во"
//               ></Field>

//               <Field
//                 className={css.test2}
//                 type="text"
//                 name="unit"
//                 placeholder="Ед.изм"
//               ></Field>
//             </div>
//             <div>
//               <p>5ед</p>
//             </div>
//           </div>
//           <button>Сохранить</button>
//           <button>+ Продукт</button>
//           <button>+ Приём пищи</button>
//         </Form>
//       </Formik>
//     </>
//   );
// }

import { Formik, Form, Field, FieldArray } from "formik";
import css from "./ModalAddRation.module.css";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

interface IProduct {
  name: string;
  quantity: string;
  unit: string;
}

interface IMeal {
  daytime: string;
  food: IProduct[];
  glucose: string;
  insulin1: string;
  insulin2: string;
}

interface IFormValues {
  meals: IMeal[];
}

const initialValues: IFormValues = {
  meals: [
    {
      daytime: "",
      food: [{ name: "", quantity: "", unit: "" }],
      glucose: "",
      insulin1: "",
      insulin2: "",
    },
  ],
};

export default function ModalAddRation() {
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? "/diary");

  const handleSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <Link to={goBackLink.current}>Назад</Link>
            <FieldArray name="meals">
              {({ push }) => (
                <>
                  {values.meals.map((meal, mealIndex) => (
                    <div key={mealIndex} className={css.container}>
                      <div>
                        <Field
                          className={css.select}
                          as="select"
                          name={`meals[${mealIndex}].daytime`}
                        >
                          <option className={css.option} value="breakfast">
                            Завтрак
                          </option>
                          <option className={css.option} value="lunch">
                            Обед
                          </option>
                          <option className={css.option} value="dinner">
                            Ужин
                          </option>
                          <option className={css.option} value="snack">
                            Перекус
                          </option>
                        </Field>
                        <div className={css.dateContainer}>
                          <p>24.06.2024</p>
                          <p>10:15</p>
                        </div>
                      </div>

                      <div className={css.countContainer}>
                        <div>
                          <div className={css.countInsulin}>
                            <label className={css.countContainer}>
                              <Field
                                className={css.glucose}
                                type="text"
                                name={`meals[${mealIndex}].glucose`}
                                placeholder="ммоль"
                              />
                            </label>
                            <div>
                              <p>5.3</p>
                            </div>
                          </div>
                        </div>

                        <div className={css.insulin}>
                          <label className={css.countContainer}>
                            <Field
                              placeholder="Инсулин"
                              className={css.glucose}
                              type="text"
                              name={`meals[${mealIndex}].insulin1`}
                            />
                          </label>
                          <label className={css.countContainer}>
                            <Field
                              placeholder="Инсулин"
                              className={css.glucose}
                              type="text"
                              name={`meals[${mealIndex}].insulin2`}
                            />
                          </label>
                        </div>
                      </div>

                      <FieldArray name={`meals[${mealIndex}].food`}>
                        {({ push: pushFood }) => (
                          <>
                            {meal.food.map((_, foodIndex) => (
                              <div key={foodIndex} className={css.test}>
                                <label className={css.foodInput}>
                                  <Field
                                    type="text"
                                    name={`meals[${mealIndex}].food[${foodIndex}].name`}
                                    placeholder="Еда"
                                  />
                                </label>
                                <div className={css.countFood}>
                                  <Field
                                    className={css.test2}
                                    type="text"
                                    name={`meals[${mealIndex}].food[${foodIndex}].quantity`}
                                    placeholder="Кол-во"
                                  />
                                  <Field
                                    className={css.test2}
                                    type="text"
                                    name={`meals[${mealIndex}].food[${foodIndex}].unit`}
                                    placeholder="Ед.изм"
                                  />
                                </div>
                                <div>
                                  <p>5ед</p>
                                </div>
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={() =>
                                pushFood({ name: "", quantity: "", unit: "" })
                              }
                            >
                              + Продукт
                            </button>
                          </>
                        )}
                      </FieldArray>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      push({
                        daytime: "",
                        food: [{ name: "", quantity: "", unit: "" }],
                        glucose: "",
                        insulin1: "",
                        insulin2: "",
                      })
                    }
                  >
                    + Приём пищи
                  </button>
                </>
              )}
            </FieldArray>
            <button type="submit">Сохранить</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
