import ServiceModalComponent from "./Component";

const ServiceModalContainer = ({ setMordalC }) => {
  const onClick = () => {
    setMordalC(false);
  };
  return <ServiceModalComponent onClick={onClick}></ServiceModalComponent>;
};

export default ServiceModalContainer;
