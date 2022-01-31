import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

//components
import Backpack from "../components/Backpack";
import Inventory from "../components/Inventory";
import Selected from "../components/Selected";

//data
import { airlines } from "../data/airline";
import { getData } from "../utils/getData";

const FormContainer = styled.form`
  .form__content {
    text-align: center;
    padding: 3rem 0;
  }

  select {
    padding: 0.8rem 1rem;
    background-color: #fff;
    cursor: pointer;
    border: none;
  }

  .form__main {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;

    .arrow {
      margin: 2rem;
    }
  }
`;

export default function Home({ data = [] }) {
  const [companyLimit, setCompanyLimit] = useState(0);
  const router = useRouter();
  const [formStep, setFormStep] = useState(0);

  const onHandlehange = (e) => {
    setCompanyLimit(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    router.push("/?report");
    setFormStep(1);
  };

  return (
    <FormContainer className="form" onSubmit={onFormSubmit}>
      <div className="form__content">
        <div>
          <select
            name="airlines"
            value={companyLimit}
            onChange={(e) => onHandlehange(e)}
            disabled={formStep >= 1 && true}
          >
            <option value={0}>Select a Company</option>
            {airlines.map((item, i) => (
              <option key={i} value={item.limit}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form__main">
          {formStep < 1 ? (
            <>
              {" "}
              <Inventory data={data.items} />
              <div className="arrow"></div>
              <Selected limit={companyLimit} />
            </>
          ) : (
            <Backpack />
          )}
        </div>
      </div>
    </FormContainer>
  );
}

export const getStaticProps = async () => {
  //const {items} = await require("../data/dummyData.json");

  try {
    const { data, errors } = await getData();
    if (errors || !data) {
      return { props: [] };
    }
    return { props: { data: JSON.parse(JSON.stringify(data)) } };
  } catch (error) {
    return { props: [] };
  }
};
