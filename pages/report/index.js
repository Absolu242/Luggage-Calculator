import { useRouter } from "next/router";

//components
import Backpack from "../../components/Backpack";



export default function Report() {
  const router = useRouter();

  const { company } = router.query;

  
  return (
    <form className="form">
      <div className="form__content">
        <div>
          <select name="airlines" value={company} disabled={true}>
            <option>{company}</option>
          </select>
        </div>

        <div className="form__main">
          <Backpack />
        </div>
      </div>
    </form>
  );
}


