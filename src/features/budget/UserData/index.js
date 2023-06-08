import Section from "../../../common/Section";
import { Income } from "./Income";
import Cost from "./Cost";
import Result from "./Result";

export default () => {
  return (
    <main>
      <Section>
        <Income />
      </Section>
      <Section>
        <Cost />
      </Section>
      <Section>
        <Result />
      </Section>
    </main>
  );
};
