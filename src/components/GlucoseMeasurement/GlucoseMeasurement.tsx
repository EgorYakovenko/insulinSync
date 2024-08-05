import { Formik, Form, Field } from "formik";
import { useRef } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";

interface IFormValues {
  glucoseLevel: number | null;
  Injection: number | null;
}

export default function GlucoseMeasurement() {
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? "/");

  const initialValues: IFormValues = {
    glucoseLevel: null,
    Injection: null,
  };

  const handleSubmit = (values: IFormValues | number) => {
    console.log(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Link to={goBackLink.current}>Назад</Link>
          <div>
            <h2>Время</h2>
            <p>12:30</p>
          </div>
          <div>
            <h2>Уровень глюкозы</h2>
            <Field
              type="number"
              name="glucoseLevel"
              placeholder="ммоль"
            ></Field>
            <p>5.3</p>
          </div>
          <h2>Подколка</h2>
          <Field type="number" name="Injection"></Field>
        </Form>
      </Formik>
    </>
  );
}

//   <div>
//     <ul>
//       <li>
//         <h2>Время</h2>
//         <p>04.08.2024</p>
//         <p>12:30</p>
//       </li>
//       <li>
//         <h2>Уровень глюкозы</h2>
//         <p>5.3</p>
//       </li>
//       <li>
//         <h2>Подколка</h2>
//         <p>5 ед</p>
//       </li>
//     </ul>
//     <button type="button">Сохранить</button>
//   </div>;
