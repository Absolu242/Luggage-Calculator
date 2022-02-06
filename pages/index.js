import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//components
import Backpack from "../components/Backpack";
import Inventory from "../components/Inventory";
import Selected from "../components/Selected";

//data
import { airlines } from "../data/airline";
import { getData } from "../utils/getData";

export default function Home({ data = [] }) {
  const [company, setCompany] = useState("");
  const [companyLimit, setCompanyLimit] = useState(0);
  const router = useRouter();

 
  const onHandlehange = (e) => {
    setCompany(e.target.value);
  };

  useEffect(() => {
    //we get the limit of the company
    let filterCompany = airlines.filter((item) => item.label === company);
    let getLimit = filterCompany[0] === undefined ? 0 : filterCompany[0].limit;
    setCompanyLimit(getLimit);
  }, [company]);

  //this form submit the form and send us to the report page
  const onFormSubmit = (e) => {
    e.preventDefault();
    router.push(`/report/?company=${company}`);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form__content">
        <div>
          <select
            name="airlines"
            value={company}
            onChange={(e) => onHandlehange(e)}
          >
            <option value={0}>Select a Company</option>
            {airlines.map((item, i) => (
              <option key={i} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form__main">
          <Inventory data={data.items} />
          <div className="arrow"></div>
          <Selected limit={companyLimit} />
        </div>
      </div>
    </form>
  );
}

export const getStaticProps = async () => {
  // const data = await require("../data/dummyData.json");

  // return { props: { data: JSON.parse(JSON.stringify(data)) } };
  try {
    const { data, errors } = await getData();
    const loadingData = {};
    if (errors || !data) {
      return { props: { data: JSON.parse(JSON.stringify(errors)) } };
    }
    return { props: { data: JSON.parse(JSON.stringify(data)) } };
  } catch (error) {
    return { notFound: true };
  }
};
