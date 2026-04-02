import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Style from './select.module.css';


const animatedComponents = makeAnimated();

export default function AnimatedMulti({ data, label }: 
  { data: { label: string; value: string; }[]; label: string }) {
  return (

    <div className={Style.container}>
      <label className={Style.label}>{label}</label>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={["Segunda-feira", "Sexta-feira"]}
        isMulti
        options={data}
        className={Style.select}
      />
    </div>
  );
}
