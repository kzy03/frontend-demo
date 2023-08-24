import Input from "../../ui/Input";

const NrcRocovery = () => {
  return <Input label="Enter NRC Number" type="text" placeholder="**/***(n)******"/>;
};
const OldNrcRocovery = () => {
  return <Input label="Enter NRC Number" type="text" placeholder="**/***(n)******" />;
};
const PhoneRecovery = () => {
  return <Input label="Enter Phone Number" type="tel" placeholder="+95"/>;
};
const PassportRocovery = () => {
  return <Input label="Enter Passport Number" type="text" placeholder="Passport" />;
};

export { PhoneRecovery, NrcRocovery, OldNrcRocovery, PassportRocovery };
